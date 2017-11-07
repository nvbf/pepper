'use-latest';

const AUTHENTICATION = process.env.AUTHENTICATION;

function getUrl(matchNr) {
    return `https://dataprojectserviceswebapilive.azurewebsites.net/api/v1/NVBF/MatchLiveFullInfo/FedNumber/${matchNr}/`
}

const fetch = require('isomorphic-fetch');

function getFullInfoOnMatch(event) {
  const matchId = event.data.matchId;


  const url = getUrl(matchId)
  
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

    const response = mapFullMatchInfo(elem)
    console.log('response')
    console.log(response)
  	return response
  }
  

function mapFullMatchInfo(info) {
    const data = {}
    addKeyAndValue(data, info, "MID", "matchID")
    addKeyAndValue(data, info, "ST", "matchStatus")
    addKeyAndValue(data, info, "MDT", "matchDatetime")
    addKeyAndValue(data, info, "HID", "homeTeamID")
    addKeyAndValue(data, info, "GID", "guestTeamID")
    addKeyAndValue(data, info, "HTN", "homeTeamName")
    addKeyAndValue(data, info, "GTN", "guestTeamName")
    addKeyAndValue(data, info, " WSH", "setWonHomeTeam")
    addKeyAndValue(data, info, "WSG", "setWonGuestTeam")
    addKeyAndValue(data, info, "S1H", "set1scoreHomeTeam")
    addKeyAndValue(data, info, "S1G", "set1scoreGuestTeam")
    addKeyAndValue(data, info, "S2H", "set2scoreHomeTeam")
    addKeyAndValue(data, info, "S2G", "set2scoreGuestTeam")
    addKeyAndValue(data, info, "S3H", "set3scoreHomeTeam")
    addKeyAndValue(data, info, "S3G", "set3scoreGuestTeam")
    addKeyAndValue(data, info, "S4H", "set4scoreHomeTeam")
    addKeyAndValue(data, info, "S4G", "set4scoreGuestTeam")
    addKeyAndValue(data, info, "S5H", "set5scoreHomeTeam")
    addKeyAndValue(data, info, "S5G", "set5scoreGuestTeam")
    addKeyAndValue(data, info, "GSH", "goldenSetscoreHomeTeam")
    addKeyAndValue(data, info, "GSG", "goldenSetscoreGuestTeam")
    addKeyAndValue(data, info, "GSP", "goldenSetPlayed")
    addKeyAndValue(data, info, "TS1", "set1Duration")
    addKeyAndValue(data, info, "TS2", "set2Duration")
    addKeyAndValue(data, info, "TS3", "set3Duration")
    addKeyAndValue(data, info, "TS4", "set4Duration")
    addKeyAndValue(data, info, "TS5", "set5Duration")
    addKeyAndValue(data, info, "TGS", "goldenSetDuration")
    addKeyAndValue(data, info, "ToS1H", "timeOutSet1HomeTeam")
    addKeyAndValue(data, info, "ToS1G", "timeOutSet1GuestTeam")
    addKeyAndValue(data, info, "ToS2H", "timeOutSet2HomeTeam")
    addKeyAndValue(data, info, "ToS2G", "timeOutSet2GuestTeam")
    addKeyAndValue(data, info, "ToS3H", "timeOutSet3HomeTeam")
    addKeyAndValue(data, info, "ToS3G", "timeOutSet3GuestTeam")
    addKeyAndValue(data, info, "ToS4H", "timeOutSet4HomeTeam")
    addKeyAndValue(data, info, "ToS4G", "timeOutSet4GuestTeam")
    addKeyAndValue(data, info, "ToS5H", "timeOutSet5HomeTeam")
    addKeyAndValue(data, info, "ToS5G", "timeOutSet5GuestTeam")
    addKeyAndValue(data, info, "ToGSH", "timeOutGoldenSetHomeTeam")
    addKeyAndValue(data, info, "ToGSG", "timeOutGoldenSetGuestTeam")
    addKeyAndValue(data, info, "CSet", "currentSet")
    addKeyAndValue(data, info, "CHP", "currentSetScoreHomeTeam")
    addKeyAndValue(data, info, "CGP", "currentSetScoreGuestTeam")
    
    data.listOfPlayerStatisticsHomeTeam = mapPlayerStats(info.PStatsH)
    data.listOfPlayerStatisticsGuestTeam = mapPlayerStats(info.PStatsG)

    data.currentRotation = mapWebApiLiveLineUp(info.CR)
    data.startingSix = mapWebApiLiveLineUp(info.SSix)    
    return data
}

function mapPlayerStats(info) {
    const data = {}
    addKeyAndValue(data, info, "SHN", "NickName")
    addKeyAndValue(data, info, "GS", "GoldenSet")
    addKeyAndValue(data, info, "SN", "SetNumber")
    addKeyAndValue(data, info, "TID", "TeamID")
    addKeyAndValue(data, info, "PID", "PlayerID")
    addKeyAndValue(data, info, "K", "Captain")
    addKeyAndValue(data, info, "L", "Libero")
    addKeyAndValue(data, info, "N", "ShirtNumber")
    addKeyAndValue(data, info, "SR", "PlayerSurname")
    addKeyAndValue(data, info, "NM", "PlayerName")
    addKeyAndValue(data, info, "PS", "PointWhenServing")
    addKeyAndValue(data, info, "SOut", "SideOut")
    addKeyAndValue(data, info, "SWin", "ServeAce")
    addKeyAndValue(data, info, "SErr", "ServeError")
    addKeyAndValue(data, info, "STot", "ServeTotal")
    addKeyAndValue(data, info, "RWin", "PerfectRecpetion")
    addKeyAndValue(data, info, "RErr", "ReceptionError")
    addKeyAndValue(data, info, "RTot", "ReceptionTotal")
    addKeyAndValue(data, info, "SpWin", "SpikePoint")
    addKeyAndValue(data, info, "SpErr", "SpikeError")
    addKeyAndValue(data, info, "SpTot", "SpikeTotal")
    addKeyAndValue(data, info, "BWin", "BlockWinning")    
    return data;
}

function mapWebApiLiveLineUp(cr) {
    const data = {}
    if(cr.LUPH) {
      data.listOfLineUpHomeTeam = getLineupList(cr.LUPH)
    }
    if(cr.LUPG) {
      data.listOfLineUpAwayTeam = getLineupList(cr.LUPG)
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

function getLineupList(linupList) {    
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

module.exports = getFullInfoOnMatch