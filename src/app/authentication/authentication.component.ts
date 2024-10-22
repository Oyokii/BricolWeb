import { Component, inject, OnDestroy, signal } from '@angular/core';
import { FormBuilder, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from './models/User';
import { AuthenticationService, Credentials } from './services/authentication.service';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent implements OnDestroy{

  email = signal<string>('');
  password = signal<string>('');

  private authService = inject(AuthenticationService);
  private router = inject(Router);
  private loginSubscription : Subscription | null = null;

  invalidCredential : Boolean = false;

  private formBuilder = inject(FormBuilder);

  authFormGroup = this.formBuilder.group(
    {
      'email': ['', [Validators.required]],
      'password': ['', [Validators.required]]
    }
  );

  LogIn(){
    this.loginSubscription = this.authService.SignIn(this.authFormGroup.value as Credentials).subscribe
    ({next : (result : User | null | undefined) => {
      this.HomeRoute();
    },
    error : error => {this.invalidCredential = true;}
    })
  }

  HomeRoute(){
    this.router.navigate(['home']);
  }

  ngOnDestroy(): void {
    this.loginSubscription?.unsubscribe();
  }
}
