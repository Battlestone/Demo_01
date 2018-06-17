import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SystemService} from "../../core/system.service";
import {MenuService} from "../../core/menu.service";

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private systemService:SystemService,
              private menuService:MenuService
  ) {
    let app = this.systemService.getAppComponentInstance();
    app.pages = this.menuService.getMenu();
    app.user = this.systemService.getUser();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
