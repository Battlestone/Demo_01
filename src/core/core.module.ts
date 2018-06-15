import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {SystemService} from "./system.service";

@NgModule({
  imports: [
    HttpClientModule,
  ],
  providers:[
    SystemService
  ],
  declarations: [
  ],
})
export class CoreModule {}
