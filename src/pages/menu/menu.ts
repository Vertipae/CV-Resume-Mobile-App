import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  rootPage = "TabsPage";
  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    { title: 'Targeted CV', pageName: 'TabsPage', tabComponent: 'HomePage', index: 0, icon: 'md-briefcase' },
    { title: 'Project Work', pageName: 'TabsPage', tabComponent: 'ProjectPage', index: 1, icon: 'ios-bulb-outline' },
    { title: 'Extra', pageName: 'TabsPage', tabComponent: 'ExtraPage', index: 2, icon: 'md-happy' },
    { title: 'Contact', pageName: 'TabsPage', tabComponent: 'ContactPage', index: 3, icon: 'md-call' },
    { title: 'About', pageName: 'TabsPage', tabComponent: 'AboutPage', index: 4, icon: 'md-woman' },
    { title: 'Soft skills', pageName: 'TabsPage', tabComponent: 'SoftskillsPage', index: 5, icon: 'md-construct' },
    { title: 'Technical skills', pageName: 'TabsPage', tabComponent: 'TechskillsPage', index: 6, icon: 'md-calculator' },
    { title: 'Team projects', pageName: 'TabsPage', tabComponent: 'TeamprojectsPage', index: 7, icon: 'md-contacts' },
  ];

  constructor(public fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }
// Opens given page
  openPage(page: PageInterface) {
    let params = {};

    if (page.index) {
      params = { tabIndex: page.index };
    }
    if (this.nav.getActiveChildNavs() && page.index != undefined) {
      this.nav.getActiveChildNavs()[0].select(page.index);
    } else {
      this.nav.setRoot(page.pageName, params);
    }
  }
  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNavs()[0];

    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  logout() {
    this.fire.auth.signOut().then(() => {
      this.nav.setRoot('SliderPage');
    });
  }

}
