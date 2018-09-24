<<<<<<< 4342614c6da3055bc2f236b027267dd40f0819df
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
    ]),
  });
  snackBar: any;

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    if (!null) {
      this.router.navigate(['home/posts'], { relativeTo: this.route.parent });//poner ruta?

    }
  }

  login() {
    var data = this.loginForm.value;

    this.authService.login(data.email, data.password)
      .then(() => {
        this.router.navigate(['home/posts'], { relativeTo: this.route.parent });
      })
      .catch(error => {
        alert(error.message);
      });
  }

  gotoSingup() {
    this.router.navigate(['signup'], { relativeTo: this.route.parent });
  }

  facebookLogin() {
    this.authService.facebookLogin()
      .then(() => {
        this.router.navigate(['home/posts'], { relativeTo: this.route.parent });

      })
      .catch(error => {
        alert(error.message);
      });
  }

  googleLogin() {

    this.authService.googleLogin()
      .then(() => {
        this.router.navigate(['home/posts'], { relativeTo: this.route.parent });
      })
      .catch(error => {
        alert(error.message);
      });

  }

}
=======
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
    ]),
  });
  snackBar: any;

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    if(!null){
      this.router.navigate(['home/posts'], { relativeTo: this.route.parent });//poner ruta?

       }
   }

  login() {
    var data = this.loginForm.value;

    this.authService.login(data.email, data.password)
      .then(() => {
        this.router.navigate(['home/posts'], { relativeTo: this.route.parent });//poner ruta?
      })
      .catch(error => {
        //Algo salió mal, avisemos mejor para que reintente
        /* this.snackBar.open('Error al tratar de iniciar sesión, trata otra vez'
          , null          , {
            duration: 3000
          }); */

      });
  }

  gotoSingup() {
    this.router.navigate(['signup'], { relativeTo: this.route.parent });
  }

}
>>>>>>> cambios de caro -sidenav
