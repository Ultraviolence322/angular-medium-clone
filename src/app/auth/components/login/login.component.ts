import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { loginAction } from '../../store/actions/login.action';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors';
import { LoginRequestInterface } from '../../types/loginRequest.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup
  isSubmitting!: boolean
  
  constructor(private fb: FormBuilder, private store: Store) { }
  
  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()

    this.store.pipe(select(validationErrorsSelector)).subscribe(validationErrors => {
      console.log('validationErrors', validationErrors);
      
      if(validationErrors) {
        console.log('this.form', this.form);
        Object.keys(validationErrors).map(key => {
          if(this.form.controls[key]) {
            this.form.controls[key].setErrors({error: validationErrors[key].join(';\n')})
          } else {
            this.form.setErrors({error: key + validationErrors[key].join(';\n')})
          }
        })
        console.log('this.form2', this.form);

        
      }
    })
  }

  
  initializeValues(): void {
    this.store.pipe(select(isSubmittingSelector)).subscribe(e => this.isSubmitting = e)
  }
  
  initializeForm(): void {
    this.form = this.fb.group({
      email: [''],
      password: [''],
    })
  }

  onSubmit(): void {
    const data: LoginRequestInterface = {
      user: {
        ...this.form.value
      }
    }
    
    this.store.dispatch(loginAction({request: data}))
  }
}
