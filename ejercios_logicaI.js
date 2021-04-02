 //Obtén del 1 al 255: Escribe una función que devuelve un 
 //array con todos los números del 1 al 255.
 function octeto(){
     let arr=[];
     for(let i = 1; i <= 255; i++){
        arr.push(1);
     }
     return arr;
 }
    let resultado=octeto();
    console.log(resultado);
//Consigue pares hasta 1000: Escribe una función 
//que entregue la suma de todos los números pares del 1 al 1000 -
// Puedes usar un operador de módulo para este ejercicio. 
 function SumNroImpar(){
    var suma=0;
    for(let i = 1; i <= 1000; i ++){
        if(i % 2 == 0){
            suma = suma + i;
        } else{
            console.log("El número no es impar");
        }
    }
    return suma;
 }
 console.log(SumNroImpar);
 
//Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).

function SumaImpares(){
    var sum=0;
    for(let i = 1; i <= 5000; i ++){
        if(i % 2 == 0){
            sum = sum + i;
        } 
    }
    return sum;
 }
 console.log(SumaImpares);
//Itera un array: Escribe una función que devuelva la suma de todos 
//los valores dentro de un array (ej:  [1,2,5] retorna 8. [-5,2,5,12] 
//retorna 14). 
function valoresArra(nroArr){
    let sum = 0;
    for(var i = 0; i < nroArr.length; i ++){
        console.log(nroArr[i]);
    }
        return sum;
}
console.log(valoresArra(1,2,4));


//Encuentra el mayor (max): Dado un array con múltiples valores, 
//escribe una función que devuelva el número mayor 
//(ej: para [-3,3,5,7] el número mayor (max) es 7).
function NroMax(numArr){
    let max= numArr[0];
    for(let i = 0; i < numArr.length; i ++){
        if(numArr[i]> max){
            max = numArr[i];
        }
        return max;
    }
}
console.log(NroMax([-3,-5,-6,-2]));

//Encuentra el promedio (avg): Dado un array con múltiples valores,
// escribe una función que devuelva el promedio de los valores 
//(ej: para [1,3,5,7,20] el promedio es 7.2).

function findAvg(numoArr){
    let sum = 0;
    let avg = 0;
    for(let i = 0; i < numoArr.length; i ++){
       sum = sum + numoArr[i];
    }
    avg = sum / numoArr.length;
    return avg;
}
console.log(findAvg([1,3,5,7,20]));


//Array de impares: Escribe una función que devuelva un array de todos los números 
//impares entre 1 y 50 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.
function findNroImpares(){
    let arr = [];
    for(let j = 1; j < 50 ; j ++){
      arr.push(j);
    }
    return arr;
}
findNroImpares();
//Mayor que Y: Dado un valor Y, escribe una función que toma un array 
//y devuelve los valores mayores que Y. Por ejemplo, si arr = [1,3,5,7] 
//y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7).

function mayorQueY(arr, y){
    let contador = 0;
    for (let indicador = 0; indicador < arr.length; indicador++){ 
        if (arr[indicador] > y){   
            contador++;
        }
    }
    return contador;

//Cuadrados: Dado un array con múltiples valores, escribe una función que 
//reemplace cada valor por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]).
function cuadrado(arr){
    for (let indica = 0; indica < arr.length; indica++){
        arr[indica] = arr[indica]*arr[indica];
    }
}

//Negativos: Dado un array con múltiples valores, escribe una función que 
//reemplace cualquier número negativo dentro del array por 0. Cuando el programa esté listo,
// el array no debiera contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]).
function nroNegativo(arr){
    for (var nro = 0; indica < arr.length; nro++){
       
        if (arr[indica] < 0){
            arr[indica] = 0;
        }
    }
    console.log(arr);
}
//Max/Min/Avg: Dado un array con múltiples valores, escribe una función que 
//devuelva un nuevo array que solo contenga el valor mayor (max), menor (min) 
//y promedio (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).

function maxMinAvg(arr){
    var sum = 0;
    var max = arr[0];
    var min = arr[0];
    for (var idx = 0; idx < arr.length; idx++){
        sum = sum + arr[idx];
        if (arr[idx] > max){
            max = arr[idx];
        }
        else if (arr[idx] < min){
            min = arr[idx];
        }
    }
    var newArr = [];
    newArr.push(max);
    newArr.push(min);
    var avg = sum/arr.length
    newArr.push(avg);

    return newArr;
}


//Intercambia Valores: Escribe una función que intercambie el primer y el último valor
// de cualquier array. La extensión mínima predeterminada del array es 2 
//(ej: [1,5,10,-2] será [-2,5,10,1]). 


function valores(arr){
    var cambio = arr[arr.length-1];
    arr[arr.length-1] = arr[0];
    arr[0] = cambio;
}


//De Número a String: Escribe una función que tome un array de números y 
//reemplace cualquier valor negativo por el string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], 
//tu función devolverá [‘Dojo’,‘Dojo’,2].

function noNegativesDojo(arr){
    for (var idx = 0; idx < arr.length; idx++){
        // examine each value and see if it's negative.
        if (arr[idx] < 0){
            arr[idx] = "Dojo";
        }
    }
    console.log(arr);
}
}
