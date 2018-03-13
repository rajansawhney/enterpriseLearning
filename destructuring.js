// destructuring

// var animal = {
//     species : 'dog',
//     weight : 25,
//     sound: 'woof'
// }

// var { species, sound, foo } = animal;

// console.log('The ' + species + ' says ' + sound + '!\n and foo is:', null);

/* Why to use :
Common usecase : easier to deal with option objects
objects that you pass to functions - as single objects - that might or might not contain several properties 
*/

makeSound({
    species: 'dog',
    weight: 25,
    sound: 'woof'
})

// function makeSound(options) {
//     console.log('The ' + options.species + ' says ' + options.sound + '!')
// }

/* How */
function makeSound({species = 'animal', sound}) {
    console.log('The ' + species + ' says ' + sound + '!')
}