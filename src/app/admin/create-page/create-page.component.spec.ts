import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { CreatePageComponent } from './create-page.component';

describe('CreatePageComponent', () => {

  let component: CreatePageComponent;
  let fixture: ComponentFixture<CreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ CreatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the form with 3 controls', () => {
    expect(component.form.contains('title')).toBeTruthy();
    expect(component.form.contains('text')).toBeTruthy();
    expect(component.form.contains('author')).toBeTruthy();
  });

  it('should make the title control required', () => {
    let control = component.form.get('title');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });

  it('should make the text control required', () => {
    let control = component.form.get('text');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });

  it('should make the author control required', () => {
    let control = component.form.get('author');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });

  it('should disable submit button if form is invalid', () => {
    expect(component.form.valid).toBeFalsy();
    expect(component.submit()).toBeUndefined();
  });
});
