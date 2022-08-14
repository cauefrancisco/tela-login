import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      login: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  public navigate(page: string): void {
    this._router.navigateByUrl(page);
  }

}
