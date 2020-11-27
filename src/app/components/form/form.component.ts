import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Form } from 'src/app/models/form/form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      x: [null, Validators.compose([Validators.required, Validators.max(4), Validators.min(1)])],
      y: [null, Validators.compose([Validators.required, Validators.max(4), Validators.min(1)])],
      setTo: [null, Validators.required ]
    });
  }

  checkValidation(tag: string) {
    return this.form.controls[tag].invalid
  }

  checkDisability() {
    return (
      this.form.controls['x'].invalid ||
      this.form.controls['y'].invalid ||
      this.form.controls['setTo'].invalid
    )
  }

  onSubmit(value: Form) {
    if(this.form.valid) {
      console.log(value)
      this.form.reset();
    }
  }

}
