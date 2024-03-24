import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendListBLockComponent } from './friend-list-block.component';

describe('FriendListBLockComponent', () => {
  let component: FriendListBLockComponent;
  let fixture: ComponentFixture<FriendListBLockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FriendListBLockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FriendListBLockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
