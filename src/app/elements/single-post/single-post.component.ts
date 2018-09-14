import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../../database.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


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

  constructor(private formBuilder: FormBuilder, private DatabaseService: DatabaseService) {
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
  }

  deletePost(key){
    this.DatabaseService.deleteData(key)
  }
  addLike(key, likes){
    likes++
    this.DatabaseService.updateData(key, { likes: likes++ })
  }
  enableEdit() {
    this.enableEditPost = false;
  }
  editPost(key){
    this.DatabaseService.updateData(key, { contenido: this.editContent.value.content})
  }
}
