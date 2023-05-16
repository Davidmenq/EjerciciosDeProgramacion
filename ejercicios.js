//EJERCICIOS DE JAVASCRIPT

// 1. Ejercicio de bucles:
// Escribe un bucle que imprima los números del 1 al 10 en la consola.
for (i = 1; i <= 10; i++) {
    console.log(i);
}


// 2. Ejercicio de condicionales:
// Escribe una función que tome un número como argumento y devuelva "Es par" si el número es par, y "Es impar" si el número es impar.
const esPar = num => {
    if (num % 2 === 0) {
        return "Es un número par";
    } else {
        return "Es un número impar";
    }
}
console.log(esPar(12));


// 3. Ejercicio de map:
// Dado un arreglo de números, utiliza el método `map` para crear un nuevo arreglo que contenga el cuadrado de cada número(sin usar Math.pow()).
let arregloEjercicio3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const cuadradoDelNumero = arregloEjercicio3.map(num => num ** 2);

console.log(cuadradoDelNumero);


// 4. Ejercicio de filter:
// Dado un arreglo de números, utiliza el método `filter` para crear un nuevo arreglo que contenga solo los números pares.
let arregloEjercicio4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const soloNumerosPares = arregloEjercicio4.filter(num => num % 2 === 0);

console.log(soloNumerosPares);


// 5. Ejercicio de reduce:
// Dado un arreglo de números, utiliza el método `reduce` para calcular la suma de todos los elementos del arreglo.
let arregloEjercicio5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumaDeTodosLosElementos = arregloEjercicio5.reduce((sumador, num) => sumador += num);

console.log(sumaDeTodosLosElementos);


// 6. Ejercicio combinado:
// Dado un arreglo de palabras, utiliza un bucle y condicionales para crear un nuevo arreglo que contenga solo las palabras que tienen más de 5 caracteres. Luego, utiliza el método `map` para convertir cada palabra en mayúsculas.
let palabrasEjercicio6 = ['hola', 'lunes', 'martes', 'miercoles', 'jueves'];
let nuevoArray = [];
for (i = 0; i < palabrasEjercicio6.length; i++) {
    if (palabrasEjercicio6[i].length > 5) {
        nuevoArray.push(palabrasEjercicio6[i]);
    }
}

const convertirMayusculas = nuevoArray.map(palabra => palabra.toUpperCase());
console.log(convertirMayusculas);


// 7. Ejercicio combinado:
// Dado un arreglo de objetos que representan productos, utiliza el método `filter` para crear un nuevo arreglo que contenga solo los productos que están en stock (es decir, aquellos cuya propiedad `stock` sea verdadera). Luego, utiliza el método `reduce` para calcular el precio total de todos los productos en stock.
const productos = [
    {
        producto: 'bicicleta',
        precio: 3000,
        stock: true
    },
    {
        producto: 'casco',
        precio: 250,
        stock: false
    },
    {
        producto: 'llanta',
        precio: 200,
        stock: true
    },
    {
        producto: 'llave hexagonal',
        precio: 80,
        stock: true
    },
]

const newProduct = productos.filter(item => item.stock === true);
//console.log(newProduct);

const sumaProductosEnStock = newProduct.reduce((sumador, num) => {
    return sumador += num.precio;
}, 0);
console.log(sumaProductosEnStock);


// 8. Ejercicio combinado:
// Dado un arreglo de nombres, utiliza el método `map` para crear un nuevo arreglo que contenga solo los nombres que comienzan con la letra "A". Luego, utiliza el método `reduce` para concatenar todos los nombres en una sola cadena separada por comas.
const arrayEjercicio8 = ['Antonio', 'Edwin', 'Alan', 'Javier', 'Sofia', 'Miguel', 'Anita'];
const newArrayE8 = arrayEjercicio8.map(nombre => (nombre[0] === 'A') ? nombre : ' ');
const arrayFiltrado = newArrayE8.filter(nombre => nombre !== ' ');

//console.log(newArrayE8);
console.log(arrayFiltrado.reduce((concatenar, nombre) => concatenar += `, ${nombre}`));


// 9. Ejercicio de bucles:
// Escribe un bucle que imprima los números del 10 al 1 en la consola, en orden descendente.
const conteoInverso = () => {
    let concatenar = '';
    for (let i = 10; i >= 1; i--) {
        concatenar += `numero ${i},`;
    }
    return concatenar;
}
console.log(conteoInverso());


// 10. Ejercicio de condicionales:
// Escribe una función que tome un número como argumento y devuelva "Positivo" si el número es mayor que 0, "Negativo" si el número es menor que 0, y "Cero" si el número es igual a 0.
const analizarNumero = (num) => (num > 0) ? 'Positivo' : (num < 0) ? 'Negativo' : 'Cero';

