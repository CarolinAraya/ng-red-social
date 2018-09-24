<<<<<<< 4342614c6da3055bc2f236b027267dd40f0819df
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { DatabaseService } from '../../services/database.service';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private authService: AuthService, private database: DatabaseService) { }

  ngOnInit() {
  }

}
=======
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { DatabaseService } from '../../services/database.service';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private authService: AuthService, private database: DatabaseService) { }

  ngOnInit() {
  }

}
>>>>>>> cambios de caro -sidenav
