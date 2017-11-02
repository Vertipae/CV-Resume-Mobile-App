import { Component, ViewChild } from '@angular/core'; // add Viewchild
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {
  // add these
  @ViewChild('username') username;
  @ViewChild('password') password;

  constructor
  (public navCtrl: NavController,
   public navParams: NavParams) {
  }

  login() {
    this.navCtrl.push('LoginPage');
  }

  register() {
    this.navCtrl.push('RegisterPage');
  }

}