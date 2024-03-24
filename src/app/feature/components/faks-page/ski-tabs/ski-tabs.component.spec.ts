import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiTabsComponent } from './ski-tabs.component';

describe('SkiTabsComponent', () => {
  let component: SkiTabsComponent;
  let fixture: ComponentFixture<SkiTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkiTabsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkiTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
