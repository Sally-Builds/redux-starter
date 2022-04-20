/**
 * To make objects immutable in javascript this is the way to go
 */



 const person = {
    name: 'Jay',
    age: 43
}
console.log(person)
//to make a reference of the person object , we use the Object.Assgn

// it takes 3 args with the 3rd arg being optional, the third arg is the update you want to run on the newly created object
const newPerson = Object.assign({}, person, {name: 'Jane'});
console.log(newPerson)

//we could also use the spread operator
const anotherPerson = {...person, name: 'Jude', age: 25}
console.log(anotherPerson)

//we have to be careful when using spread operators because it uses shallow coping, meaning
// that it doesnt copy the nested object. below is an example

const company = {
    name: 'Namek',
    location: {
        'address': '23 melita plaza',
        'state': 'Abuja'
    }
}
const anotherCompany = {...company, name: 'DevStrike'}
anotherCompany.location.state = "Enugu" // here it mutates the original value of the nested object
// console.log(company)
//we overcome this issue by:

const anotherCompany2 = {
    ...company, 
    name: 'glamlink',
    location: {
        ...company.location
    }
}

anotherCompany2.location.state = "Akwa ibom" // here it mutates the original value of the nested object
console.log(company)
console.log(anotherCompany2)