console.log(analizarNumero(-0.000005));


// 11. Ejercicio de map:
// Dado un arreglo de palabras, utiliza el método `map` para crear un nuevo arreglo que contenga la longitud de cada palabra.
let palabrasEjercicio11 = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];

const longitudDePalabras = palabrasEjercicio11.map(word => word.length);

console.log(longitudDePalabras);


// 12. Ejercicio de filter:
// Dado un arreglo de números, utiliza el método `filter` para crear un nuevo arreglo que contenga solo los números mayores que 5.
let arregloEjercicio12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const mayoresDeCinco = arregloEjercicio12.filter(num => num > 5);

console.log(mayoresDeCinco);


// 13. Ejercicio de reduce:
// Dado un arreglo de números, utiliza el método `reduce` para calcular el producto de todos los elementos del arreglo.
const arregloEjercicio13 = [2, 3, 2, 3, 1];
const productoNumeros = arregloEjercicio13.reduce((multiplicar, num) => {
    return multiplicar *= num;
}, 1);

console.log(productoNumeros);


// 14. Ejercicio combinado:
// Dado un arreglo de objetos que representan estudiantes, utiliza el método `filter` para crear un nuevo arreglo que contenga solo los estudiantes que tienen una calificación mayor o igual a 80. Luego, utiliza el método `map` para crear un nuevo arreglo que contenga solo los nombres de esos estudiantes.
const estudiantes = [
    {
        nombre: 'David',
        calificacion: 100,
    },
    {
        nombre: 'Miguel',
        calificacion: 80,
    },
    {
        nombre: 'Anita',
        calificacion: 85,
    },
    {
        nombre: 'Juan Carlos',
        calificacion: 30,
    }
]

const mayorDeOchenta = estudiantes.filter(estudiante => estudiante.calificacion >= 80);
const nombresEstudiantes = mayorDeOchenta.map(estudiante => (estudiante.nombre !== '') ? estudiante.nombre : '');

console.log(nombresEstudiantes);


// 15. Ejercicio combinado:
// Dado un arreglo de palabras, utiliza el método `filter` para crear un nuevo arreglo que contenga solo las palabras que contienen la letra "a". Luego, utiliza el método `map` para convertir cada palabra en minúsculas.
const palabrasEjercicio15 = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
const soloLetraA = palabrasEjercicio15.filter(word => word.includes('a') ? word : '');

const convertirMinusculas = soloLetraA.map(word => word.toLowerCase());
console.log(convertirMinusculas);


// 16. Ejercicio combinado:
// Dado un arreglo de objetos que representan libros, utiliza el método `filter` para crear un nuevo arreglo que contenga solo los libros cuyo autor sea "J.K. Rowling". Luego, utiliza el método `reduce` para calcular la suma de las páginas de todos los libros seleccionados.
const librosE16 = [
    {
        titulo: 'La larga marcha',
        autor: 'Stephen King',
        paginas: 385
    },
    {
        titulo: 'Una vacante imprevista',
        autor: 'J.K. Rowling',
        paginas: 400
    },
    {
        titulo: 'Anticandidatos',
        autor: 'Carlos Melendez',
        paginas: 250
    },
    {
        titulo: 'Harry Potter y la piedra filosofal',
        autor: 'J.K. Rowling',
        paginas: 700
    }
]

const libroPorAutor = (libros, escrito) => {
    return libros.filter((libro) => libro.autor == escrito);
}
const resultadoLibro = libroPorAutor(librosE16, 'J.K. Rowling')
//console.log(resultadoLibro);
const sumaPaginas = resultadoLibro.reduce((sumador, numPaginas) => {
    return sumador += numPaginas.paginas;
}, 0)

console.log(sumaPaginas);


// 17. Ejercicio de bucles:
// Escribe un bucle que imprima los números pares del 1 al 20 en la consola.
const unoAlVeinte = () => {
    let contadorE17 = 1;
    let concatenarE17 = '';
    do {
        concatenarE17 += `| ${contadorE17} |`;
        contadorE17++;
    } while (contadorE17 <= 20);
    return concatenarE17;
}

console.log(unoAlVeinte());


// 18. Ejercicio de condicionales:
// Escribe una función que tome una cadena como argumento y devuelva "Es una frase" si la cadena contiene espacios en blanco, y "Es una palabra" si la cadena no contiene espacios en blanco.
const evaluarCadena = cadena => (cadena.includes(' ') ? 'Es una frase' : 'Es una palabra');

console.log(evaluarCadena('Hola amigo'));


