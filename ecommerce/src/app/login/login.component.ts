import { Component } from '@angular/core';
// Add libraries firebase for Authentication
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private afAuth: AngularFireAuth) {
    
  }

  login() {
    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

}
