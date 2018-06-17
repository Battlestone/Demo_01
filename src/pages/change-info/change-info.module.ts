import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangeInfoPage } from './change-info';

@NgModule({
  declarations: [
    ChangeInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(ChangeInfoPage),
  ],
})
export class ChangeInfoPageModule {}
