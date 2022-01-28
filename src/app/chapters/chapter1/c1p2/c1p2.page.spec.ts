import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C1p2Page } from './c1p2.page';

describe('C1p2Page', () => {
  let component: C1p2Page;
  let fixture: ComponentFixture<C1p2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C1p2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C1p2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
