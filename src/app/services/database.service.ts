import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

    postList$: AngularFireList<any>;

    constructor(private database: AngularFireDatabase) { 
      this.postList$ = this.database.list('/posts');
    }
  getUsers() { 
    return this.database.list('users/').snapshotChanges().pipe(map( 

      snapshotUsers => {//lo que me retorna
        const result = [];

        for (let i = 0; i < snapshotUsers.length; i++) {
          const snapshotUser = snapshotUsers[i];
          const userValue = snapshotUser.payload.val(); // transformo el payload,
          userValue['key'] = snapshotUser.payload.key; // Le agrego la key(uid correspondiente) al objeto que creé, esta tipado {}
          //(<any>userValue).key = snapshotUser.payload.key;

          result.push(userValue);
        }
        return result;
      }));
  }
    addData(path, object) {
      this.database.list(path).push(object);
    }
    getData(){
       return this.postList$.snapshotChanges()
    }
    getIndividualData(path){
      return this.database.object(path).valueChanges();
    }
    deleteData(key){
      this.database.object(`posts/${key}`).remove();
    }
    updateData(path, object){
      this.database.object(path).update(object);
    }
  addFriendData(key, object) {
    this.database.list(`users/${key}/amigos`).push(object);
  }
}



