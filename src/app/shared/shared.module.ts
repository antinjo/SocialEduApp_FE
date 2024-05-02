import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule} from 'primeng/button';
import { SplitButtonModule} from 'primeng/splitbutton';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { KeyFilterModule } from 'primeng/keyfilter';
import { PostComponent } from './components/post/post.component';
import { TabCardComponent } from './components/tab-card/tab-card.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { AccordionModule } from 'primeng/accordion';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListboxModule } from 'primeng/listbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { MenuModule } from 'primeng/menu';
import { FieldsetModule } from 'primeng/fieldset';
import { TabViewModule } from 'primeng/tabview';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { InfoComponent } from './components/info-card/info/info.component';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { PaginatorModule } from 'primeng/paginator';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FileUploadModule } from 'primeng/fileupload';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { SavedFolderComponent } from './components/tab-card/saved-folder/saved-folder.component';
import { ProjectFolderComponent } from './components/tab-card/project-folder/project-folder.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DialogModule } from 'primeng/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { StreamAutocompleteTextareaModule, StreamChatModule } from 'stream-chat-angular';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
@NgModule({
  declarations: [
    PostComponent,
    TabCardComponent,
    InfoCardComponent,
    InfoComponent,
    NotificationsComponent,
    SavedFolderComponent,
    ProjectFolderComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    SplitButtonModule,
    ToolbarModule,
    AvatarModule,
    AvatarGroupModule,
    KeyFilterModule,
    AccordionModule,
    BrowserModule,
    BrowserAnimationsModule,
    ListboxModule,
    FormsModule,
    PanelModule,
    MenuModule,
    FieldsetModule,
    TabViewModule,
    DataViewModule,
    TagModule,
    CardModule,
    DividerModule,
    PaginatorModule,
    RadioButtonModule,
    FileUploadModule,
    MessagesModule,
    ToastModule,
    InputTextareaModule,
    DialogModule,
    ReactiveFormsModule,
    TranslateModule, 
    StreamAutocompleteTextareaModule, 
    StreamChatModule,
    ProgressSpinnerModule,
    DynamicDialogModule,
  ],
  exports:[
    PostComponent,
    TabCardComponent,
    ButtonModule,
    SplitButtonModule,
    ToolbarModule,
    AvatarModule,
    AvatarGroupModule,
    KeyFilterModule,
    InfoCardComponent,
    AccordionModule,
    BrowserModule,
    BrowserAnimationsModule,
    ListboxModule,
    FormsModule,
    PanelModule,
    MenuModule,
    FieldsetModule,
    TabViewModule,
    DataViewModule,
    TagModule,
    CardModule,
    DividerModule,
    PaginatorModule,
    RadioButtonModule,
    FileUploadModule,
    MessagesModule,
    ToastModule,
    NotificationsComponent,
    SavedFolderComponent,
    ProjectFolderComponent,
    InputTextareaModule,
    InfoComponent,
    DialogModule,
    ReactiveFormsModule,
    TranslateModule, 
    StreamAutocompleteTextareaModule, 
    StreamChatModule,
    ProgressSpinnerModule,
    DynamicDialogModule,
  ]
})
export class SharedModule { }
