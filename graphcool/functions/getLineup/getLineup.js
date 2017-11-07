

const AUTHENTICATION = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSIsImtpZCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSJ9.eyJpc3MiOiJodHRwczovL2RhdGFwcm9qZWN0aWRlbnRpdHlzZXJ2ZXIuYXp1cmV3ZWJzaXRlcy5uZXQvY29yZSIsImF1ZCI6Imh0dHBzOi8vZGF0YXByb2plY3RpZGVudGl0eXNlcnZlci5henVyZXdlYnNpdGVzLm5ldC9jb3JlL3Jlc291cmNlcyIsImV4cCI6MTU0MDk3NDI5NSwibmJmIjoxNTA5NDM4Mjk1LCJjbGllbnRfaWQiOiJ3ZWJhcHAiLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwiZW1haWwiLCJkcGNsb3Vkc2VydmljZSIsIndjbWFwaXNlcnZpY2UiXSwic3ViIjoiMWMzMGVmNDQtOTc3NC00NTk0LWFhZTItNWIxOTc4MzQ3ZDAyIiwiYXV0aF90aW1lIjoxNTA5NDM4Mjk0LCJpZHAiOiJpZHNydiIsInByZWZlcnJlZF91c2VybmFtZSI6Ik5PUl9DbHViQGRhdGFwcm9qZWN0LmNvbSIsImFtciI6WyJwYXNzd29yZCJdfQ.ETRZadQKPq3RdibvjKdt2Fq7UK2hVfh8tEma_zbnWo2nwMm9ImBjah4K6sISf6-eq77jl1Agud_4VwnhmYKSCHYpEVDJjU15nhzzztyCu2LjjRUgDpOk5lLSS8EIimMd69xPh-VvBnIesuX-oSW51REwg9glxQLXFJriF12uEfAbqCzKilYzMRSw0ygo_Z90xGIVnvEtaRPYepByCcnNsLjLufrnMCiUlsdNAAGaRUqnTChqkSwR7xUzSLEWnu4pqZbS-uZphnznNNno-KCeJgqtnYd4uS-c3rYnbw2ir8npV5ONwIg3wKI-psIxpyvYK2kzb5N8P4jqGM7-rAcxUw"

function getUrl(matchNr, setNr) {
    return `https://dataprojectserviceswebapilive.azurewebsites.net/api/v1/NVBF/StartingSix/FedNumber/${matchNr}/Set/${setNr}`
}

const fetch = require('isomorphic-fetch');

function fetchLineup(event) {
  const matchId = event.data.matchId;
  const setNr = event.data.setNr;

  const url = getUrl(matchId, setNr)
  
  return fetch(url, getFetchConfig())
    .then(checkStatus)
    .then(res => res.json())
      .then(handleResponse)
      .then(wrapInData)
  	.catch((err) => {    	
    	return { data: { error: err } }
  	})
}

function wrapInData(data) {
    return { data }
}

function handleResponse(elem) {
    if(!elem) return {}

    const response = handleTeams(elem)
    console.log('response')
    console.log(response)
  	return response
  }
  

function getLineupList(linupList) {
    console.log('linupList')
    console.log(linupList)
    
    return linupList.map(maptoPlayerPosition)
}

function maptoPlayerPosition(lineup) {
  console.log('lineup')
  console.log(lineup)
  const data = {}
  addKeyAndValue(data, lineup, "PN", "shirt")
  addKeyAndValue(data, lineup, "PZ", "position")
  addKeyAndValue(data, lineup, "PID", "playerID")
  addKeyAndValue(data, lineup, "HG", "homeTeamPlayer")
  addKeyAndValue(data, lineup, "L", "libero")
  addKeyAndValue(data, lineup, "WHG", "rallyWonByHomeTeam")
  return data
}

function addKeyAndValue(addTo, addFrom, keyFrom, keyTo) {
    if(typeof addFrom[keyFrom] !== "undefined") {
        addTo[keyTo] = addFrom[keyFrom]
    }
}

function handleTeams(cr) {
  const data = {}
  console.log('cr.LUPH')
  console.log(cr.LUPH)
  if(cr.LUPH) {
    data.ListOfLineUpHomeTeam = getLineupList(cr.LUPH)
  }
  if(cr.LUPG) {
    data.ListOfLineUpAwayTeam = getLineupList(cr.LUPG)
  }
  if(typeof cr.WinHG !== "undefined")  {
    data.rallyWonByHomeTeam = cr.WinHG
  }
  if(typeof cr.HLP !== "undefined")  {
    data.liberoPositionHomeTeam = cr.HLP
  }
  if(typeof cr.GLP !== "undefined")  {
    data.liberoPositionAwayTeam = cr.GLP
  }

  return data
}


function getFetchConfig() {
  return {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': AUTHENTICATION
    }
  }
}
  
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  } 
}

module.exports = fetchLineup