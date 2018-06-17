import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SystemService} from "../../core/system.service";

/**
 * Generated class for the ChangeInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-change-info',
  templateUrl: 'change-info.html',
})
export class ChangeInfoPage {

  private name='';
  private oldPwd='';
  private newPwd='';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public systemService:SystemService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangeInfoPage');
    this.name=this.systemService.getUser().name;
  }


}
