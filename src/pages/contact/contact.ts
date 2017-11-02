import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { FabContainer } from '../../../../../src';
import {  FabContainer } from 'ionic-angular';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }
  clickMainFAB() {
    console.log('Clicked open social menu');
  }
// close() an active FAB list container
   openSocial(network: string, fab: FabContainer) {
   console.log('Share in ' + network);
  fab.close();
  }
}


