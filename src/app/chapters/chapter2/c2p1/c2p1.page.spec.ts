import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C2p1Page } from './c2p1.page';

describe('C2p1Page', () => {
  let component: C2p1Page;
  let fixture: ComponentFixture<C2p1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C2p1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C2p1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
