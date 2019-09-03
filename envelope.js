const util = require('./util')
const dynamicLine = util.dynamicLine

const from = {
	name: "Zach Mays",
	street: "1234 NW 20th",
	state: "OK",
	city: "OKC",
	zip: "73106"
}

function createEnvelope(to) {
	// from and to object
	// {name, street, city, state, zip}

	// ========================================
	// | Zach Mays                            |
	// | 124 NW 20th                          |
	// | OKC, OK 73106                        |
	// |                                      |
	// |					Name              |
	// |					Address           |
	// |					City, State, Zip  |
	// ========================================

	const charOfChoice = '|***|'

	console.log("========================================")
	console.log(dynamicLine(2, from.name, charOfChoice , true))
	console.log(dynamicLine(2, from.street, charOfChoice, true))
	console.log(dynamicLine(2, `${from.city}, ${from.state}, ${from.zip}`, charOfChoice, true))
	console.log(dynamicLine(2, "", charOfChoice, true))
	console.log(dynamicLine(11, to.name, charOfChoice, true))
	console.log(dynamicLine(11, to.address.street, charOfChoice, true))
	console.log(dynamicLine(11, `${to.address.city}, ${to.address.state}, ${to.address.zip}`, charOfChoice,true))
	console.log("========================================")
}



function createEnvelopes(promptResponses, userData) {
	
	const filteredData = userData.filter(e => e.sex === promptResponses.sex && e.age <= promptResponses.ageMax)
 	
	filteredData.forEach(data => {			
	  createEnvelope(data)
	})

 
}

module.exports = {
	createEnvelopes
}