// 19. Ejercicio de map:
// Dado un arreglo de nombres, utiliza el método `map` para crear un nuevo arreglo que contenga solo los nombres en mayúsculas.
const arrayE19 = ['Antonio', 'EDWIN', 'Alan', 'Javier', 'SOFIA', 'Miguel', 'ANA'];

const palabrasMayusculas = arrayE19.map(
    word => (word === word.toUpperCase()) ? word : ''
);
const soloNombresMayusculas = palabrasMayusculas.filter(word => word!=='');
console.log(soloNombresMayusculas);


// 20. Ejercicio de filter:
// Dado un arreglo de números, utiliza el método `filter` para crear un nuevo arreglo que contenga solo los números impares.
const arregloE20 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosImpares = arregloE20.filter(num => (num%2 !== 0));
console.log(numerosImpares);


// 21. Ejercicio de reduce:
// Dado un arreglo de palabras, utiliza el método `reduce` para calcular la cantidad total de caracteres de todas las palabras en el arreglo.
const palabrasE21 = ['Lunes', 'Martes', 'Miercoles'];
const totalCaracteres = palabrasE21.reduce((sumador,word) =>{
    return sumador+=word.length;
},0);
console.log(totalCaracteres);


// 22. Ejercicio combinado:
// Dado un arreglo de objetos que representan productos, utiliza el método `filter` para crear un nuevo arreglo que contenga solo los productos cuyo precio sea mayor a $50. Luego, utiliza el método `map` para crear un nuevo arreglo que contenga solo los nombres de esos productos.
const productosE22 = [
    {
        producto: 'bicicleta',
        precio: 3000,
        stock: true
    },
    {
        producto: 'reflectante',
        precio: 10,
        stock: false
    },
    {
        producto: 'llanta',
        precio: 200,
        stock: true
    },
    {
        producto: 'llave hexagonal',
        precio: 50,
        stock: true
    }
]
const mayorDeCincuenta=productosE22.filter(producto=>producto.precio>50);
const nombresDeProductos= mayorDeCincuenta.map(name=>name.producto);
console.log(nombresDeProductos);


// 23. Ejercicio combinado:
// Dado un arreglo de números, utiliza el método `filter` para crear un nuevo arreglo que contenga solo los números que sean múltiplos de 3. Luego, utiliza el método `reduce` para calcular la suma de los números seleccionados.
const arregloE23 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multiplosDeTres = arregloE23.filter(num => num%3 === 0);
const sumaMultiplosDeTres= multiplosDeTres.reduce((sumador,num)=>{
    return sumador+=num;
},0);
console.log(sumaMultiplosDeTres);


// 24. Ejercicio combinado:
// Dado un arreglo de objetos que representan estudiantes, utiliza el método `filter` para crear un nuevo arreglo que contenga solo los estudiantes que tienen una calificación promedio mayor o igual a 90. Luego, utiliza el método `reduce` para calcular el promedio de las calificaciones de los estudiantes seleccionados.
const estudiantesE24 = [
    {
        nombre: 'David',
        calificacion1: 100,
        calificacion2: 96,
        calificacion3: 98
    },
    {
        nombre: 'Miguel',
        calificacion1: 60,
        calificacion2: 96,
        calificacion3: 50
    },
    {
        nombre: 'Anita',
        calificacion1: 70,
        calificacion2: 60,
        calificacion3: 80
    },
    {
        nombre: 'Juan Carlos',
        calificacion1: 90,
        calificacion2: 90,
        calificacion3: 90
    }
]

const mayorIgualDeNoventa = estudiantesE24.filter(estudiante => {
    return (estudiante.calificacion1+estudiante.calificacion2+estudiante.calificacion3)/3 >=90;
})
//console.log(mayorIgualDeNoventa);//filtrado estudiantes con promedio >=90

const promedioAlumno = mayorIgualDeNoventa.map(estudiante => {
    let calPromedio = (estudiante.calificacion1+estudiante.calificacion2+estudiante.calificacion3)/3;
    return {...estudiante, promedio: calPromedio};
})
//console.log(promedioAlumno); //agregar propiedad promedio

const promedioGrupo = (promedioAlumno.reduce((sumador,nota) =>{
    return sumador+=nota.promedio;
},0))/promedioAlumno.length;
//console.log(promedioAlumno.length); // calculo del promedio del grupo
console.log(promedioGrupo);


// 25. Ejercicio de bucles:
// Escribe un bucle que imprima la serie de Fibonacci hasta el décimo término. (La serie de Fibonacci comienza con 0 y 1, y cada término siguiente es la suma de los dos anteriores).
let contadorE25=1;
let fibonacciL=0;
let fibonacciH=1;
while (contadorE25 <= 10){
    fibonacciH=fibonacciH+fibonacciL;
    fibonacciL=fibonacciH-fibonacciL;
    console.log(fibonacciL);
    contadorE25++;
}


