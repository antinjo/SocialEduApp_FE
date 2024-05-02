import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    AlertComponent
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
    LoginComponent,
    AlertComponent
  ]
})
export class CoreModule { }
