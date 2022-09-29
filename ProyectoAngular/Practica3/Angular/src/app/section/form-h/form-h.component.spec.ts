import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHComponent } from './form-h.component';

describe('FormHComponent', () => {
  let component: FormHComponent;
  let fixture: ComponentFixture<FormHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
