import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  ) {
    this.form = this._formBuilder.group({
      name: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      login: [null, [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  public navigate(page: string): void {
    this._router.navigateByUrl(page);
  }

}
