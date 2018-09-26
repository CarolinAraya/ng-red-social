import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  user: any
  constructor( private authService: AuthService, private DatabaseService: DatabaseService) { 
  }
  
  ngOnInit() {
    this.user = this.DatabaseService.getIndividualData('users/' + this.authService.user.uid)
  }
  rolEdit(){
    let newRol = prompt('Ingrese un nuevo rol')
    this.DatabaseService.updateData('users/' + this.authService.user.uid ,{ rol : newRol })
  }
}
