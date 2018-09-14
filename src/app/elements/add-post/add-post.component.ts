import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../database.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent{
  postForm: FormGroup;
  constructor(private database: DatabaseService, private formBuilder: FormBuilder) { 
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
      user: 'nombre',
      likes: 0,
      time
    };
    this.database.addData(newPost);//esto agrega un nuevo meme   
  }
}
