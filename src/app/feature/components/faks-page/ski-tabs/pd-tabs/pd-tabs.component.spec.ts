import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdTabsComponent } from './pd-tabs.component';

describe('PdTabsComponent', () => {
  let component: PdTabsComponent;
  let fixture: ComponentFixture<PdTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PdTabsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PdTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
