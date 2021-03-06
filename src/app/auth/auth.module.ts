import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { RegisterComponent } from './components/register/register.component';
import { authReducer } from './store/reducer';
import { AuthService } from './services/auth.service';
import { RegisterEffect } from './store/effects/register.effect';
import { LoginComponent } from './components/login/login.component';
import { LoginEffect } from './store/effects/login.effect';
import { GetUserEffect } from './store/effects/getUser.effect';
import { LocalStorageApiService } from '../shared/services/local-sotage-api/local-storage-api.service';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
]

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([RegisterEffect, LoginEffect, GetUserEffect])
  ],
  providers: [
    AuthService,
    LocalStorageApiService,
  ]
})
export class AuthModule { }
