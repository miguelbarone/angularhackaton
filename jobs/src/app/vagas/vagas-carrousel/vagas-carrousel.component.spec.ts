import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VagasCarrouselComponent } from './vagas-carrousel.component';

describe('VagasCarrouselComponent', () => {
  let component: VagasCarrouselComponent;
  let fixture: ComponentFixture<VagasCarrouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VagasCarrouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VagasCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
