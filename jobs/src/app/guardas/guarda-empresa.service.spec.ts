import { TestBed } from '@angular/core/testing';

import { GuardaEmpresaService } from './guarda-empresa.service';

describe('GuardaEmpresaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuardaEmpresaService = TestBed.get(GuardaEmpresaService);
    expect(service).toBeTruthy();
  });
});
