import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTitheComponent } from './register-tithe.component';

describe('RegisterTitheComponent', () => {
  let component: RegisterTitheComponent;
  let fixture: ComponentFixture<RegisterTitheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterTitheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterTitheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