// 26. Ejercicio de condicionales:
// Escribe una función que tome una cadena como argumento y devuelva "Es un palíndromo" si la cadena es igual al revés, y "No es un palíndromo" si no lo es.
const palindromo = (cadena) => {
    let array =  cadena.split("");//cada caracter de la cadena como elemento de un array
    let arrayInverso = [];
    //eliminando caracteres innecesarios
    array = array.filter(caracter=> caracter !== ' ' && caracter !== '.' && caracter !== ',' && caracter !== ';');
            //console.log(array);
    //convirtiendo caracteres en mayusculas
    const arrayMayusculas = array.map((letra) => letra.toUpperCase());
            //console.log(arrayMayusculas);
    //invirtiendo  elementos del arrayMayusculas en arrayInverso
    for (i=0; i< arrayMayusculas.length; i++){
        arrayInverso.unshift(arrayMayusculas[i]);
    }
            //console.log(arrayInverso);
    //concatenando elementos para proceder con la comparacion
    let concatenarArrayMayusculas='';
    let concatenarArrayInverso='';
    
    for(i=0; i<arrayMayusculas.length; i++){
        concatenarArrayMayusculas+=arrayMayusculas[i];
    }

    for(i=0; i<arrayInverso.length; i++){
        concatenarArrayInverso+=arrayInverso[i];
    }
    //comparando cadenas y entregando respuesta
    if(concatenarArrayMayusculas === concatenarArrayInverso){
        console.log(`-"${cadena}" Es un palíndromo.`);
    }else{
        console.log(`-"${cadena}" No es un palíndromo.`);
    }
}

palindromo('Roma ni se conoce sin oro, ni se conoce sin amor');
palindromo('2A3*3a2');
palindromo('Ejercicio de map:');


// 27. Ejercicio de map:
// Dado un arreglo de números, utiliza el método `map` para crear un nuevo arreglo que contenga el doble de cada número.
const arregloE27 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const dobleDeCadaNumero = arregloE27.map(num => num*2);
console.log(dobleDeCadaNumero);


// 28. Ejercicio de filter:
// Dado un arreglo de palabras, utiliza el método `filter` para crear un nuevo arreglo que contenga solo las palabras que tengan más de 4 caracteres.
const palabrasE28 = ['sal', 'cena', 'Lapiz', 'vino', 'montaña', 'luna'];
const masDeCuatroCaracteres = palabrasE28.filter(word => word.length>4);
console.log(masDeCuatroCaracteres);


// 29. Ejercicio de reduce:
// Dado un arreglo de números, utiliza el método `reduce` para calcular el producto de los números pares.
const arregloE29 = [1, 2, 3, 4, 5, 6, 7, 8];
const productoPares = arregloE29.reduce((multiplicador,num) =>{
    let par=num%2;
    if(par===0){
        multiplicador*=num;
    }
    return multiplicador;
},1)
console.log(productoPares);


// 30. Ejercicio combinado:
// Dado un arreglo de objetos que representan empleados, utiliza el método `filter` para crear un nuevo arreglo que contenga solo los empleados con un salario mayor a $5000. Luego, utiliza el método `map` para crear un nuevo arreglo que contenga solo los nombres de los empleados seleccionados.
const empleados = [
    {
        nombre: 'David',
        salario: 2000
    },
    {
        nombre: 'Miguel',
        salario: 10000
    },
    {
        nombre: 'Anita',
        salario: 50001
    },
    {
        nombre: 'Juan Carlos',
        salario: 4999.20
    }
]
const mayorDeCincoMil = empleados.filter(sueldo => sueldo.salario > 5000);
const empleadosImportantes = mayorDeCincoMil.map(empleado => empleado.nombre);
console.log(empleadosImportantes);


// 31. Ejercicio combinado:
// Dado un arreglo de números, utiliza el método `filter` para crear un nuevo arreglo que contenga solo los números que sean divisibles por 5 y mayores a 10. Luego, utiliza el método `reduce` para calcular la suma de los números seleccionados.
const arregloE31 = [1, 20, 3, 45, 5, 60, 7, 10];
const divisiblesPorCinco = arregloE31.filter(num => num%5 === 0 && num > 10);
const sumaDeElementos = divisiblesPorCinco.reduce((sumador, num) => {
    return sumador+=num;
},0);
console.log(sumaDeElementos);


