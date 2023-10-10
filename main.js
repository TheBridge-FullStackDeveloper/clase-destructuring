const personas = ["Juan", "Laura", "Patricia", "María", "Paula"];

// console.log(personas[2])
// console.log(personas[4])

const [, , , , p5] = personas;
// console.log(p5);

//* Destructuring objects

const Usuario = {
  nombre: "Javier",
  email: "javi@gmail.com",
  registrado: true,
  seguidores: ["Ger", "Gabriel", "Jorge", "Rebeca", "Xavi"],
};

// console.log(Usuario.email);
// // console.log(Usuario.registrado);
// console.log(Usuario["registrado"]);
// console.log(Usuario.seguidores[4]);

// const { nombre , registrado, edad=20, email:correo} = Usuario;
// console.log(correo)
const { seguidores } = Usuario;
const [, , , rebeca] = seguidores;
// console.log(rebeca)

const Pokemon = {
  count: 1126,
  next: "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20",
  previous: null,
  results: [
    {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/",
    },
    {
      name: "ivysaur",
      url: "https://pokeapi.co/api/v2/pokemon/2/",
    },
    {
      name: "venusaur",
      url: "https://pokeapi.co/api/v2/pokemon/3/",
    },
  ],
};

const { results } = Pokemon;
results.forEach((pokemon) => {
  const { name } = pokemon;
  //   console.log(name);
});
// console.log(results)

function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
// sum(...numbers)
const result = sum(...numbers);

// console.log(result);

const array1 = ["patata", "tomate", "lechuga"];
const array2 = [1, true, "chocolate"];

// const array3= ['patata', 'tomate', 'lechuga',1, true, 'chocolate']
const array3 = [...array1, ...array2]; //concatenar arrays

const objeto1 = {
  a: 10,
  b: "caracola",
};

const objeto2 = {
  a: true,
  d: "cocacola",
};
const objeto3 = { ...objeto1, ...objeto2 }; //mergear objetos
// console.log(objeto3)

const Usuario2 = {
  nombre: "Laura",
  email: "laura@gmail.com",
  edad: 31,
  registrado: false,
  seguidores: ["Ger", "Gabriel", "Angela"],
};

const { nombre, ...pepito } = Usuario2;
// console.log(pepito)

function listarArticulos(...articulos) {//aceptamos cualquiero numero de argumentos
  console.log(...articulos);
}

listarArticulos("Hola", 2, true, { a: 3, c: 17 }, [1, 2, 3, 4]);
listarArticulos("Tarjeta de credito", "Paragüas", "Mochila",1,2,3,5);
listarArticulos(2);
