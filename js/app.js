// 1. Programa es par o impar

function esPar(num) { 
if(num % 2 === 0) { 
console.log("El numero "+num+" es par");
} else { 
    console.log("El numero "+num+" es impar");
}
}
console.log(esPar(4));
console.log(esPar(8));

// 2.  Programa que tome como parametro un numero e indique si es par o impar
var numero= 10;

if(numero%2==0){
    console.log("El numero "+numero+" es par");

}else{
    console.log("El numero "+numero+" es impar");
}

// 3. Array llamado Frutas

var Frutas = ["Banana", "Pera", "Manzana",]

console.log(Frutas[0]);
console.log(Frutas[1]);
console.log(Frutas[2]);

// 4. Crea una función llamada agregarFruta(fruta) que toma una fruta como parámetro y la agrega al array frutas. Llama a la función para agregar una nueva fruta al array y luego imprime el array actualizado utilizando console.log().var ultimoElemento = verdurasyFrutas[verdurasyFrutas.length-1]; /* ver el largo del array*/

function agregarFruta(Fruta){
    Frutas.push(Fruta);
}

agregarFruta("kiwi");
console.log(Frutas);

// Utiliza un bucle for para recorrer el array frutas generado en el punto 3 y utiliza console.log() para imprimir cada fruta en líneas separadas.

for (i = 0; i < Frutas.length; i++) {
    console.log(Frutas[i]);
}
// Crea una función que chequee la longitud del array creado en el punto 3 y muestre en la consola si la longitud es par o impar.
for (i = 0; i < Frutas.length; i++) {
    if(Frutas.length % 2 == 0){
        console.log("El array es par");
    }else{
        console.log("El array es impar");
    }
}