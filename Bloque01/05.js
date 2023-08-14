/*Mostrar todos los números enteros IMPARES que hay entre dos números introducidos por el usuario*/

/*Programa que muestre todos los números enteros que hay entre dos números introducidos por el usuario*/

let n1, n2;
let numbers = [];

do {
    n1 = prompt("Ingrese un número: ", 0);
    n2 = prompt("Ingrese otro número: ", 0);

    if (isNaN(n1) || isNaN(n2)) {
        alert("Debe ingresar solamente números");
    }

}while (isNaN(n1) || isNaN(n2));


n1 = parseInt(n1);
n2 = parseInt(n2);

let m = n1>n2 ? n2 : n1;
let M  = n1>n2 ? n1 : n2;

for(let i = m+1; i<M; i++){
    if(i%2!=0) numbers.push(i);
}

alert( `Los números impares entre ${n1} y ${n2} son: ${numbers}` );
