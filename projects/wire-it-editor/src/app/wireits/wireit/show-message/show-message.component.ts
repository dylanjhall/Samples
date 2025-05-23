import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, inject, Input, Output } from '@angular/core';
import { map, ReplaySubject, tap } from 'rxjs';

@Component({
  selector: 'se-show-message',
  imports: [AsyncPipe],
  template: `
    <dialog>
      <header>
        <h4>System message:</h4>
      </header>
      <main>
        <p>{{ (vm$ | async)?.message }}</p>
      </main>
      <footer>
        <button (click)="close()">❌</button>
      </footer>
    </dialog>
  `,
  styleUrls: ['./show-message.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowMessageComponent {
  @Output() dismissed = new EventEmitter<void>();
  elm = inject(ElementRef).nativeElement as HTMLElement;
  dialog?: HTMLDialogElement;

  #message = new ReplaySubject(1);
  @Input() set message(message) {
    message && this.#message.next(message);
  }

  vm$ = this.#message.pipe(
    tap(message => {
      this.elm.style.display = 'block';
      this.dialog ??= this.elm.querySelector('dialog') as HTMLDialogElement;
      this.dialog.showModal();
    }),
    map(message => ({ message }))
  );

  close() {
    this.elm.style.display = 'none';
    this.dialog?.close();
  }
}
