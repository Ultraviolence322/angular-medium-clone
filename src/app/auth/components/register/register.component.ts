import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { select, Store } from '@ngrx/store';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';

import { RegisterRequestInterface } from 'src/app/shared/types/registerRequest.interface';
import { registerAction } from '../../store/actions';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup
  isSubmitting!: boolean
  
  constructor(private fb: FormBuilder, private store: Store) { }
  
  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()

    this.store.pipe(select(validationErrorsSelector)).subscribe(validationErrors => {
      if(validationErrors) {
        Object.keys(validationErrors).map(key => {
          this.form.controls[key].setErrors({error: validationErrors[key].join(';\n')})
        })

        console.log('this.form', this.form);
      }
    })
  }

  
  initializeValues(): void {
    this.store.pipe(select(isSubmittingSelector)).subscribe(e => this.isSubmitting = e)
  }
  
  initializeForm(): void {
    this.form = this.fb.group({
      username: [''],
      email: [''],
      password: [''],
    })
  }

  onSubmit(): void {
    const data: RegisterRequestInterface = {
      user: {
        ...this.form.value
      }
    }
    
    this.store.dispatch(registerAction({request: data}))
  }
}
