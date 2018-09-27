import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

    postList$: AngularFireList<any>;


    constructor(private database: AngularFireDatabase) { // aquí se engancha la base de datos

      this.postList$ = this.database.list('/posts');
    }

    /* getUsers() {
     return this.database.list('/users').valueChanges(); //No me da la llave de los usuarios de mi lista
    }
 */
    getUsers(path) {
      return this.database.list(path).snapshotChanges().pipe(map(
        snapshotUsers => {//lo que me retorna
          const result = [];

          for (let i = 0; i < snapshotUsers.length; i++) {
            const snapshotUser = snapshotUsers[i];
            const userValue = snapshotUser.payload.val();
            userValue['key'] = snapshotUser.payload.key;
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
    deleteData(key){
      this.database.object(`posts/${key}`).remove();
    }
    updateData(key, object){
      this.database.object(`posts/${key}`).update(object);
    }

    addFriendData(key, object){
      this.database.list(`users/${key}/amigos`).push(object);
    }

}


