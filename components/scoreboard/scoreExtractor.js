function isSetFinished(set) {
  return (
    Math.abs(set.homeScore - set.awayScore) >= 2 && (set.homeScore >= 25 || set.awayScore >= 25)
  );
}

function homeTeamWon(set) {
  return isSetFinished(set) && set.homeScore > set.awayScore;
}

function awayTeamWon(set) {
  return isSetFinished(set) && set.awayScore > set.homeScore;
}

function summarize(total, result) {
  return total + result;
}

export function getHomeTeamSets(sets) {
  return sets.map(homeTeamWon).reduce(summarize, 0);
}

export function getAwayTeamSets(sets) {
  return sets.map(awayTeamWon).reduce(summarize, 0);
}

function compareByNumber(setA, setB) {
  const res = setB.number - setA.number;
  return res;
}

function getLastSet(sets) {
  if (sets.length === 0) {
    return { homeScore: 0, awayScore: 0 };
  }
  const setsSorted = sets.slice().sort(compareByNumber);
  return setsSorted[0];
}

export function getHomeTeamPoints(sets = []) {
  return getLastSet(sets).homeScore;
}

export function getAwayTeamPoints(sets = []) {
  return getLastSet(sets).awayScore;
}
