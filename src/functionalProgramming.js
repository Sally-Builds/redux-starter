import {compose, pipe} from 'lodash/fp'


const trim = str => str.trim()
const toLowerCase = str => str.toLowerCase()

// const wrap = (type, str) => `<${type}> ${str} </${type}>`

const wrap = type => str => `<${type}> ${str} </${type}>`

// const result = wrapInDiv(toLowerCase(trim('Hello World')))
const input = `<Hello world`
// const transform = compose(wrapInDiv, LowerCase, trim)
const transform = pipe(trim, toLowerCase, wrap('span'))
console.log(transform(input))

const name = "Joshua"
name.toLowerCase()
console.log(name)