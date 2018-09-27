import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friends$;

  constructor(private database: DatabaseService, private authService: AuthService) {

    this.friends$ = database.getUsers(`/users/${this.authService.user.uid}/amigos`);
  }
  ngOnInit() {
  }



}
