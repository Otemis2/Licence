import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContact2Component } from './list-contact2.component';

describe('ListContact2Component', () => {
  let component: ListContact2Component;
  let fixture: ComponentFixture<ListContact2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListContact2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContact2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
