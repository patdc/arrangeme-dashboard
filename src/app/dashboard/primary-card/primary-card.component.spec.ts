import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryCardComponent } from './primary-card.component';

describe('PrimaryCardComponent', () => {
  let component: PrimaryCardComponent;
  let fixture: ComponentFixture<PrimaryCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimaryCardComponent],
    });
    fixture = TestBed.createComponent(PrimaryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
