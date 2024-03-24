import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectInfoCardComponent } from './subject-info-card.component';

describe('SubjectInfoCardComponent', () => {
  let component: SubjectInfoCardComponent;
  let fixture: ComponentFixture<SubjectInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubjectInfoCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubjectInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
