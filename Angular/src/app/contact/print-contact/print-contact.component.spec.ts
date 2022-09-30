import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintContactComponent } from './print-contact.component';

describe('PrintContactComponent', () => {
  let component: PrintContactComponent;
  let fixture: ComponentFixture<PrintContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
