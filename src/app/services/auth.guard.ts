import { Injectable } from "@angular/core";
import { Observable, from } from "rxjs";
import { tap, map, take } from "rxjs/operators";
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/auth";


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(public firebaseAuth: AngularFireAuth, private router: Router) { }

  canActivate(): Observable<boolean> {
    return from(this.firebaseAuth.authState)
      .pipe(take(1))
      .pipe(map(state => !!state))
      .pipe(tap(authenticated => {
        if (!authenticated) this.router.navigate(['/login']);
      }));
  }
}