// 32. Ejercicio combinado:
// Dado un arreglo de objetos que representan productos, utiliza el método `filter` para crear un nuevo arreglo que contenga solo los productos en stock con un precio menor a $100. Luego, utiliza el método `reduce` para calcular el precio total de los productos seleccionados.
const productosE32 = [
    {
        producto: 'bicicleta',
        precio: 3000,
        stock: true
    },
    {
        producto: 'reflectante',
        precio: 10,
        stock: false
    },
    {
        producto: 'Gel',
        precio: 9.60,
        stock: true
    },
    {
        producto: 'llave hexagonal',
        precio: 50,
        stock: true
    }
]
const enStockPrecioMenorDeCien = productosE32.filter(item => item.stock === true && item.precio<100);
const precioTotalSeleccionados =enStockPrecioMenorDeCien.reduce((sumador, precio) => {
    return sumador+=precio.precio;
},0);
console.log(`-Precio total: $${precioTotalSeleccionados} dólares`);


// 33. Ejercicio de bucles:
// Escribe un bucle que imprima los números impares del 1 al 50 en la consola.
let numerosImparesE33=1;
    // for (let i=1; i<=50; i++){
    //     if(i%2 !== 0){
    //         numerosImparesE33+=`| ${i} `;
    //     }
    // }

let contadorE33 = 1;
do {
    if(contadorE33%2 !== 0){
        numerosImparesE33 += `| ${contadorE33+2} `;
    }
    contadorE33++;
}while(contadorE33 < 49);

console.log(numerosImparesE33);


// 34. Ejercicio de condicionales:
// Escribe una función que tome dos números como argumentos y devuelva el mayor de los dos.





