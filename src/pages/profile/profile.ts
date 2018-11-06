import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../app/interfaces/user';
import { UserProvider } from '../../providers/user/user.provider';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  user: User;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private userProvider: UserProvider,
    private authenticationService: AuthenticationProvider,
    private camera: Camera,
    private toastController: ToastController) {

    this.authenticationService.getStatus().subscribe((data) => {
      console.log("estado de session: ", data);
      if (data != null) {
        this.userProvider.getUserById(data.uid).valueChanges().subscribe((user: User) => {
          this.user = user;
          console.log("Usuario: ", user);
        });
      }
    }, (error) => {
      console.log("Error: ", error);

    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  updateUser() {
    this.userProvider.editUser(this.user)
      .then((data) => {
        alert("Información actualizada");

      })
      .catch((error) => {
        console.log("error: ", error);
      });

  }

  async takePicture(source) {
    try {

      let cameraOptions: CameraOptions = {
        quality: 50,
        targetWidth: 800,
        targetHeight: 800,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation: true,
        allowEdit: true,

      };

      cameraOptions.sourceType = source === 'camera' ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.PHOTOLIBRARY;

      const result = await this.camera.getPicture(cameraOptions);
      const image = 'data:image/jpeg;base64,' + result;
      const pictureId = Date.now();

      this.userProvider.uploadPicture(pictureId + ".jpg", image)
        .then((data) => {

          this.userProvider.getDownloadURL(pictureId + ".jpg")
            .subscribe((url) => {
              this.user.avathar = url;
              let toast = this.toastController.create({
                message: 'Foto subida',
                duration: 3000,
                position: 'top'
              });

              toast.present();

              alert("Photo guardada");

            }, (error) => {
              console.log("ERROR: ", error);
            });

        })
        .catch((error) => {
          console.log("error: ", error);
        });

      console.log("pictureId: ", pictureId);
      console.log("image: ", image);





    } catch (error) {
      console.log("ERROR: ", error);
    }
  }

}
