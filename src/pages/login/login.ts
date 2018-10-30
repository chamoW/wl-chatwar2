import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { Status, User } from '../../app/interfaces/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserProvider } from '../../providers/user/user.provider';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  password: string;
  password2: string;
  email: string;
  status: Status;
  nick: string;
  operation: string = 'login';

  formularioLogin: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private authenticationService: AuthenticationProvider,
    private userProvider: UserProvider,
    private formBuilder: FormBuilder) {

    this.formularioLogin = this.formBuilder.group({
      nick: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required],
      status: ['', Validators.required],

    });

    console.log("formularioLogin: ", this.formularioLogin);
  }

  ionViewDidLoad() {
  }

  goBack() {
    this.navCtrl.pop();
  }

  loginWithEmail() {
    this.authenticationService.loginWithEmail(this.formularioLogin.get('email').value, this.formularioLogin.get('password').value)
      .then((data) => {
        console.log("logueado: ", data);

        this.navCtrl.setRoot(HomePage);

      }).catch((error) => {
        console.log("error: ", error);

      })
  }


  registerWithEmail() {

    this.authenticationService.registerWithEmail(this.formularioLogin.get('email').value, this.formularioLogin.get('password').value)
      .then((data) => {
        console.log("registrado: ", data);

        const user: User = {
          email: this.formularioLogin.get('email').value,
          nick: this.formularioLogin.get('nick').value,
          status: this.formularioLogin.get('status').value,
          uid: data.user.uid
        }
        this.userProvider.createUser(user)
          .then((data) => {
            this.operation = 'login';
            console.log("Usuario creado");
          })
          .catch((error) => {
            alert("Ocurrió un error");
            console.log(error);
          });

      }).catch((error) => {
        alert("Ocurrió un error en el registro");
        console.log("error: ", error);

      })
  }


}
