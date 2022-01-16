const { Console } = require('console');
var readline = require('readline');
  
var rl = readline.createInterface(
     process.stdin, process.stdout);
//Ejercicio1
console.log("Ejercicio1")
 let N = rl.question('ingrese numero N', (N) => {
 console.time("time1");
 let vdivision = N/3;
 console.log(vdivision);
 console.timeEnd("time1");
//Ejercicio2
console.log("Ejercicio2")
console.time("time2");
let a = [];
for(var i=0; i<N; i++ ) {
    a.push(i);
}
a.map(numberElement=>console.log(numberElement)); 
console.log(a);
console.timeEnd("time2")
//Ejercicio3
console.log("Ejercicio3")

//Ejercicio3
console.log("Ejercicio3");
console.time("time3");
function productoria (numeros){
    let multiplicar = 1;
    let arraymult=[];
  for (let i = 1; i <= numeros.length; i++){
     multiplicar = multiplicar * numeros[i];
     arraymult.push(multiplicar);
  }
  console.log("tamaño array",arraymult.length);
  return multiplicar;
}
productoria(a);
console.timeEnd("time3");

//Ejercicio4
console.log("Ejercicio4")
console.time("time4");
let arrayAleatorio = [];
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
for(var i=1; i<=N; i++ ) {
   
    arrayAleatorio.push(getRandomInt(1,N));
}
//a.map(numberElement=>console.log(numberElement)); 
console.log(arrayAleatorio.length);
console.log(arrayAleatorio);
console.timeEnd("time4")

//Ejercicio5
console.log("Ejercicio5")
let arrayAleatorio1 = [];

for(var i=1; i<=N; i++ ) {
   
    arrayAleatorio1.push(getRandomInt(1,N));
}
console.time("time5");
let numeroEncontrado = false
console.log(numeroEncontrado);
for(var i=1; i<=arrayAleatorio1.length; i++ ) {
  
    if(arrayAleatorio1[i]===N-10){
              numeroEncontrado = true;
        return(N-10);
    }
    
}
numeroEncontrado?console.log( N-10 + "esta en el array"):console.log("no se ha encontrado"+ N-10 );
//a.map(numberElement=>console.log(numberElement)); 
console.log(arrayAleatorio1.length);
console.log(arrayAleatorio1);
console.timeEnd("time5")

//Ejercicio6


rl.close();
});

