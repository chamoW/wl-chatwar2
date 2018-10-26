import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConversationPage } from '../conversation/conversation';
import { LoginPage } from '../login/login';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToConversation() {
    this.navCtrl.push(ConversationPage);

  }

  goToLogin() {
    this.navCtrl.push(LoginPage);

  }

  goToAbout(){
    this.navCtrl.push(AboutPage);
  }

}
