/*

1. Pedir 6 números por pantalla y meterlos a un array
2. Mostrar el array entero en el cuerpo de la página y en la consola
3. Ordenar el Array y Mostrarlo en cuerpo de la página y consola
4. Invertir su order y mostrarlo...
5. Mostrar cantidad de elementos del array
6. Busqueda de un valor introducido por el usuario dentro del array, que diga si está en el array y su posición

(Usar funciones)

*/

let arr = [];

// PASO 1
for(let i=0; i<6; i++){
    arr.push(pedirNumero("Ingrese un número", i));
}

// PASO 2

mostrarConsola(arr, "Array Original");
mostrarHTML(arr, "Array Original");

//PASO 3

arr = arr.sort();

mostrarConsola(arr, "Array Ordenado Alfabeticamente");
mostrarHTML(arr, "Array Ordenado Alfabeticamente");

arr = arr.sort(function(a, b){return a-b});

mostrarConsola(arr, "Array Ordenado Numericamente");
mostrarHTML(arr, "Array Ordenado Numericamente");

//PASO 4

arr = arr.reverse();

mostrarConsola(arr, "Array Invertido");
mostrarHTML(arr, "Array Invertido");

//PASO 5

mostrarConsola(arr.length, "Cantidad de elementos del array");
mostrarHTML(arr.length, "Cantidad de elementos del array");

//PASO 6

let n = pedirNumero("Ingrese el número a buscar");
let resultado = buscarNumero(arr, n);
mostrarConsola(resultado, `Buscando el número ${n} en el array...`);
mostrarHTML(resultado, `Buscando el número ${n} en el array...`);



/*FUNCIONES*/

function pedirNumero(msj, i=-1){
    let n;
    do{
       n = prompt(`${i>-1 ? i+1 : ""}- ${msj}: `, 0);
       if(isNaN(n)){
           alert("Debe ingresar solamente números");
       }
    }while (isNaN(n));

    return parseInt(n);
}

function mostrarHTML(x, titulo){
    document.write(`<h1>${titulo}</h1>`);
    document.write(`<p>${x}</p>`);
}

function mostrarConsola(x, titulo){
    console.log(titulo);
    console.log(x);
}

function buscarNumero(arr, n){

    for(let i=0; i<arr.length; i++){
        if(arr[i]==n){
            return `El número ${n} se encuentra en la posición ${i+1}`;
        }
    }

    return `El número ${n} no se encuentra en el array`;
}