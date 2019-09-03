const util = require('./util')
const dynamicLine = util.dynamicLine

const from = {
	name: "Zach Mays",
	street: "1234 NW 20th",
	state: "OK",
	city: "OKC",
	zip: "73106"
}

function createLetter(to) {
 
    // Dear ${name},
    //
    //
    // Subject: Using XYZ Soap Can Make Your Hands Germ Free
    //
    //
    //
    // Mothers are a blessing as they take care of their kids. They know what is right for them and this XYZ 
    // soap is going to give mothers a relief from the stress, which is common when children go to the 
    // playgrounds. They love play with their ${favoriteToy} 
    // 
    // While playing children get many germs in their hands, which results in diseases, skin infections, and 
    // what not. This soap is going to kill all the bacteria 99% of the time. It is available at your nearest 
    // retail shop and in case, you are a distributor you can visit us at ABC location.
    
    // Mr. /Ms. LMN
    // Director of Marketing,
    // XYZ Group of Companies
 
    const charOfChoice = "|******|"

    console.log("")
    console.log("")
    console.log("")

    console.log(dynamicLine(2,`Dear ${to.name},  `,charOfChoice))
    console.log(dynamicLine(2,"",charOfChoice,false))
    console.log(dynamicLine(2,"",charOfChoice,false))
    console.log(dynamicLine(2,"",charOfChoice,false))
    console.log(dynamicLine(2,"",charOfChoice,false))
        
    console.log(dynamicLine(2,`Subject: Using XYZ Soap Can Make Your Hands Germ Free at age ${to.age}.`,charOfChoice,false))
    console.log(dynamicLine(2," ",charOfChoice,false))
    console.log(dynamicLine(2," ",charOfChoice,false))
    console.log(dynamicLine(2," ",charOfChoice,false))
    console.log(dynamicLine(2," ",charOfChoice,false))
    

    console.log(dynamicLine(2,`Mothers are a blessing as they take care of their kids even when the childs sex is ${to.sex}.`,charOfChoice,false)) 
    console.log(dynamicLine(2,"They know what is right for them and this XYZ soap is going to give mothers a relief ",charOfChoice,false))
    console.log(dynamicLine(2,`from the stress, which is common when children go to the  `,charOfChoice,false))
    console.log(dynamicLine(2,`playgrounds. They love play with their ${to.favoriteToy}`,charOfChoice,false))
    console.log(dynamicLine(2,"",charOfChoice,false))

    console.log(dynamicLine(2,`We would like to validate the address we have on file which is `,charOfChoice,false))
    console.log(dynamicLine(2,`${to.address.street} ${to.address.city}, ${to.address.state} ${to.address.zip} `,charOfChoice,false))
    console.log(dynamicLine(2,`If this address is not correct please let us know. `,charOfChoice,false))   
    console.log(dynamicLine(2,"",charOfChoice,false))

    console.log(dynamicLine(2,`While playing children get many germs in their hands, which results in diseases, skin infections, and `,charOfChoice,false))
    console.log(dynamicLine(2,`what not. This soap is going to kill all the bacteria 99% of the time. It is available at your nearest `,charOfChoice,false))
    console.log(dynamicLine(2,`retail shop and in case, you are a distributor you can visit us at ABC location. `,charOfChoice,false))   
    console.log(dynamicLine(2,"",charOfChoice,false))
    
    console.log(dynamicLine(2,`${from.name}`,charOfChoice,false))
    console.log(dynamicLine(2,"Director of Marketing",charOfChoice,false))
    console.log(dynamicLine(2,"XYZ Group of Companies",charOfChoice,false))
    console.log(dynamicLine(2,`${from.street} ${from.city}, ${from.state} ${from.zip} `,charOfChoice,false))
    console.log("")
    console.log("")
    console.log("")
    
}
 



function createLetters(promptResponses, userData) {
	
	const filteredData = userData.filter(e => e.sex === promptResponses.sex && e.age <= promptResponses.ageMax)
 	
	filteredData.forEach(data => {			
	  createLetter(data)
	})

 
}

module.exports = {
	createLetters
}