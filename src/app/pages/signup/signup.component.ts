import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
    ]),
    confirm: new FormControl('', [
      Validators.required,
    ]),
  });

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) { }

  ngOnInit() { }

  signup() {
    var data = this.signupForm.value;

    this.authService.signup(data.email, data.password)
      .then(userCredential => {

      })
      .catch(error => {

      });
  }

  gotoLogin() {
    this.router.navigate(['login'], { relativeTo: this.route.parent });
  }

}
