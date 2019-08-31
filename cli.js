const prompts = require('prompts')
const request = require('request-promise-native')
const envelope = require('./envelope')

const programToRun = process.argv[2]

if (programToRun === 'envelope') {
	envelopePrompts().then((responses) => {
		request('http://localhost:3000').then(data => {
			envelope.createEnvelopes(responses, JSON.parse(data))
		})
	})
} else if (programToRun === 'letter') {
	console.log('letter program has not been implmented yet')
} else {
	console.log('That is not a program yet!')
}

function envelopePrompts() {
	const questions = [
		{
		  type: 'number',
		  name: 'ageMax',
		  message: 'age maximum'
		},
		{
		  type: 'text',
		  name: 'sex',
		  message: 'What sexes?'
		}
	  ];

	  return prompts(questions)
}