// 35. Ejercicio de map:
// Dado un arreglo de palabras, utiliza el método `map` para crear un nuevo arreglo que contenga la primera letra de cada palabra.
// 36. Ejercicio de filter:
// Dado un arreglo de números, utiliza el método `filter` para crear un nuevo arreglo que contenga solo los números divisibles por 3.
// 37. Ejercicio de reduce:
// Dado un arreglo de palabras, utiliza el método `reduce` para concatenar todas las palabras en una sola cadena.
// 38. Ejercicio combinado:
// Dado un arreglo de objetos que representan estudiantes, utiliza el método `filter` para crear un nuevo arreglo que contenga solo los estudiantes que tienen una calificación mayor a 90. Luego, utiliza el método `map` para crear un nuevo arreglo que contenga solo los nombres y calificaciones de esos estudiantes.
// 39. Ejercicio combinado:
// Dado un arreglo de números, utiliza el método `filter` para crear un nuevo arreglo que contenga solo los números positivos. Luego, utiliza el método `reduce` para calcular la suma de los números seleccionados.
// 40. Ejercicio combinado:
// Dado un arreglo de objetos que representan productos, utiliza el método `filter` para crear un nuevo arreglo que contenga solo los productos con un precio mayor a $50. Luego, utiliza el método `reduce` para calcular el promedio de los precios de los productos seleccionados.
// 41. Ejercicio de funciones:
// Crea una función llamada `saludar` que tome un nombre como argumento y devuelva un mensaje de saludo, por ejemplo: "¡Hola, [nombre]!"
// 42. Ejercicio de funciones flecha:
// Convierte la función `saludar` en una función flecha.
// 43. Ejercicio de funciones anónimas:
// Crea una función anónima que tome dos números como argumentos y devuelva su suma.
// 44. Ejercicio de funciones:
// Crea una función llamada `calcularPromedio` que tome un arreglo de números como argumento y devuelva el promedio de esos números.
// 45. Ejercicio de funciones flecha:
// Convierte la función `calcularPromedio` en una función flecha.
// 46. Ejercicio de funciones anónimas:
// Crea una función anónima que tome un arreglo de palabras como argumento y devuelva un nuevo arreglo con la longitud de cada palabra.
// 47. Ejercicio de funciones:
// Crea una función llamada `esPar` que tome un número como argumento y devuelva `true` si el número es par, y `false` si no lo es.
// 48. Ejercicio de funciones flecha:
// Convierte la función `esPar` en una función flecha.
// 49. Ejercicio de funciones anónimas:
// Crea una función anónima que tome un arreglo de números como argumento y devuelva un nuevo arreglo con solo los números pares.
// 50. Ejercicio de funciones:
// Crea una función llamada `convertirAMayusculas` que tome una cadena como argumento y devuelva la cadena en mayúsculas.
// 51. Ejercicio de funciones:
// Crea una función llamada `sumar` que tome dos números como argumentos y devuelva la suma de esos números.
// 52. Ejercicio de funciones flecha:
// Convierte la función `sumar` en una función flecha.
// 53. Ejercicio de funciones anónimas:
// Crea una función anónima que tome un arreglo de números como argumento y devuelva la suma de todos los elementos del arreglo.
// 54. Ejercicio de funciones:
// Crea una función llamada `esPalindromo` que tome una cadena como argumento y devuelva `true` si la cadena es un palíndromo (se lee igual de izquierda a derecha que de derecha a izquierda), y `false` si no lo es.
// 55. Ejercicio de funciones flecha:
// Convierte la función `esPalindromo` en una función flecha.
// 56. Ejercicio de funciones anónimas:
// Crea una función anónima que tome un arreglo de palabras como argumento y devuelva un nuevo arreglo con solo las palabras que sean palíndromos.
// 57. Ejercicio de funciones:
// Crea una función llamada `duplicarElementos` que tome un arreglo como argumento y devuelva un nuevo arreglo con los elementos duplicados.
// 58. Ejercicio de funciones flecha:
// Convierte la función `duplicarElementos` en una función flecha.
// 59. Ejercicio de funciones anónimas:
// Crea una función anónima que tome un arreglo de números como argumento y devuelva un nuevo arreglo con solo los números mayores a 10.
// 60. Ejercicio de funciones:
// Crea una función llamada `invertirCadena` que tome una cadena como argumento y devuelva la cadena invertida.
// 61. Ejercicio de funciones:
// Crea una función llamada `calcularFactorial` que tome un número como argumento y devuelva el factorial de ese número.
// 62. Ejercicio de funciones flecha:
// Convierte la función `calcularFactorial` en una función flecha.
// 63. Ejercicio de funciones anónimas:
// Crea una función anónima que tome un arreglo de números como argumento y devuelva el número más grande del arreglo.
// 64. Ejercicio de funciones:
// Crea una función llamada `convertirAMinusculas` que tome una cadena como argumento y devuelva la cadena en minúsculas.
// 65. Ejercicio de funciones flecha:
// Convierte la función `convertirAMinusculas` en una función flecha.
// 66. Ejercicio de funciones anónimas:
// Crea una función anónima que tome un arreglo de palabras como argumento y devuelva un nuevo arreglo con solo las palabras que empiecen con la letra 'a'.
// 67. Ejercicio de funciones:
// Crea una función llamada `obtenerLongitudPromedio` que tome un arreglo de palabras como argumento y devuelva la longitud promedio de las palabras en el arreglo.
// 68. Ejercicio de funciones flecha:
// Convierte la función `obtenerLongitudPromedio` en una función flecha.
// 69. Ejercicio de funciones anónimas:
// Crea una función anónima que tome un arreglo de números como argumento y devuelva la suma de los números impares.
// 70. Ejercicio de funciones:
// Crea una función llamada `contarVocales` que tome una cadena como argumento y devuelva la cantidad de vocales que contiene.
// 71. Ejercicio de funciones:
// Crea una función llamada `esPrimo` que tome un número como argumento y devuelva `true` si es un número primo y `false` si no lo es.
// 72. Ejercicio de funciones flecha:
// Convierte la función `esPrimo` en una función flecha.
// 73. Ejercicio de funciones anónimas:
// Crea una función anónima que tome un arreglo de palabras como argumento y devuelva un nuevo arreglo con las palabras ordenadas alfabéticamente.
// 74. Ejercicio de funciones:
// Crea una función llamada `filtrarPositivos` que tome un arreglo de números como argumento y devuelva un nuevo arreglo con solo los números positivos.
// 75. Ejercicio de funciones flecha:
// Convierte la función `filtrarPositivos` en una función flecha.
// 76. Ejercicio de funciones anónimas:
// Crea una función anónima que tome un arreglo de objetos como argumento y devuelva un nuevo arreglo con solo los objetos que tengan una propiedad `edad` mayor a 18.
// 77. Ejercicio de funciones:
// Crea una función llamada `obtenerPromedioPares` que tome un arreglo de números como argumento y devuelva el promedio de los números pares en el arreglo.
// 78. Ejercicio de funciones flecha:
// Convierte la función `obtenerPromedioPares` en una función flecha.
// 79. Ejercicio de funciones anónimas:
// Crea una función anónima que tome un arreglo de palabras como argumento y devuelva un nuevo arreglo con solo las palabras que contengan la letra 'e'.
// 80. Ejercicio de funciones:
// Crea una función llamada `multiplicarElementos` que tome un arreglo como argumento y devuelva el resultado de multiplicar todos los elementos del arreglo.
// 81. Ejercicio de funciones:
// Crea una función llamada `esSubstring` que tome dos cadenas como argumento y devuelva `true` si la segunda cadena es un subconjunto de la primera cadena y `false` si no lo es.
// 82. Ejercicio de funciones flecha:
// Convierte la función `esSubstring` en una función flecha.
// 83. Ejercicio de funciones anónimas:
// Crea una función anónima que tome un arreglo de números como argumento y devuelva la diferencia entre el número más grande y el número más pequeño.
// 84. Ejercicio de funciones:
// Crea una función llamada `convertirAObjeto` que tome un arreglo de pares clave-valor como argumento y devuelva un objeto donde las claves sean las primeras componentes de los pares y los valores sean las segundas componentes.
// 85. Ejercicio de funciones flecha:
// Convierte la función `convertirAObjeto` en una función flecha.
// 86. Ejercicio de funciones anónimas:
// Crea una función anónima que tome un arreglo de números como argumento y devuelva un nuevo arreglo con solo los números que sean divisibles tanto por 3 como por 5.
// 87. Ejercicio de funciones:
// Crea una función llamada `calcularPotencia` que tome dos números como argumento: la base y el exponente, y devuelva el resultado de elevar la base al exponente.
// 88. Ejercicio de funciones flecha:
// Convierte la función `calcularPotencia` en una función flecha.
// 89. Ejercicio de funciones anónimas:
// Crea una función anónima que tome un arreglo de objetos como argumento y devuelva un nuevo arreglo con solo los objetos que tengan una propiedad `precio` mayor a 100.
// 90. Ejercicio de funciones:
// Crea una función llamada `contarCaracter` que tome una cadena y un carácter como argumentos, y devuelva la cantidad de veces que aparece ese carácter en la cadena.
console.log(`
-----------
Siete soluciones del ejercicio 90
------------`)

