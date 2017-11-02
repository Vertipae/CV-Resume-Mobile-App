//import { Component, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  //@ViewChild('username') username;
  //@ViewChild('password') password;

  username: string;
  password: string;

  constructor(
    private fire: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  // methods and alerts for register
//creating account when user clicks createAccount()
  createAccount() {
    this.fire.auth.createUserWithEmailAndPassword(this.username, this.password)
      .then(data => {
        this.successAlert(this.fire.auth.currentUser.email);
      })
      .catch(error => {
        this.failAlert(error);

      });
    console.log("created account:" + this.username + " " + this.password)
  } // if register is succesfull this method will give success alert
  successAlert(msg) {
    let alert = this.alertCtrl.create({
      title: 'Welcome',
      subTitle: 'Created account: ' + msg,
      buttons: ['OK']
    });
    alert.present();
  } // if not, this happens and gives alert of failed register
  failAlert(msg) {
    let alert = this.alertCtrl.create({
      title: 'FAIL',
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }
}



