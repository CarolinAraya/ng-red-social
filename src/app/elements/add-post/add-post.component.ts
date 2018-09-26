import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AngularFireStorage } from '@angular/fire/storage';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent{
  postForm: FormGroup;
  image: any;
  currentUploadProgress:number = -1;
  constructor(private authService: AuthService, private database: DatabaseService, private formBuilder: FormBuilder, private storage: AngularFireStorage) {
    this.createPostForm();
  }

  createPostForm() {
    this.postForm = this.formBuilder.group({
      content: ['', Validators.required],
      imageInput: []
    });
  }
  uploadFile(event) {
    let task = this.storage.upload(event.target.files[0].name, event.target.files[0]);
    task.percentageChanges().subscribe((value)=>{
      this.currentUploadProgress = value;
    })
    this.storage.ref(event.target.files[0].name).getDownloadURL().subscribe((downloadURLValue)=>{
      this.image = downloadURLValue;
    })
  }

  addPost() {
    console.log('holsssd')
    let time = new Date().toLocaleString()
    if (this.currentUploadProgress < 0){
      const newPost = {
        contenido: this.postForm.value.content,
        user: this.authService.user.email,
        userUid: this.authService.user.uid,
        likes: 0,
        time
      };
      this.database.addData('posts', newPost);
    }
    if (this.currentUploadProgress == 100) {
      const newPost = {
        contenido: this.postForm.value.content,
        user: this.authService.user.email,
        userUid: this.authService.user.uid,
        likes: 0,
        time,
        image : this.image
      };
      this.database.addData('posts', newPost);
    }
    
    this.postForm.reset();
  }
}