const contarCaracter = (cadena, caracter) => {
    let contadorDeCaracteres = 0;
    let arrayCaracteres = cadena.split("");
    for (i = 0; i < arrayCaracteres.length; i++) {
        if (arrayCaracteres[i] === caracter) {
            contadorDeCaracteres++;
        }
    }
    return contadorDeCaracteres;
}

console.log(contarCaracter('Hay un gatito original en la casa de sofia ', 'o'));

function contarCaracter2(cadena, caracter) {
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i].includes(caracter)) {
            contador++;
        }
    }
    return contador;
}

console.log(contarCaracter2('Hay un gatito en la casa', 'n'));

function contarCaracter3(cadena, caracter) {
    const regex = new RegExp(caracter, 'g');
    const matches = cadena.match(regex);
    return matches ? matches.length : 0;
}
console.log(contarCaracter3('Hay un gatito en la casa', 'n'));

function contarCaracter4(cadena, caracter) {
    let contador = 0;
    let indice = cadena.search(caracter);
    while (indice !== -1) {
        contador++;
        indice = cadena.indexOf(caracter, indice + 1);
    }
    return contador;
}
console.log(contarCaracter4('Hay un gatito en la casa', 'n'));

function contarCaracter5(cadena, caracter) {
    let contador = 0;
    let indice = cadena.indexOf(caracter);

    while (indice !== -1) {
        contador++;
        indice = cadena.indexOf(caracter, indice + 1);
    }

    return contador;
}
console.log(contarCaracter5('Hay un gatito en la casa', 'n'));

function contarCaracter6(cadena, caracter) {
    let contador = 0;

    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === caracter) {
            contador++;
        }
    }

    return contador;
}
console.log(contarCaracter6('Hay un gatito en la casa', 'a'));

function contarCaracter7(cadena, caracter) {
    let caracteres = cadena.split(caracter);
    return caracteres.length - 1;
}
console.log(contarCaracter7(' Hay un gatito en la casa ', ' '));





// ### Ejercicios (similares a proyecto euler)

