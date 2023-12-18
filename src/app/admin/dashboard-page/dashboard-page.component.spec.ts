import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsService } from 'src/app/shared/posts.service';
import { DashboardPageComponent } from './dashboard-page.component';

describe('DashboardPageComponent', () => {
  let component: DashboardPageComponent;
  let fixture: ComponentFixture<DashboardPageComponent>;
  let postsService: PostsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardPageComponent ],
      providers: [ PostsService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPageComponent);
    component = fixture.componentInstance;
    postsService = TestBed.inject(PostsService);
  });

  it('should unsubscribe from subs on destroy', () => {
    spyOn(component.pSub, 'unsubscribe');
    spyOn(component.dSub, 'unsubscribe');

    component.ngOnDestroy();

    expect(component.pSub.unsubscribe).toHaveBeenCalled();
    expect(component.dSub.unsubscribe).toHaveBeenCalled();
  });

});
