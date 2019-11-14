import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDialogComponent } from './login-dialog.component';
import { By } from '../../../node_modules/@angular/platform-browser';
import { DebugElement } from '../../../node_modules/@angular/core';
import { User } from '../_models';
import { AvatarModule, AvatarService } from '../../../node_modules/ngx-avatar';
import { AngularMaterialModule } from '../_shared-Module/angular-material/angular-material.module';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../node_modules/@angular/material';
import { HttpClientModule } from '../../../node_modules/@angular/common/http';
import { RouterModule } from '../../../node_modules/@angular/router';

describe('LoginDialogComponent', () => {
  let component: LoginDialogComponent;
  let fixture: ComponentFixture<LoginDialogComponent>;

  let submitEl: DebugElement;
  let loginEl: DebugElement;
  let passwordEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginDialogComponent ],
      imports: [
        AngularMaterialModule,
        FormsModule,
        HttpClientModule,
        RouterModule 
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] },
        { provide: AvatarService, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    submitEl = fixture.debugElement.query(By.css('button'));
    loginEl = fixture.debugElement.query(By.css('#email'));
    passwordEl = fixture.debugElement.query(By.css('#password'));
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('Setting enabled to false disables the submit button', () => {
  //   component.enabled = false;
  //   fixture.detectChanges();
  //   // expect(submitEl.nativeElement.disabled).toBeTruthy();
  // });

  // it('Setting enabled to true enables the submit button', () => {
  //   component.enabled = true;
  //   fixture.detectChanges();
  //   expect(submitEl.nativeElement.disabled).toBeFalsy();
  // });

  it('Entering email and password emits loggedIn event', () => {
    let user: User;
    loginEl.nativeElement.value = "test@example.com";
    passwordEl.nativeElement.value = "123456";

    // Subscribe to the Observable and store the user in a local variable.
    // component.loggedIn((value) => user = value);

    // This sync emits the event and the subscribe callback gets executed above
    // submitEl.triggerEventHandler('click', null);

    // Now we can check to make sure the emitted value is correct
    expect(user.email).toEqual("test@example.com");
    expect(user.password).toEqual("123456");
  });

});
