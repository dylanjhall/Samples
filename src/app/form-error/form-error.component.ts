import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ShowErrorComponent } from './show-error/show-error.component';

@Component({
  selector: 'se-form-error',
  imports: [FormsModule, ShowErrorComponent, JsonPipe],
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.css']
})
export default class FormErrorComponent {
  name = '';
  age = 0;
}
