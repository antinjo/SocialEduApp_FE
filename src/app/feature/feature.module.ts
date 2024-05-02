import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SharedModule } from '../shared/shared.module';

import { ForYouPageBlockComponent } from './components/homepage/for-you-page-block/for-you-page-block.component';
import { PostPageBlockComponent } from './components/homepage/post-page-block/post-page-block.component';
import { FriendListBLockComponent } from './components/homepage/friend-list-block/friend-list-block.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { ProfileComponent } from './components/user-page/profile/profile.component';
import { FaksPageComponent } from './components/faks-page/faks-page.component';
import { SkiTabsComponent } from './components/faks-page/ski-tabs/ski-tabs.component';
import { PdTabsComponent } from './components/faks-page/ski-tabs/pd-tabs/pd-tabs.component';
import { YearTabsComponent } from './components/faks-page/ski-tabs/pd-tabs/year-tabs/year-tabs.component';
import { SubjectPageComponent } from './components/subject-page/subject-page.component';
import { OpsiTabsComponent } from './components/subject-page/opsi-tabs/opsi-tabs.component';
import { SubjectInfoCardComponent } from './components/subject-page/opsi-tabs/subject-info-card/subject-info-card.component';
import { ProjectTabComponent } from './components/subject-page/opsi-tabs/project-tab/project-tab.component';


@NgModule({
  declarations: [
    HomepageComponent,
    UserPageComponent,
    ForYouPageBlockComponent,
    PostPageBlockComponent,
    FriendListBLockComponent,
    ProfileComponent,
    FaksPageComponent,
    SkiTabsComponent,
    PdTabsComponent,
    YearTabsComponent,
    SubjectPageComponent,
    OpsiTabsComponent,
    SubjectInfoCardComponent,
    ProjectTabComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    HomepageComponent,
    UserPageComponent,
    ForYouPageBlockComponent,
    PostPageBlockComponent,
    FriendListBLockComponent,
    ProfileComponent,
    FaksPageComponent,
    SkiTabsComponent,
    PdTabsComponent,
    YearTabsComponent,
    SubjectPageComponent,
    OpsiTabsComponent,
    SubjectInfoCardComponent,
    ProjectTabComponent,
  ]
})
export class FeatureModule {}