import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { pluck, take } from 'rxjs/operators';
import { Slide, SlidesService } from '../slides.service';

@Component({
  selector: 'markdown-edit',
  template: `<a routerLink="/home"><p>Edit</p></a>
    <select-file (fileName)="setSlide($event)"></select-file>
    <input type="text" [value]="(slide$ | async)?.yaml?.title" />
    <input type="number" [value]="(slide$ | async)?.yaml?.position" />
    <!-- <label
      ><input type="checkbox" [checked]="fancy" (change)="fancy = !fancy" /> Fancy Editor</label
    >
    <md-edit *ngIf="fancy" [markdown]="markDown" (updates)="update($event)"></md-edit> -->
    <textarea (input)="update($event.target.value)"></textarea> `,
  styles: [
    `
      :host {
        display: block;
        /* border: 3px solid red; */
        padding: 1rem;
      }
      textarea {
        width: 98vw;
        height: calc(100vh - 7rem);
      }
    `,
  ],
})
export class EditComponent implements OnInit {
  elm = this.elmRef.nativeElement as HTMLDivElement;
  slide$ = new ReplaySubject<Slide>(1);
  fancy = false;
  markDown$ = this.slide$.pipe(pluck('markdown'));
  ngOnInit() {}

  setSlide(slide: Slide) {
    const ta = this.elm.querySelector('textarea');

    console.log('new slide', slide);
    this.slide$.next(slide);
    ta.value = slide.markdown;
    // this.slide = slide;
    // this.markDown = slide.markdown;
    // this.cdr.detectChanges()
  }

  constructor(
    private sld: SlidesService,
    private cdr: ChangeDetectorRef,
    private elmRef: ElementRef
  ) {}

  updateFancy() {
    this.fancy = !this.fancy;
  }
  async update(markdown: string) {
    const slide = await this.slide$.pipe(take(1)).toPromise();
    // markdown = markdown.trim();
    const title = this.elm.querySelector<HTMLInputElement>('input[type=text]').value;
    const position = this.elm.querySelector<HTMLInputElement>('input[type=number]').valueAsNumber;
    if (markdown !== slide.markdown) {
      slide.markdown = markdown;
      const updatedSlide = { ...slide, markdown, title, position };
      this.sld.save(updatedSlide);
    }
  }
}

// Generated by https://quicktype.io

export interface NpmResults {
  name:         string;
  scope:        string;
  version:      string;
  description?: string;
  keywords:     string[];
  date:         string;
  links:        Links;
  author?:      Author;
  publisher:    Publisher;
  maintainers:  Publisher[];
}

export interface Author {
  name:      string;
  email?:    string;
  url?:      string;
  username?: string;
}

export interface Links {
  npm:         string;
  homepage?:   string;
  repository?: string;
  bugs?:       string;
}

export interface Publisher {
  username: string;
  email:    string;
}