// 1. Ejercicio similar al Project Euler #1:
// Encuentra la suma de todos los números naturales múltiplos de 3 o 5 por debajo de 1000.
// 2. Ejercicio similar al Project Euler #6:
// Encuentra la diferencia entre la suma de los cuadrados de los primeros 100 números naturales y el cuadrado de la suma.
// 3. Ejercicio similar al Project Euler #7:
// Encuentra el número primo en la posición 10001.
// 4. Ejercicio similar al Project Euler #9:
// Encuentra el producto de la terna pitagórica especial, es decir, la terna de números naturales a, b y c tal que a^2 + b^2 = c^2 y a + b + c = 1000.
// 5. Ejercicio similar al Project Euler #14:
// Encuentra el número bajo un millón que produce la secuencia más larga de la conjetura de Collatz.
// 6. Ejercicio similar al Project Euler #16:
// Calcula la suma de los dígitos del número 2^1000.
// 7. Ejercicio similar al Project Euler #22:
// Dado un archivo de nombres, ordénalos alfabéticamente y calcula la suma de los valores de las posiciones de cada nombre multiplicado por su posición en la lista.
// 8. Ejercicio similar al Project Euler #5:
// Encuentra el número positivo más pequeño que es divisible por todos los números del 1 al 20.
// 9. Ejercicio similar al Project Euler #10:
// Encuentra la suma de todos los números primos por debajo de 2 millones.
// 10. Ejercicio similar al Project Euler #12:
// Encuentra el primer número triangular que tiene más de 500 divisores.
// 11. Ejercicio similar al Project Euler #13:
// Encuentra los primeros 10 dígitos de la suma de los 100 números de 50 dígitos.
// 12. Ejercicio similar al Project Euler #17:
// Encuentra la cantidad de letras utilizadas al escribir los números del 1 al 1000 en palabras (sin espacios ni guiones).
// 13. Ejercicio similar al Project Euler #25:
// Encuentra el índice del primer término de la secuencia de Fibonacci que contiene 1000 dígitos.
// 14. Ejercicio similar al Project Euler #30:
// Encuentra la suma de todos los números que pueden ser escritos como la suma de sus dígitos elevados a la quinta potencia.
// 15. Ejercicio similar al Project Euler #67:
// Dado un triángulo de números, encuentra la ruta que produce la suma máxima al recorrer el triángulo de arriba a abajo.
// 16. Ejercicio similar al Project Euler #92:
// Encuentra la cantidad de números partiendo desde 1 hasta 10,000,000 cuya secuencia de sumas de los cuadrados de sus dígitos eventualmente llega a 89.
// 17. Ejercicio similar al Project Euler #97:
// Encuentra los últimos diez dígitos del número primo grande 28433 * 2^7830457 + 1.
// 18. Ejercicio similar al Project Euler #206:
// Encuentra el número positivo que tiene la forma 1_2_3_4_5_6_7_8_9_0, donde los espacios en blanco pueden ser llenados por dígitos, y el número completo es un cuadrado perfecto.
// 19. Ejercicio similar al Project Euler #357:
// Encuentra la suma de todos los números positivos n tal que n + sigma(n) es primo, donde sigma(n) es la suma de los divisores positivos de n.
// 20. Implementa una función `concatenarCadenas` que tome un número indeterminado de cadenas como argumentos y retorne una única cadena que las concatene.
// 21. Implementa una función `unirObjetos` que tome un número indeterminado de objetos como argumentos y retorne un nuevo objeto con las propiedades de todos los objetos combinados.
// 22. Implementa una función `obtenerMayores` que tome un número indeterminado de argumentos numéricos y retorne un nuevo arreglo con los números mayores que 10.
// 23. Implementa una función `obtenerPares` que tome un número indeterminado de argumentos numéricos y retorne un nuevo arreglo con los números pares.
// 24. Implementa una función `sumarArreglos` que tome un número indeterminado de arreglos numéricos como argumentos y retorne un nuevo arreglo con la suma de los elementos correspondientes en cada arreglo.
// 25. Implementa una función `obtenerPromedio` que tome un número indeterminado de argumentos numéricos y retorne el promedio de todos los números.
// 26. Implementa una función `clonarObjeto` que tome un objeto como argumento y retorne una copia profunda del objeto utilizando el operador `spread` en cada nivel de profundidad.
// 27. Implementa una función `intercalarArreglos` que tome un número indeterminado de arreglos como argumentos y retorne un nuevo arreglo que contenga los elementos intercalados de todos los arreglos.
// 28. Implementa una función `obtenerImpares` que tome un número indeterminado de argumentos numéricos y retorne un nuevo arreglo con los números impares.
// 29. Implementa una función `invertirObjeto` que tome un objeto como argumento y retorne un nuevo objeto donde las propiedades y valores estén invertidos.
// 30. Implementa una función `eliminarDuplicados` que tome un número indeterminado de argumentos y retorne un nuevo arreglo sin elementos duplicados.
// 31. Implementa una función `juntarPropiedades` que tome un número indeterminado de objetos como argumentos y retorne un nuevo objeto con todas las propiedades juntas en un solo nivel.
// 32. Implementa una función `multiplicarMatrices` que tome dos arreglos bidimensionales como argumentos y retorne el resultado de multiplicar las matrices.
// 33. Implementa una función `mezclarObjetos` que tome un número indeterminado de objetos como argumentos y retorne un nuevo objeto con todas las propiedades de los objetos originales.
// 34. Implementa una función `eliminarElementos` que tome un número indeterminado de argumentos y retorne un nuevo arreglo sin los elementos duplicados.