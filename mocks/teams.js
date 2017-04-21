import type { Team } from '../types/types';
import { Bayern as BayernPlayers, ManUnited as ManUnitdPlayers } from './players';

export const Bayern: Team = {
  name: 'FC Bayern München',
  shortName: 'BAYERN',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Logo_FC_Bayern_M%C3%BCnchen.svg',
  players: BayernPlayers,
};

export const ManUnited: Team = {
  name: 'Manchester United FC',
  shortName: 'MAN UTD',
  logo: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg',
  players: ManUnitdPlayers,
};
