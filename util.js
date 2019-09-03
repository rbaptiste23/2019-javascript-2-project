
const _ = require('lodash')
const width = 38

function dynamicLine(leftWidth, content) {
	const leftPad = _.pad("", leftWidth)
	const rightWidth = width - leftWidth - content.length
	const rightPad = _.pad("", rightWidth)
	const paddedContent = `${leftPad}${content}${rightPad}`
	const borderCharacter = '|'
	return `${borderCharacter}${paddedContent}${borderCharacter}`
}

module.exports = {
	dynamicLine: dynamicLine
}