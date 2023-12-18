import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../shared/services/auth.service';
import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let authService: AuthService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [LoginPageComponent],
      providers: [AuthService, {
        provide: Router,
        useValue: {
          navigate: jasmine.createSpy('navigate')
        }
      }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);

    fixture.detectChanges();
  });

  it('should create form with 2 controls', () => {
    expect(component.form.contains('email')).toBeTruthy();
    expect(component.form.contains('password')).toBeTruthy();
  });

  it('should make email control required', () => {
    let email = component.form.get('email');
    expect(email?.valid).toBeFalsy();
  });

  it('should disable submit if form is invalid', () => {
    expect(component.form.valid).toBeFalsy();
    component.submit();
    expect(component.submitted).toBeFalsy();
  });

  it('should navigate to dashboard on successful login', () => {
    const spy = router.navigate as jasmine.Spy;
    component.submit();

    expect(spy).toHaveBeenCalledWith(['admin', 'dashboard']);
  });

});
