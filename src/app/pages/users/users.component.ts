import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$;// Para el ngFor

  constructor(private database: DatabaseService, private authService: AuthService) {
    this.users$ = database.getUsers(); //Llamo a la función que está en database.service
  }

  ngOnInit() {
  }

  addFriend(user) { //parámetro que viene del ngFor
    this.database.addFriendData(this.authService.user.uid, { // addFriendData(mi firebase-Key, objeto amigo q agregaré)
      email: user.email,
      uid: user.key
    });
  }
}
