/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct buttonText', () => {
    // Assert
    expect(component.buttonText).toEqual('Sign Up');
  });

  it('should have the correct inputElements', () => {
    // Assert
    let expected = [
      {
        name: 'username',
        placeholder: 'username',
        type: 'text'
      },
      {
        name: 'email',
        placeholder: 'email',
        type: 'email'
      },
      {
        name: 'password',
        placeholder: 'password',
        type: 'password'
      },
      {
        name: 'password-confirm',
        placeholder: 'confirm password',
        type: 'password'
      }
    ];
    expect(component.inputElements).toEqual(expected);
  });

  describe('signUpAction', () => {
    beforeEach(() => {
      spyOn(component.activationCallback, 'emit');
      spyOn(component, 'submit');
    });

    describe('active is false', () => {
      beforeEach(() => {
        component.active = false;
      });

      it('should call the activationCallback.emit function', () => {
        // Act
        component.signUpAction();

        // Assert
        expect(component.activationCallback.emit).toHaveBeenCalledWith();
      });

      it('should not call the submit function', () => {
        // Act
        component.signUpAction();

        // Assert
        expect(component.submit).not.toHaveBeenCalled();
      });
    });

    describe('active is true', () => {
      beforeEach(() => {
        component.active = true;
      });

      it('should call the submit function', () => {
        // Act
        component.signUpAction();

        // Assert
        expect(component.submit).toHaveBeenCalledWith();
      });

      it('should not call the activationCallback.emit function', () => {
        // Act
        component.signUpAction();

        // Assert
        expect(component.activationCallback.emit).not.toHaveBeenCalled();
      });
    });
  });
});
