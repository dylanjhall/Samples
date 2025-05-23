import { ient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import fm from 'front-matter';
import { combineLatest, EMPTY, forkJoin, Observable, ReplaySubject, Subject } from 'rxjs';
import { catchError, concatMap, debounceTime, map, repeat, shareReplay, take, tap } from 'rxjs/operators';
import { stringify } from 'yaml';

// import { safeDump } from 'js-yaml';

export interface SlideHeader {
  position: number;
  description?: string;
  title?: string;
  [key: string]: unknown;
}

export interface Slide {
  position: number;
  markdown: string;
  yaml: SlideHeader;
  filename: string;
}

@Injectable({
  providedIn: 'root'
})
export class SlidesService {
  private http = inject(ient);

  private saves = new Subject<Slide>();
  private slides = new ReplaySubject<Slide[]>(1);
  slides$ = this.slides.pipe(
    map(slides =>
      slides.sort((a, b) => {
        const keyA = a.position.toString().padStart(6, '0') + a.filename;
        const keyB = b.position.toString().padStart(6, '0') + b.filename;
        return keyA < keyB ? -1 : 1;
      })
    ),
    shareReplay({ bufferSize: 1, refCount: false })
  );

  slideSub = this.http
    .get<string[]>('http://localhost:8201/slides')
    .pipe(
      concatMap(files =>
        forkJoin(
          files.map(filename =>
            this.http.get(`http://localhost:8201/slides/${filename}`, { responseType: 'text' }).pipe(
              catchError(e => {
                console.log(e);
                return EMPTY;
              }),
              map(rawContent => {
                const { attributes, body } = fm(rawContent);
                return {
                  filename,
                  yaml: attributes as SlideHeader,
                  markdown: body,
                  position: attributes['position'] || 999
                };
              })
            )
          )
        )
      ),
      tap(slides => this.slides.next(slides))
    )
    .subscribe();

  savesSub = combineLatest([this.saves, this.slides$])
    .pipe(
      debounceTime(1500),
      take(1),
      tap(([slide, slides]: [Slide, Slide[]]) => {
        slide.yaml.position = slide.position;
        const newText = `---
${stringify(slide.yaml)}---
${slide.markdown.trimStart()}
`;
        // this.http.put(`http://localhost:8201/slides/${slide.filename}`, newText).subscribe();
        const newSlides = slides.map(sl => (sl.filename === slide.filename ? slide : sl));
        this.slides.next(newSlides);
      }),
      repeat()
    )
    .subscribe();

  async save(slide: Slide) {
    this.saves.next(slide);
  }

  getByFilename(name: string): Observable<Slide> {
    return this.slides$.pipe(map(files => files.find(slide => slide.filename === name)));
  }
}
