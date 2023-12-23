import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarscardComponent } from './carscard.component';

describe('CarscardComponent', () => {
  let component: CarscardComponent;
  let fixture: ComponentFixture<CarscardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarscardComponent]
    });
    fixture = TestBed.createComponent(CarscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
