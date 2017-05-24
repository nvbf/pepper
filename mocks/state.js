import { ManUnited, Bayern } from './teams';

const team = {
  homeTeam: ManUnited,
  awayTeam: Bayern,
};

const score = {
  homeTeam: {
    setOne: 25,
    setTwo: 25,
    setThree: 24,
    setFour: 0,
    setFive: 0,
  },
  awayTeam: {
    setOne: 21,
    setTwo: 23,
    setThree: 26,
    setFour: 0,
    setFive: 0,
  },
};

const lineup = {
  homeTeam: {
    one: 2,
    two: 1,
    three: 4,
    four: 14,
    five: 12,
    six: 7,
    libero: 5,
  },
  awayTeam: {
    one: 1,
    two: 3,
    three: 5,
    four: 7,
    five: 8,
    six: 9,
    libero: 4,
  },
};

const playerStats = {};

export default {
  team,
  score,
  lineup,
  playerStats,
};
