import {waitForAsync, TestBed} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe(`AppComponent'`, (() => {
  const fixture = TestBed.createComponent(AppComponent)
  const app = fixture.debugElement.componentInstance

  test(`it creates App component`, () => {
    expect(app).toBeTruthy();
  });

  test(`app should have as title 'mini-mob'`, () => {
    expect(app.title).toEqual('mini-mob');
  });
}));
