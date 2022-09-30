import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDepliantComponent } from './menu-depliant.component';

describe('MenuDepliantComponent', () => {
  let component: MenuDepliantComponent;
  let fixture: ComponentFixture<MenuDepliantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuDepliantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuDepliantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
