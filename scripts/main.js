// Stuffed animal factory function
// Factory functions should start with the word "create"

const animalContainer = document.querySelector("#container")

const render = (animalString) => {
  animalContainer.innerHTML += animalString
}

const createAnimal = (stuffingMaterial, furMaterial, eyeballMaterial, color, hasClothing, species) => {
  return {
    toString () {  // can write our own toString method on any object
      return `The ${this.color} ${this.species} filled with ${this.material.stuffing}` // have to use 'this' to refer to another property within the object
    },
    material: {
      stuffing: stuffingMaterial,
      fur: furMaterial,
      eyeball: eyeballMaterial
    },
    color: color,
    hasClothing: hasClothing,
    species: species
  }
}

const diggy = createAnimal("cotton", "wool", "felt", "goldenrod", false, "iguana")
// console.log(diggy.toString())

// render(diggy.toString()) 
// render(diggy)
// these two lines of code have the same result
// when you add an object to the DOM, javascript automatically invokes the toString method
// if you do not specify what the toString method should return, it will automatically return '[object Object]'


const barry = createAnimal("acorns", "vines", "plastic", "purple", false, "Kangaroo")
const jeff = createAnimal("grass", "bark", "giraffe", "teal", true, "Giraffe")

const animals = [barry,jeff]

// forEach() holds a reference to the original array. If the function inside the forEach method makes any modifications to each element, it will make the change to the original array

// animals.forEach(animal => {
//   animal.color = `dark ${animal.color}`
// })
// console.log(animals)

// map() can also be used to iterate over an array, but it does not "mutate" the original array. This method generates a new array. Have to return something from the callback function in map()

const evilAnimals = animals.map(animal => {
  return {
    material: {
      stuffing: animal.material.stuffingMaterial,
      fur: animal.material.furMaterial,
      eyeball: animal.material.eyeballMaterial
    },
    color: `dark ${animal.color}`,
    hasClothing: animal.hasClothing,
    species: animal.species
  }
})
console.log(evilAnimals)

// filter() returns a new array of elements that meet a specified condition
const nakedAnimals = animals.filter(animal => !animal.hasClothing)
console.log(nakedAnimals)

// find() returns the first element of the array that meets the specified condition

// some() checks to see if some of the elements in an array meet a specified condition and returns a boolean
// every() checks to see if all of the elements in an array meet a specified condition and returns a boolean

// reduce()
// sort()