console.log("Hello World Learning JS");

//This code print the result
console.log(10 + 10);

// String
var brand = "Alnuhuscode"
console.log(typeof brand)
console.log(brand.toUpperCase())
console.log(typeof brand.length)
console.log(brand.substring(0, 6))
console.log(brand.substring(6, 11))

var a = "Alnuhus"
var b = "code"
console.log(a + " " + b)
console.log(`${a}${b}`)


// Objects

var person ={
    firstName: "Jamila",
    age: 21,
    balance: 100.32,
    isFemale: true,
    dob:new Date(2013, 10, 23).toJSON(),
    address: {
        city: "USA",
        postcode: "SW9 Allen Avenue",
    }
};
console.log(person)
console.log(person.firstName)
console.log(person.age)
console.log(person.address)
console.log(person.balance)
console.log(Object.values(person))
console.log(Object.keys(person))

// Variables

var firstName = "Jamila";
var age = 21;
var isFemale = true
var balance = 100.32
var dob = new Date(2013, 10, 25);
var person = {};
var empty = undefined;


console.log(typeof isFemale);
console.log(typeof age);
console.log(typeof firstName);
console.log(typeof balance);
console.log(typeof dob);
console.log(typeof person);
console.log(typeof empty);


console.log(isFemale);
console.log(age);
console.log(firstName);
console.log(balance);
console.log(dob);
console.log(person);
console.log(empty);
