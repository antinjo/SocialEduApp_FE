import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForYouPageBlockComponent } from './for-you-page-block.component';

describe('ForYouPageBlockComponent', () => {
  let component: ForYouPageBlockComponent;
  let fixture: ComponentFixture<ForYouPageBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForYouPageBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForYouPageBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
