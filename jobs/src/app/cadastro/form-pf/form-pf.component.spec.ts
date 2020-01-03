import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPfComponent } from './form-pf.component';

describe('FormPfComponent', () => {
  let component: FormPfComponent;
  let fixture: ComponentFixture<FormPfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
