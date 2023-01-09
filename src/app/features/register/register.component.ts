import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  form: FormGroup;
  formError: any = {};

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _authService: AuthService,
  ) {
    this.form = this._formBuilder.group({
      name: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      email: [null, [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  public get F_name(): AbstractControl { return this.form.get('name') as AbstractControl; }
  public get F_dateOfBirth(): AbstractControl { return this.form.get('dateOfBirth') as AbstractControl; }
  public get F_email(): AbstractControl { return this.form.get('email') as AbstractControl; }
  public get F_password(): AbstractControl { return this.form.get('password') as AbstractControl; }

  ngOnInit(): void {
  }

  public navigate(page: string): void {
    this._router.navigateByUrl(page);
  }

  public onSubmit() {
    this.register();
    this.navigate('/auth');
  }

  public register() {
    if (this.F_email.value == '') {
      alert('Please enter your e-mail!');
    }
    if (this.F_password.value == '') {
      alert('Please enter your e-mail!');
    }

    this._authService.register(this.F_email.value, this.F_password.value);
  }

}
