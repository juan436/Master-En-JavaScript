/*Mostrar todos los números divisores de un número introducido*/
let n;
let divisores = [];

do{

    n = prompt("Ingrese un número: ", 1);

    if(isNaN(n)) alert("Debe ingresar solamente números");
    else if (n<=0) alert("Debe ingresar un número mayor a 0");
    

} while(isNaN(n) || n<=0);

n = parseInt(n);

for(let i=n; i>0; i--){

    if(n%i==0){ divisores.push(i);}

}

alert(`Los divisores de ${n} son: ${divisores}`);