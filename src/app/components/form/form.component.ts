import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { COLUMN, ROW } from 'src/app/app.component';
import { Form } from 'src/app/models/form/form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  form: FormGroup;
  @Output() onSubmit = new EventEmitter<Form>();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      x: [null, Validators.compose([
        Validators.required,
        Validators.max(ROW),
        Validators.min(1)
      ])],
      y: [null, Validators.compose([
        Validators.required,
        Validators.max(COLUMN),
        Validators.min(1)
      ])],
      setTo: [null, Validators.required ]
    });
  }

  checkValidation(tag: string) {
    return this.form.controls[tag].invalid && (
      this.form.controls[tag].touched ||
      this.form.controls[tag].dirty
    )
  }

  checkDisability() {
    return (
      this.form.controls['x'].invalid ||
      this.form.controls['y'].invalid ||
      this.form.controls['setTo'].invalid
    )
  }

  onComplete(value: Form) {
    if(this.form.valid) {
      this.onSubmit.emit(value)
      this.form.reset();
    }
  }

}
