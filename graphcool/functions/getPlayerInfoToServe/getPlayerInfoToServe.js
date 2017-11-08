'use-latest';

const fetch = require("isomorphic-fetch");

const AUTHENTICATION = process.env.AUTHENTICATION;

const API_URL = 'https://dataprojectserviceswebapilive.azurewebsites.net/api/v1/NVBF/CurrentRotation/FedNumber/';

function fetchPlayertoServe(event) {
  const matchId = event.data.matchId;
  const url = `${API_URL}${matchId}`;

  return (
    fetch(url, getFetchConfig())
      //.then(checkStatus)
      .then(res => {
        console.log("before");
        const result = res.json();
        console.log("after");
        return result;
      })
      .then(handleResponse)
      .catch(err => {
        return {
          data: {
            error: err
          }
        };
      })
  );
}

function handleResponse(elem) {
  console.log("handleResponse");
  console.log(elem);
  if (!elem) return {};
  const response = maptoData(getPos1(getCorrectTeam(elem)));
  console.log("RESPONSE:");
  console.log(response);
  return response;
}

function maptoData(lineup1) {
  console.log("maptoData");
  console.log(lineup1);
  if (!lineup1)
    return {
      data: {}
    };
  const data = {};
  addKeyAndValue(data, lineup1, "PN", "shirt");
  addKeyAndValue(data, lineup1, "PZ", "position");
  addKeyAndValue(data, lineup1, "PID", "playerID");
  addKeyAndValue(data, lineup1, "HG", "homeTeamPlayer");
  addKeyAndValue(data, lineup1, "L", "libero");
  addKeyAndValue(data, lineup1, "WHG", "rallyWonByHomeTeam");

  return {
    data
  };
}

function addKeyAndValue(addTo, addFrom, keyFrom, keyTo) {
  if (typeof addFrom[keyFrom] !== "undefined") {
    addTo[keyTo] = addFrom[keyFrom];
  }
}

function getCorrectTeam(cr) {
  if (!cr || !cr.LUPH || !cr.LUPG) return {};
  if (cr.WinHG) {
    return cr.LUPH;
  }
  return cr.LUPG;
}

function getPos1(lineup) {
  console.log("getPos1", lineup);
  if (!lineup || lineup.length !== 6) return {};
  const lineup1 = lineup.filter(line => line.PZ === 1);
  if (lineup1.length === 1) {
    return lineup1[0];
  }
  return {};
}

function getFetchConfig() {
  return {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: AUTHENTICATION
    }
  };
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

module.exports = fetchPlayertoServe;
