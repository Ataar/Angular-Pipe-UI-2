import { TestBed } from '@angular/core/testing';

import { FootballPlayersService } from './football-players.service';

describe('FootballPlayersService', () => {
  let service: FootballPlayersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FootballPlayersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
