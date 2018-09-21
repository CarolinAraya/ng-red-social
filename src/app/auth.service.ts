import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
//import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   user: any = null;
   constructor(private firebaseAuth:AngularFireAuth) {
    // this.user = firebaseAuth.authState;
     this.firebaseAuth.authState.subscribe((auth) => {
       this.user = auth;
     });
  }

  signup(email: string, password: string) {
    return this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string) {
    return this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.firebaseAuth.auth.signOut()
  }
}
