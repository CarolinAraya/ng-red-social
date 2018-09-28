import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../../services/database.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit{
  @Input() post;
  @Input() postId;

  enableEditPost = true;
  editContent: FormGroup;
  user: any

  constructor(private formBuilder: FormBuilder, private DatabaseService: DatabaseService, public AuthService: AuthService) {
    this.createEditContentForm();
   }
  createEditContentForm() {
    this.editContent = this.formBuilder.group({
      content: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.editContent.patchValue({
      content: this.post.contenido
    });
    this.user = this.DatabaseService.getIndividualData('users/' + this.post.userUid)
  }

  deletePost(key){
    if(confirm('Estas seguro?')){
      this.DatabaseService.deleteData(key)
    }
  }
  addLike(key, likes){
    likes++
    this.DatabaseService.updateData('posts/' + key, { likes: likes })
  }
  enableEdit() {
    this.enableEditPost = false;
  }
  editPost(key){
    this.DatabaseService.updateData('posts/' + key, { contenido: this.editContent.value.content})
  }
}
