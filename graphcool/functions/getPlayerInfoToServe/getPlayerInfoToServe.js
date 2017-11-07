const API_URL =
  "https://dataprojectserviceswebapilive.azurewebsites.net/api/v1/NVBF/CurrentRotation/FedNumber/";
const AUTHENTICATION =
  "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSIsImtpZCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSJ9.eyJpc3MiOiJodHRwczovL2RhdGFwcm9qZWN0aWRlbnRpdHlzZXJ2ZXIuYXp1cmV3ZWJzaXRlcy5uZXQvY29yZSIsImF1ZCI6Imh0dHBzOi8vZGF0YXByb2plY3RpZGVudGl0eXNlcnZlci5henVyZXdlYnNpdGVzLm5ldC9jb3JlL3Jlc291cmNlcyIsImV4cCI6MTU0MDk3NDI5NSwibmJmIjoxNTA5NDM4Mjk1LCJjbGllbnRfaWQiOiJ3ZWJhcHAiLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwiZW1haWwiLCJkcGNsb3Vkc2VydmljZSIsIndjbWFwaXNlcnZpY2UiXSwic3ViIjoiMWMzMGVmNDQtOTc3NC00NTk0LWFhZTItNWIxOTc4MzQ3ZDAyIiwiYXV0aF90aW1lIjoxNTA5NDM4Mjk0LCJpZHAiOiJpZHNydiIsInByZWZlcnJlZF91c2VybmFtZSI6Ik5PUl9DbHViQGRhdGFwcm9qZWN0LmNvbSIsImFtciI6WyJwYXNzd29yZCJdfQ.ETRZadQKPq3RdibvjKdt2Fq7UK2hVfh8tEma_zbnWo2nwMm9ImBjah4K6sISf6-eq77jl1Agud_4VwnhmYKSCHYpEVDJjU15nhzzztyCu2LjjRUgDpOk5lLSS8EIimMd69xPh-VvBnIesuX-oSW51REwg9glxQLXFJriF12uEfAbqCzKilYzMRSw0ygo_Z90xGIVnvEtaRPYepByCcnNsLjLufrnMCiUlsdNAAGaRUqnTChqkSwR7xUzSLEWnu4pqZbS-uZphnznNNno-KCeJgqtnYd4uS-c3rYnbw2ir8npV5ONwIg3wKI-psIxpyvYK2kzb5N8P4jqGM7-rAcxUw";

const fetch = require("isomorphic-fetch");

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
