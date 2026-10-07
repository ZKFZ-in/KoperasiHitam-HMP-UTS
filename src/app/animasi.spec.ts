import { TestBed } from '@angular/core/testing';
import { Animasi } from './animasi';

describe('Animasi', () => {
  let service: Animasi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Animasi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
