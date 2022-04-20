/**
 * Curring is a technique that allows us to take a function with
 *  N args and converts it to a function with 1 args 
 */

function add(a) {
    return function (b) {
        a + b
    }
}

const add1 = add(1) //a
add1(3) //b
// or
 add1(1)(3)

 const sub = a => (b) => a -b 