import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';


/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(private angularFireDataBase: AngularFireDatabase,
    private angularFireStorage: AngularFireStorage) {

  }

  getFriends() {
    return this.angularFireDataBase.list('users/');
  }

  getUsers() {
    return this.angularFireDataBase.list('users/');
  }

  getUserById(uid) {
    return this.angularFireDataBase.object('users/' + uid);
  }


  createUser(user) {
    return this.angularFireDataBase.object('/users/' + user.uid).set(user);
  }

  editUser(user) {
    return this.angularFireDataBase.object('/users/' + user.uid).set(user);
  }


  /**
   * Sube imagen en base64
   * @param name image name
   * @param image image
   */
  uploadPicture(name, image) {
    return this.angularFireStorage.ref('pictures/' + name).putString(image, 'data_url');
  }

  /**
   * Obtiene la url de la imagen
   * @param name 
   */
  getDownloadURL(name) {
    return this.angularFireStorage.ref('pictures/' + name).getDownloadURL();
  }
}
