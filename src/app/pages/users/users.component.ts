import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$;

  constructor(private database: DatabaseService, private authService: AuthService) {
    this.users$ = database.getUsers(`/users`);
    console.log('usuarios ' + JSON.stringify(this.users$))
  }

  ngOnInit() {
  }

  addFriend(user) {
    this.database.addFriendData(this.authService.user.uid, { // addFriendData(mi firebase-Key, objeto amigo q agregaré)
      name: user.displayName,
      email: user.email,
      uid: user.key
    });
  }
}
