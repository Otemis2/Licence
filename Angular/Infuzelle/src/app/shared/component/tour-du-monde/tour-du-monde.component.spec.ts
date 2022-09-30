import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourDuMondeComponent } from './tour-du-monde.component';

describe('TourDuMondeComponent', () => {
  let component: TourDuMondeComponent;
  let fixture: ComponentFixture<TourDuMondeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourDuMondeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourDuMondeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
