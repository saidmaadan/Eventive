import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToProfile(){
    this.navCtrl.push('profile');
  }

  createEvent(){
    this.navCtrl.push('event-create');
    
  }

  eventList(){ this.navCtrl.push('event-list'); }

}
