/*

  Search Function:

   should be able to search for anything inside a string, for example. If I was to pass in "o", it should log:

   1. Bob
   2. Collins
   3. Spongebob

   Should log a human readable list, see how you can add an index to the iteration

   Hint: Good possability that two iterators are used here, also use the data array below for this.

*/

const data = [
  "Bob",
  "Reya",
  "Phil",
  "Collins",
  "Leah",
  "Skywalker",
  "Spongebob",
  "Marissa",
  "Kyle",
  "Lisa"
]


function search(term) {
  const filteredArray = data.filter(name => name.toLowerCase().includes(term.toLowerCase()));
  filteredArray.forEach((name, index) => console.log(`${index + 1}. ${name}`))
}

console.log("=== Search Function Logs ===")
console.log("Search FN: With o")
search("o")
console.log("----")
console.log("Search FN: With a")
search("a")
console.log("=== end Search Function Logs ===")

/*

  switch S for $ function:

    This function should give us back a modified array where any s inside the array of names is transformed into a $ sign. Also should be logged back in a humanb readable list. Result should be:

    1. "Bob",
    2. "Reya",
    3. "Phil",
    4. "Collin$",
    5. "Leah",
    6. "$kywalker",
    7. "$pongebob",
    8. "Mari$$a",
    9. "Kyle",
    10. "Li$a"

    Note: Capitalization shouldn't matter here, also use the data array above for this
*/

function switchSfor$() {
  const modifiedNames = data.map(name => name.replace(/[sS]/g, "$"))
  modifiedNames.forEach((name, index) => console.log(`${ index + 1}. ${name}`))
}
console.log("=== Switch S For $ Function Logs ===")
switchSfor$();
console.log("=== end Switch S For $ Function Logs ===")

/*
Iterate through an array of objects in order to find a person that matches the id passed in! If no person in the array exist, log out, oops didn't find anyone! If it does exist, then log, Found <person's name>!

Ex:

findPerson(1)

logs => Found Samuel!

findPerson(100)

logs => oops didn't find anyone!
*/

const arrayOfObjects = [
  { id: 1, name: "Samuel" },
  { id: 2, name: "Rhea" },
  { id: 3, name: "Linda" },
  { id: 4, name: "Clarissa" },
  { id: 5, name: "Bob" },
  { id: 6, name: "Jojo" },
  { id: 7, name: "Parker" }
]

function findPerson(id) {
  // iterate through arrayOfObjects here
  const person = arrayOfObjects.find(person => person.id === id);
  console.log(person ? `Found ${person.name}!` : "oops didn't find anyone...")
}


console.log("=== find Person Function Logs ===")
console.log("findPerson with id of 1")
findPerson(1)
console.log('----')
console.log("findPerson with id of 100")
findPerson(100)
console.log("=== end find Person Function Logs ===")


/*
calculateTheCost:

Iterate through the list of items using the reduce function in order to find the cost of the items listed below. Should log the result: The price is 2324!
*/

const items = [
  { name: "phone", price: 899 },
  { name: "tv", price: 1399 },
  { name: "soap", price: 5 },
  { name: "lightbulb", price: 6 },
  { name: "shampoo", price: 6 },
  { name: "cheese", price: 5 },
  { name: "tomatoes", price: 4 }
]

function calculateTheCost() {
  const total = items.reduce((a, b) => a + b.price, 0)
  console.log(`total is: $${total}`)
}

console.log("=== Calculate The Cost Function Logs ===")
calculateTheCost();
console.log("=== end Calculate The Cost Function Logs ===")
