// @flow

import { simpleServerClient } from '../libs/initApollo';

function convertHomeTeam(dataVolleyTeam) {
  return convertdataVolleyTeam(dataVolleyTeam, "homeTeamName", "homeTeamID");
}

function convertAwayTeam(dataVolleyTeam) {
  return convertdataVolleyTeam(dataVolleyTeam, "guestTeamName", "guestTeamID");
}

function convertTeam(dataVolleyTeam, teamNameProp, teamIDProp) {
  const id = dataVolleyTeam[teamIDProp];
  const name = dataVolleyTeam[teamNameProp];
  if (isTeamInDatabase(id)) {
  }
}

function isTeamInDatabase(id) {
  const result = getTeam(id);
  if (result.error) {
    throw new Error(result.error);
  }
  if (!result.data && !result.data.allTeams) {
    throw new Error("result do not exist... should not happend");
  }
  if (!result.data.allTeams === 1) {
    throw new Error("result is not of length 1 ??????");
  }
  return result.data.allTeams[0];
}

function arrayIsEmpty(array) {
  if (!array || !(typeof array.length === 'number')) {
    throw new Error('Not a array');
  }
  return array.length === 0;
}

function getTeam(id) {
  return simpleServerClient.request(`
    {
      allTeams(filter: {id: ${id}) {
        name
        id
      }
    }
    
  }
  `);
}

function createTeam(dataVolleyTeam) {
  // 1. check if ID exist.
  // if so, bail out or update?
  // 2. convert datavolley structur to pepper format.
  // 3. insert to database
  // 4. return back atleast id.
}

const pepperTeam = {
  logo: "",
  color: "",
  name: "",
  shortName: "",
  slug: "", // unique
  dataVolleyId: 0
};

const dataVolleyTeam = {};
