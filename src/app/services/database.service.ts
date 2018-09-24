import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

    postList$: AngularFireList<any>;

    constructor(private database: AngularFireDatabase) { // aquí se engancha la base de datos
      this.postList$ = this.database.list('/posts');
    }
    addData(path, object) {
      this.database.list(path).push(object);
    }
    getData(){
       return this.postList$.snapshotChanges()
    }
    deleteData(key){
      this.database.object(`posts/${key}`).remove();
    }
    updateData(key, object){
      this.database.object(`posts/${key}`).update(object);
    }
}