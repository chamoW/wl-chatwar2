import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";

/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationProvider {

    constructor(private angularFireAuth: AngularFireAuth) {

    }

    loginWithEmail(email: string, password: string) {
        return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
    }

     registerWithEmail(email: string, password: string) {
        return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
    }

    getStatus() {
        return this.angularFireAuth.authState;
    }

    logout() {
        return this.angularFireAuth.auth.signOut();
    }

}
