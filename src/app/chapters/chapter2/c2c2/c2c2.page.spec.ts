import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C2c2Page } from './c2c2.page';

describe('C2c2Page', () => {
  let component: C2c2Page;
  let fixture: ComponentFixture<C2c2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C2c2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C2c2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
