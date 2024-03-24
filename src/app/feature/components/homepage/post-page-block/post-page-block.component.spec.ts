import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPageBlockComponent } from './post-page-block.component';

describe('PostPageBlockComponent', () => {
  let component: PostPageBlockComponent;
  let fixture: ComponentFixture<PostPageBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostPageBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostPageBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
