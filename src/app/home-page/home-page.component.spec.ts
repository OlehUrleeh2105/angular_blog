import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsService } from '../shared/posts.service';
import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let postsService: PostsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageComponent ],
      providers: [ PostsService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    postsService = TestBed.inject(PostsService);
  });

  it('should display loading text if no posts', () => {
    const element = fixture.nativeElement;
    expect(element.textContent).toContain('Loading...');
  });
});
