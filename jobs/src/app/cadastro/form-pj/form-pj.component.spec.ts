import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPjComponent } from './form-pj.component';

describe('FormPjComponent', () => {
  let component: FormPjComponent;
  let fixture: ComponentFixture<FormPjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
