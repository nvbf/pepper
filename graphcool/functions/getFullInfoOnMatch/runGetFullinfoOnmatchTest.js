const getFullInfoOnMatch = require('./getFullInfoOnMatch');

event = {
    data: {
        matchId: 1111,
        setId: 1
    }
}


const data = getFullInfoOnMatch(event)
data.then(res => {
    console.log('data is')
    console.log(res)
})
