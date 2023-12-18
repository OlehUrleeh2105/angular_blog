import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { PostsService } from 'src/app/shared/posts.service';
import { EditPageComponent } from './edit-page.component';

describe('EditPageComponent', () => {
  let component: EditPageComponent;
  let fixture: ComponentFixture<EditPageComponent>;
  let postsService: PostsService;
  let route: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [EditPageComponent],
      providers: [PostsService, {
        provide: ActivatedRoute,
        useValue: {
          params: of({id: '1'})
        }
      }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPageComponent);
    component = fixture.componentInstance;
    postsService = TestBed.inject(PostsService);
    route = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should disable submit if form invalid', () => {
    component.form.controls['title'].setValue('');

    component.submit();

    expect(component.submitted).toBe(false);
  });

  it('should unsubscribe on destroy', () => {
    spyOn(component.uSub, 'unsubscribe');

    component.ngOnDestroy();

    expect(component.uSub.unsubscribe).toHaveBeenCalled();
  });

});
