import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users$;

  constructor(private database: DatabaseService) {
    this.users$ = database.getUsers()
    console.log(this.users$)
   }

  ngOnInit() {
  }

}
