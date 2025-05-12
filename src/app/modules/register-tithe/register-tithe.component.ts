import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-tithe',
  templateUrl: './register-tithe.component.html',
  styleUrls: ['./register-tithe.component.scss'],
})
export class RegisterTitheComponent {
  registerTitheForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.registerTitheForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      birthday: [
        '',
        [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)],
      ],
      since: ['', [Validators.required]],
      celphone: [
        '',
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
          Validators.pattern(/^[0-9]*$/),
        ],
      ],
      address: ['', [Validators.required, Validators.minLength(20)]],
    });
  }
}
