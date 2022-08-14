import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  ) {
    this.form = this._formBuilder.group({
      login: [null, [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  public get F_login(): AbstractControl { return this.form.get('login') as AbstractControl; }
  public get F_password(): AbstractControl { return this.form.get('password') as AbstractControl; }

  ngOnInit(): void {

  }


  public navigate(page: string): void {
    this._router.navigateByUrl(page);
  }

  public checkLoginError(): void {
    if (this.F_login.touched) {
      if (this.F_login?.errors) {
        this.formError['login'] = 'login é obrigatório!'
      }
    }

    this.formError['login'] = null;
  }


}
