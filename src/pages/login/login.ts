import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular'; // AlertController
// import this
import { AngularFireAuth } from 'angularfire2/auth';

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
  // these are for ngModel in login.html (holds username and password)
  username: string;
  password: string;

  constructor( 
    private fire: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  } // take you to Register Page
  openRegisterPage() {
    this.navCtrl.push('RegisterPage');
  }

  // When user clicks signIn() this method will bring you to page after login
  signIn() {
    this.fire.auth.signInWithEmailAndPassword(this.username, this.password)
      .then(data => {
        this.successAlert(this.fire.auth.currentUser.email);
        this.navCtrl.setRoot('MenuPage'); // Page after login

      })
      .catch(error => {
        this.failAlert(error);
      });

  } // This method will give success alert when login is succesful
  successAlert(msg) {
    let alert = this.alertCtrl.create({
      title: 'Welcome',
      subTitle: 'You are logged in as ' + msg,
      buttons: ['OK']
    });
    alert.present();
  } // This will give fail alert when login isn't succesful
  failAlert(msg) {
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }
}
