
const _ = require('lodash')
const width = 38

function dynamicLine(leftWidth, content, borderCharacter, hasEndCharacter) {
	const leftPad = _.pad("", leftWidth)
	const rightWidth = width - leftWidth - content.length
	const rightPad = _.pad("", rightWidth)
	const paddedContent = `${leftPad}${content}${rightPad}`
	//const borderCharacter = '|'
	if (hasEndCharacter) {
		return `${borderCharacter}${paddedContent}${borderCharacter}`
	} else {
		return `${borderCharacter}${paddedContent}`
	}
	 
	
}

module.exports = {
	dynamicLine: dynamicLine
}