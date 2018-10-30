import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(private angularFireDataBase: AngularFireDatabase) {

  }

  getFriends() {
    return this.angularFireDataBase.list('users/');
  }

  getUsers() {
    return this.angularFireDataBase.list('users/');
  }

  getUserById(uid) {
    return this.angularFireDataBase.object('/users/' + uid);
  }


  createUser(user) {
    return this.angularFireDataBase.object('/users/' + user.uid).set(user);
  }

  editUser(user) {
    return this.angularFireDataBase.object('/users/' + user.uid).set(user);
  }
}
