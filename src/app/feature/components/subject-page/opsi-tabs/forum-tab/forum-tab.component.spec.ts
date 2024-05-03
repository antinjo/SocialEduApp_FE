import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumTabComponent } from './forum-tab.component';

describe('ForumTabComponent', () => {
  let component: ForumTabComponent;
  let fixture: ComponentFixture<ForumTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForumTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForumTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
