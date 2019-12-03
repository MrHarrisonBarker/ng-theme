import { TestBed } from '@angular/core/testing';

import { NgThemeService } from './ng-theme.service';

describe('NgThemeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgThemeService = TestBed.get(NgThemeService);
    expect(service).toBeTruthy();
  });
});
