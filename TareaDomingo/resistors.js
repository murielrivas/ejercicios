// resistance:

function sumResitance(resistances) {
  let total = resistances.reduce((acc, resistance) => {
    return acc + Math.abs(resistance);
  }, 0);
  return total + " ohms";
}


console.log(sumResitance([-1, 5, 6, 3])); 

// secret society:
function secretName(names) {
    const firstLetters = names.map(name => name[0]);
    const sortedLetters = firstLetters.sort();
    const secret = sortedLetters.join('');
  
    return secret;
  }
  console.log(secretName(["Esperanza", "Franco", "Nia"])); 
  console.log(secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])); 
  console.log(secretName(['Harry', 'Ron', 'Hermione'])); 

//arrays of multiples: 
  function arrayMultiplos(number, length) {
    const multiples = []; 
  
    for (let i = 1; i <= length; i++) {
      multiples.push(number * i); 
    }
    return multiples; 
  }
  console.log(arrayMultiplos(2, 10)); 
console.log(arrayMultiplos(17, 6)); 

//user
const usuario = prompt("ingresa tu usuario:");
const edad = prompt("ingresa tu edad:");


const peliculaFav = prompt("Ingresa tu pelis favoritas:");
const moviesArray = peliculaFav.split(',');

console.log(`Username: ${usuario}`);
console.log(`Age: ${edad}`);
console.log("Peliculas Fav:");

moviesArray.forEach(movie => {
  console.log(`la pelicila ${movie.trim()} es de mis favoritas.`);
});

// Highest Number
let maxNumber = -Infinity;


for (let i = 1; i <= 10; i++) {
  let number = parseFloat(prompt(`Ingresa numero ${i}:`));

  if (number > maxNumber) {
    maxNumber = number;
  }
}

console.log(`el numero mas grande es: ${maxNumber}`);

//palindromo 

const input = prompt("ingresa un posible palindromo:");

const cleanInput = input.toLowerCase().replace(/[^a-z0-9]/g, "");

const reversedInput = cleanInput.split("").reverse().join("");

if (cleanInput === reversedInput) {
  console.log("Es palindromo!");
} else {
  console.log("no es un palindromo :-().");
}