<<<<<<< 4342614c6da3055bc2f236b027267dd40f0819df
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.css']
})
export class PostContainerComponent {
  posts$;
  constructor(private router: Router, private database: DatabaseService) {
    this.posts$ = database.getData()  }
}
=======
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.css']
})
export class PostContainerComponent {
  posts$;
  constructor(private router: Router, private database: DatabaseService) {
    this.posts$ = database.getData()  }
}
>>>>>>> cambios de caro -sidenav
