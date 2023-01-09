import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  form: FormGroup;
  formError: any = {};

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private auth: Auth,
    private _authService: AuthService,

  ) {
    this.form = this._formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  public get F_email(): AbstractControl { return this.form.get('email') as AbstractControl; }
  public get F_password(): AbstractControl { return this.form.get('password') as AbstractControl; }

  ngOnInit(): void {

  }


  public navigate(page: string): void {
    this._router.navigateByUrl(page);
  }

  public onSubmit(): void {
    this.login();
  }

  public login() {
    if (this.F_email.value == '') {
      alert('Please enter your e-mail!');
    }
    if (this.F_password.value == '') {
      alert('Please enter your e-mail!');
    }

    this._authService.login(this.F_email.value, this.F_password.value);
  }

  public checkLoginError(): void {
    if (this.F_email.touched) {
      if (this.F_email?.errors) {
        this.formError['login'] = 'login é obrigatório!'
      }
    }

    this.formError['login'] = null;
  }


}
