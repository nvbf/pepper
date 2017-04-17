export type Player = {
  name: string,
  number: number,
  position: string,
  image: string,
};

export type Team = {
  name: string,
  logo: string,
  players: Array<Player>,
};

export type TeamScore = {
  setOne: number,
  setTwo: number,
  setThree: number,
  setFour: number,
  setFive: number,
};

export type Lineup = {
  one: number,
  two: number,
  three: number,
  four: number,
  five: number,
  six: number,
  libero: number,
};
