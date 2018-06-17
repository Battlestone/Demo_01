import {Injectable} from "@angular/core";
import {SystemService} from "./system.service";

@Injectable()
export class MenuService {

  menu: Array<any>;

  constructor(private systemService: SystemService) {
  }

  getMenu(){
    this.menu=[
      { title: '个人主页', component: 'HomePage' },
      { title: '个人信息', component: 'ChangeInfoPage' },
    ];
    return this.menu;
  }

}
