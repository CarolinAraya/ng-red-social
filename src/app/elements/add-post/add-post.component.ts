import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../database.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent{
  postForm: FormGroup;
  constructor(private authService: AuthService, private database: DatabaseService, private formBuilder: FormBuilder) { 
    this.createPostForm(); 
  }
  createPostForm() {
    this.postForm = this.formBuilder.group({
      content: ['', Validators.required],
    });
  }
  addPost() {
    let time = new Date().toLocaleString()
    const newPost = { 
      contenido: this.postForm.value.content,
      user: this.authService.user.email,
      likes: 0,
      time
    };
    this.database.addData('posts', newPost);  
    this.postForm.reset();
  }
}
