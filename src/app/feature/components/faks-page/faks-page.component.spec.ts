import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaksPageComponent } from './faks-page.component';

describe('FaksPageComponent', () => {
  let component: FaksPageComponent;
  let fixture: ComponentFixture<FaksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FaksPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
