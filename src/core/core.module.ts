import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {SystemService} from "./system.service";
import {MenuService} from "./menu.service";

@NgModule({
  imports: [
    HttpClientModule,
  ],
  providers:[
    SystemService,
    MenuService
  ],
  declarations: [
  ],
})
export class CoreModule {}
