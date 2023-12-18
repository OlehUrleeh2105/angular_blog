import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { PostsService } from '../shared/posts.service';
import { PostPageComponent } from './post-page.component';

describe('PostPageComponent', () => {
  let component: PostPageComponent;
  let fixture: ComponentFixture<PostPageComponent>;
  let postsService: PostsService;
  let route: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostPageComponent ],
      providers: [
        PostsService,
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({id: '1'})
          }
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPageComponent);
    component = fixture.componentInstance;
    postsService = TestBed.inject(PostsService);
    route = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should display loading text if no post', () => {
    const el = fixture.nativeElement;
    expect(el.textContent).toContain('Loading...');
  });
});
