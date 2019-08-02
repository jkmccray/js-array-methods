// Stuffed animal factory function
// Factory functions should start with the word "create"

// const animalContainer = document.querySelector("#container")

// const render = (animalString) => {
//   animalContainer.innerHTML += animalString
// }

// const createAnimal = (stuffingMaterial, furMaterial, eyeballMaterial, color, hasClothing, species) => {
//   return {
//     toString () {  // can write our own toString method on any object
//       return `The ${this.color} ${this.species} filled with ${this.material.stuffing}` // have to use 'this' to refer to another property within the object
//     },
//     material: {
//       stuffing: stuffingMaterial,
//       fur: furMaterial,
//       eyeball: eyeballMaterial
//     },
//     color: color,
//     hasClothing: hasClothing,
//     species: species
//   }
// }

// const diggy = createAnimal("cotton", "wool", "felt", "goldenrod", false, "iguana")
// console.log(diggy.toString())

// render(diggy.toString()) 
// render(diggy)
// these two lines of code have the same result
// when you add an object to the DOM, javascript automatically invokes the toString method
// if you do not specify what the toString method should return, it will automatically return '[object Object]'


// const barry = createAnimal("acorns", "vines", "plastic", "purple", false, "Kangaroo")
// const jeff = createAnimal("grass", "bark", "giraffe", "teal", true, "Giraffe")

// const animals = [barry,jeff]

// forEach() holds a reference to the original array. If the function inside the forEach method makes any modifications to each element, it will make the change to the original array

// animals.forEach(animal => {
//   animal.color = `dark ${animal.color}`
// })
// console.log(animals)

// map() can also be used to iterate over an array, but it does not "mutate" the original array. This method generates a new array. Have to return something from the callback function in map()

// const evilAnimals = animals.map(animal => {
//   return {
//     material: {
//       stuffing: animal.material.stuffingMaterial,
//       fur: animal.material.furMaterial,
//       eyeball: animal.material.eyeballMaterial
//     },
//     color: `dark ${animal.color}`,
//     hasClothing: animal.hasClothing,
//     species: animal.species
//   }
// })
// console.log(evilAnimals)

// filter() returns a new array of elements that meet a specified condition
// const nakedAnimals = animals.filter(animal => !animal.hasClothing)
// console.log(nakedAnimals)

// find() returns the first element of the array that meets the specified condition

// some() checks to see if some of the elements in an array meet a specified condition and returns a boolean
// every() checks to see if all of the elements in an array meet a specified condition and returns a boolean

// reduce()
// sort()



// ------ Next Day In Class ------
// iterators
// foreach() - iterates the array and performs an action on each item in the array
// map() - iterates the array and returns a new array from the values

// filter() - iterates the array and returns a new array with values that meet the condition
// find() - iterates the array and returns the first item in the array that meets the condition or returns undefined.

// sorting
// sort()- iterates and sorts the array. The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down). 
// Sorts the values as strings in alphabetical and ascending order by default.
// Sort does not return a new array - it modifies the original array.

// Returns True or False
// every() -iterates the array and returns true if every item in the array meets the condition and false if it does not.
// some() -iterates the array and returns true if one item in the array meets the condition and false if it does not.
// includes()- iterates the array and returns true if the array includes a certain element and false if it does not.

// reduce - iterates the array and perform an action on each item in the array and reduces the array to a single value

const createAnimal = (
  stuffingMaterial,
  furMaterial,
  eyeballMaterial,
  color,
  hasClothing,
  species,
  price
) => {
  return {
    material: {
      stuffing: stuffingMaterial,
      fur: furMaterial,
      eyeball: eyeballMaterial
    },
    color: color,
    hasClothing: hasClothing,
    species: species,
    price: price
  }
}

const diggy = createAnimal(
  "cotton",
  "wool",
  "felt",
  "goldenrod",
  false,
  "Iguana",
  109
)

const sonic = createAnimal(
  "beans",
  "tortilla",
  "human",
  "fuschia",
  true,
  "Hedgehog",
  200
)

const barry = createAnimal(
  "acorns",
  "vines",
  "plastic",
  "purple",
  false,
  "Kangaroo",
  223
)

const truthy = createAnimal(
  "bees",
  "snakeskin",
  "coal",
  "green",
  true,
  "Honey Badger",
  49
)

const jeff = createAnimal(
  "grass",
  "bark",
  "giraffe",
  "teal",
  false,
  "Giraffe",
  1
)

const tom = createAnimal(
  "feathers",
  "peanut butter",
  "chocolate chips",
  "seadfoam green",
  false,
  "Duck",
  5
)

const animals = [tom, jeff, sonic, barry, truthy, diggy]
console.table(animals)

// if the hasClothing property value is true change it to false and if false change to true for each item in the array.
animals.forEach(animal => {
  animal.hasClothing = !animal.hasClothing
})

console.table(animals)

// return a new array of just colors called animalColors
const animalColors = animals.map(animal => animal.color)
console.table(animalColors)

// return a new array of just prices called animalPrices
const animalPrices = animals.map(animal => animal.price)
console.table(animalPrices)

// return a new array of animals where the price is over 100
const animalPricesOver100 = animals.filter(animal => animal.price > 100)
console.log(animalPricesOver100)

// return the animal that has coal for eyeballs.
const animalWithCoalEyeballs = animals.find(animal => animal.material.eyeball === "coal")
console.log(animalWithCoalEyeballs)

// sort animalColors alphabetically
animalColors.sort()
console.table(animalColors)
animalColors.reverse()                // reverse will take the array and reverse it (will not sort it from Z-A). Could do array.sort().reverse()
console.table(animalColors)


// sort the animalPrices
animalPrices.sort((a, b) => a - b)    // have to use a compare function when sorting numbers
console.table(animalPrices)

// return the sum of animalPrices
const animalSum = animalPrices.reduce((total,currentPrice) => total + currentPrice,0)
console.log(animalSum)

