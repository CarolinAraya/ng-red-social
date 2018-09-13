import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.css']
})
export class PostContainerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
