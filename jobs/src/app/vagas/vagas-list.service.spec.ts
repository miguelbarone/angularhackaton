import { TestBed } from '@angular/core/testing';

import { VagasListService } from './vagas-list.service';

describe('VagasListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VagasListService = TestBed.get(VagasListService);
    expect(service).toBeTruthy();
  });
});
