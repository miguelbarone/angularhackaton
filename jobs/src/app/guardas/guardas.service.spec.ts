import { TestBed } from '@angular/core/testing';

import { GuardasService } from './guardas.service';

describe('GuardasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuardasService = TestBed.get(GuardasService);
    expect(service).toBeTruthy();
  });
});
