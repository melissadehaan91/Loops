let colors = ['yellow', 'blue', 'red', 'orange'];

colors.forEach(i => console.log(i));

// 1. while loop 6 en for loop 5
// 2. 3
// 3. array method stopt vanzelf als hij aan t einde komt, 
//    array method is t makkelijkst te lezen is geen formule/rekensom.
// 4. ja, zo ben je ook aan het itereren.
const object = { a: 1, b: 2, c: 3, d: 4, e: 5};

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
