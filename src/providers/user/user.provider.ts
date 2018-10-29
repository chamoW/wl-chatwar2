import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, Status } from '../../app/interfaces/user';

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
      nick: "chamoW",
      uid: 100,
      status: Status.Online

    }

    let myUser2: User = {
      age: 35,
      email: "cdeina_18@hotmail.com",
      friend: false,
      nick: "Diana",
      uid: 1001,
      status: Status.Offline

    }


    let myUser3: User = {
      age: 24,
      email: "leometal@hotmail.com",
      friend: true,
      nick: "Leo López",
      uid: 1002,
      status: Status.Busy
    }

    let myUser4: User = {
      age: 54,
      email: "blopez@hotmail.com",
      friend: true,
      nick: "Wilson López",
      uid: 1003,
      status: Status.Away
    }

    let myUser5: User = {
      age: 51,
      email: "nsiguencia@hotmail.com",
      friend: true,
      nick: "Nanci Siguencia",
      uid: 1004,
      status: Status.AppearOffline
    }

    this.friends = [myUser1, myUser2, myUser3, myUser4, myUser5];



  }

  getFriends() {
    return this.friends;
  }

}
