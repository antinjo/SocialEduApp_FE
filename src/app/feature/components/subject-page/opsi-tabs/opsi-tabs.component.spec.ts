import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpsiTabsComponent } from './opsi-tabs.component';

describe('OpsiTabsComponent', () => {
  let component: OpsiTabsComponent;
  let fixture: ComponentFixture<OpsiTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpsiTabsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpsiTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
