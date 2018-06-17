import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';
import {SystemService} from "../../core/system.service";

import swal from 'sweetalert2';
import {MenuService} from "../../core/menu.service";


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
  private name:any;
  private password:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private menu: MenuController,
              private systemService:SystemService,
              private menuService:MenuService

  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  ionViewDidEnter() {
    //to disable menu
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // to enable menu
    this.menu.enable(true);
  }

  login(){
    //this.navCtrl.setRoot(this.menuService.getMenu()[0].component);
    this.systemService.login(this.name,this.password).subscribe(
      res=>{
        if(res.code==0){
          this.systemService.setUser=(res.returnValue.user);
          swal('成功', '登陆成功', 'success');
          this.navCtrl.setRoot(this.menuService.getMenu()[0].component);
          return;
        }else{
          swal('警告', res.errorReason, 'warning');
          return;
        }
      }
    );


  }

  register(){
    this.navCtrl.push("RegisterPage");
  }
}
