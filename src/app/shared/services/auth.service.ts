import { Injectable } from "@angular/core";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _fireAuth: AngularFireAuth,
    private _router: Router,
  ) {
  }


  //login method

  public login(email: string, password: string) {
    this._fireAuth.signInWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('token', 'true');
    }, err => {
      alert(err.message);
      this._router.navigate(['/auth']);
    })
  }


  //register
  public register(email: string, password: string) {
    this._fireAuth.createUserWithEmailAndPassword(email, password).then(() => {
      alert('Registration Succesfull!');
      this._router.navigate(['/auth']);
    }, err => {
      alert(err.message);
    });
  }


  //signout

  public logout() {
    this._fireAuth.signOut().then(() => {
      localStorage.removeItem('token');
      this._router.navigate(['/auth']);
    }, err => {
      alert(err.message);
    })
  }
}
