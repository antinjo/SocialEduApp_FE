import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ToolbarModule,
    AvatarModule,
    AvatarGroupModule
  ],
  exports:[
    HeaderComponent,
    LoginComponent
  ]
})
export class CoreModule { }
