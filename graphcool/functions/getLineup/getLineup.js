'use-latest';

const AUTHENTICATION = process.env.AUTHENTICATION;

function getUrl(matchNr, setNr) {
  return `https://dataprojectserviceswebapilive.azurewebsites.net/api/v1/NVBF/StartingSix/FedNumber/${matchNr}/Set/${setNr}`
}

const fetch = require('isomorphic-fetch');

function fetchLineup(event) {
  const matchId = event.data.matchId;
  const setNr = event.data.setNr;

  const url = getUrl(matchId, setNr);
  
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