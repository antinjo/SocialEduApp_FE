import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { FeatureState } from '../../../feature/store/feature.store';
import { Observable } from 'rxjs';
import { NotificationModel } from '../../../feature/models/notification.model';
import { UserModel } from '../../../feature/models/user.model';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent implements OnInit{

  notifications:NotificationModel[];
  user:UserModel;

  @Select(FeatureState.getNotifications) notifications$:Observable<NotificationModel[]>
  @Select(FeatureState.getUserInfo) user$:Observable<UserModel>

  ngOnInit(): void {
      this.user$.subscribe((res)=>{
        this.user = res
        this.notifications = res.notifications
      }) 
  }
}
