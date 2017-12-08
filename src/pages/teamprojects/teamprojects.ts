import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TeamprojectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teamprojects',
  templateUrl: 'teamprojects.html',
})
export class TeamprojectsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamprojectsPage');
  }
  slides = [ //title, description and image for slides
    {
      title: "Team Project",
      description: "Elit <b>Lorem ipsum </b> Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu.",
      image: "assets/imgs/purple-wing.png",
    },
    {
      title: "Team Project",
      description: "<b>Quisque</b> Nam molestie nec tortor. Donec placerat leo sit amet velit. Vestibulum id justo ut vitae massa. Proin in dolor mauris consequat aliquam. Donec ipsum, vestibulum ullamcorper venenatis augue.",
      image: "assets/imgs/purple-tree.png",
    },
    {
      title: "Team Project",
      description: "Vivamus placerat lacus vel vehicula scelerisque <b>placerat</b>Aliquam tempus nisi in auctor vulputate, erat felis pellentesque augue nec, pellentesque lectus justo nec erat.",
      image: "assets/imgs/purple-thing.png",
    }
  ];
}

