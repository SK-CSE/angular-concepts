import { TestBed } from '@angular/core/testing';

import { ReactiveformService } from './reactiveform.service';

describe('ReactiveformService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReactiveformService = TestBed.get(ReactiveformService);
    expect(service).toBeTruthy();
  });
});
