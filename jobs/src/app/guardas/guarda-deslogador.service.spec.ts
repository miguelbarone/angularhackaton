import { TestBed } from '@angular/core/testing';

import { GuardaDeslogadorService } from './guarda-deslogador.service';

describe('GuardaDeslogadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuardaDeslogadorService = TestBed.get(GuardaDeslogadorService);
    expect(service).toBeTruthy();
  });
});
