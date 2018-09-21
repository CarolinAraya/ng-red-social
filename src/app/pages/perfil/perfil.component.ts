import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { DatabaseService } from '../../database.service';
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
