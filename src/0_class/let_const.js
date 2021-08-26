// que es el scope.
//El scope es el ámbito donde una variable o función puede existir
//El contexto donde la variable o la funcion
//se puede usar.
//---------------------------------------
// Bloque. Un bloque es una o mas sentencias que estan
//limitadas generalemente por {}

let foo = "Ironman";
if (true) {
  let foo = "spiderman";
  console.log(foo);
}
console.log(foo);
const thisIsaFunction = function () {
  console.log("Hola soy una funcion");
};
// thisIsaFunction = "hola";
// thisIsaFunction();
console.log(thisIsaFunction);
// const soyunaconstante = "Este valor no cambiara";
// soyunaconstante = "no puedo cambiaar";
// console.log(soyunaconstante);
