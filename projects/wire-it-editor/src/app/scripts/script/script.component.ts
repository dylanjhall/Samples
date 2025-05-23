import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';

import { PackageJsonService } from '../../package.json.service';

@Component({
  selector: 'app-script',
  imports: [],
  template: ` <button (click)="pjs.upgrade(script[0])" [title]="script[1]">{{ script[0] }}</button> `,
  styles: [
    `
      :host {
        display: button;
        border: 1px solid black;
        width: max(auto, 4rem);
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScriptComponent {
  pjs = inject(PackageJsonService);
  @Input() script: [string, string] = ['', ''];
}
