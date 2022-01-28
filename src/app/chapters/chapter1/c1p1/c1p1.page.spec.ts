import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C1p1Page } from './c1p1.page';

describe('C1p1Page', () => {
  let component: C1p1Page;
  let fixture: ComponentFixture<C1p1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C1p1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C1p1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
