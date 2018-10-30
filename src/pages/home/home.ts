import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConversationPage } from '../conversation/conversation';
import { LoginPage } from '../login/login';
import { AboutPage } from '../about/about';
import { User, Status } from '../../app/interfaces/user';
import { UserProvider } from '../../providers/user/user.provider';
import { AuthenticationProvider } from '../../providers/authentication/authentication';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: User;
  friends: User[];
  query: string = '';

  constructor(public navCtrl: NavController,
    private userProvider: UserProvider,
    private authenticationService: AuthenticationProvider, ) {
    console.log("ahora llamado: ", this.userProvider.getFriends());

    this.userProvider.getFriends().valueChanges().subscribe((data: User[]) => {
      this.friends = data;
      console.log("data: ", data);
    }, (error) => {
      alert('Ocurrió un error ' + error);
      console.log(error);
    });

    this.authenticationService.getStatus().subscribe((result) => {
      console.log("estados: ", result);
      this.userProvider.getUserById(result.uid).valueChanges().subscribe((user: User) => {
        this.user = user;
        //this.user.friends = Object.keys(this.user.friends).map(key => this.user.friends[key]);
      });
    });

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
