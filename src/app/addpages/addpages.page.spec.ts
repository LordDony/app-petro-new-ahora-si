import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpagesPage } from './addpages.page';

describe('AddpagesPage', () => {
  let component: AddpagesPage;
  let fixture: ComponentFixture<AddpagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpagesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
