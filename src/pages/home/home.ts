import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConversationPage } from '../conversation/conversation';
import { LoginPage } from '../login/login';
import { AboutPage } from '../about/about';
import { User, Status } from '../../app/interfaces/user';
import { UserProvider } from '../../providers/user/user.provider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  friends: User[];
  query: string = '';

  constructor(public navCtrl: NavController, private userProvider: UserProvider) {
    this.friends = this.userProvider.getFriends();


  }



  goToConversation(user: User) {
    console.log("user: ", user);
    this.navCtrl.push(ConversationPage, { 'user': user });

  }

  goToLogin() {
    this.navCtrl.push(LoginPage);

  }

  goToAbout() {
    this.navCtrl.push(AboutPage);
  }

  getContactStatusClass(user) {
    if (user.status == Status.Offline || user.status == Status.AppearOffline) {
      return 'contact-offline';
    }
    return '';
  }

  getContactStatusStytle(user) {
    if (user.status == Status.Offline || user.status == Status.AppearOffline) {
      return "red";
    }
    return 'blue';
  }

  getIconByStatus(status) {
    let icon = '';

    switch (status) {
      case Status.Online:
        icon = 'logo_live_online.png';
        break;
        case Status.Offline:
        icon = 'logo_live_offline.png';
        break;
        case Status.Busy:
        icon = 'logo_live_busy.png';
        break;
        case Status.Away:
        icon = 'logo_live_away.png';
        break;
        case Status.AppearOffline:
        icon = 'logo_live_appear_offline.png';
        break;


      default:
        break;
    }

    return icon;
  }

}
