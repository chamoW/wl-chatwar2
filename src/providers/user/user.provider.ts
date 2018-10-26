import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../app/interfaces/user';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  friends: User[];

  constructor() {

    
    let myUser1: User = {
      age: 32,
      email: "wladdylopez@hotmail.com",
      friend: true,
      nick : "chamoW",
      uid: 100

    }

    let myUser2: User = {
      age: 35,
      email: "cdeina_18@hotmail.com",
      friend: false,
      nick : "Diana",
      uid: 1001

    }

    this.friends = [myUser1, myUser2];    

    

  }

  getFriends(){
    return this.friends;
  }

}
