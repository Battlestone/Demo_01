import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';
import {SystemService} from "../../core/system.service";

import swal from 'sweetalert2';


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

  private name='';
  private password='';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private menu: MenuController,
              private systemService:SystemService
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  ionViewDidEnter() {
    //to disable menu
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // to enable menu
    this.menu.enable(true);
  }

  register(){
    this.systemService.register(this.name,this.password).subscribe(res=>{
      if(res.code!=0){
        swal('警告', res.errorReason, 'warning');
        return;
      }else{
        swal('成功', '注册成功，请去登陆', 'success');
        this.navCtrl.pop();
        return;
      }
    });
  }

}
