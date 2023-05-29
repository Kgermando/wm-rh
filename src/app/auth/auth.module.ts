import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { AuthRoutingModule } from './auth-routing.module';
import { LockScreenComponent } from './lock-screen/lock-screen.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { LogoutComponent } from './logout/logout.component'; 


@NgModule({
  declarations: [
    LockScreenComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent, 
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,

    SharedModule, 

    
  ]
})
export class AuthModule { }
