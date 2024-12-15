// EJERCICIO 1

/* let meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
]

for (let i = 0; i < meses.length; i++) {
    document.write(`<li> ${meses[i]}</li>`)
    
    
} */

// ---------------------------------------------------------------------

// EJERCICIO 2

// OBTENGO LAS CUIDADES Y LAS ITERO CON UN DO WHILE

/* let cities = [];
let exit = true;

do {
    let city = prompt("Ingrese una ciudad o presione 0 para salir del ptrograma").trim();
    
    if(city === null || city === "0"){
        exit = false;
    } else if(city !== ""){
        cities.push(city);
        console.log(city);
    }

} while(exit)

console.log(cities)

document.write(`<p>El areglo de ciudades tiene ${cities.length +1} elementos </p>`)

document.write(`<ul>`)

if(cities.length >= 1){
    document.write(`<li> elemento en la primera posicion ${cities[0]} </li>`)

}   else {
    document.write("No existe un elemento en la primera posicion")
}

if(cities.length >= 3){
    document.write(`<li> elemento en la tercera posicion ${cities[2]} </li>`)

}   else {
    document.write("No existe un elemento en la tercera posicion")
}

if(cities.length >= 1){
    document.write(`<li> elemento en la ultima posicion ${cities[cities.length -1]} </li>`)

}   else {
    document.write("No existe un elemento en la ultima posicion")
}


document.write(`</ul>`)

cities.push('Paris')

if(cities.length >= 2){
    document.write(`<li> elemento en la segunda posicion ${cities[1]} </li>`)

}   else {
    document.write("No existe un elemento en la segunda posicion")
}


if(cities.length >= 1){
    cities[1] = 'Barcelona'
}

document.write(`<h1>Arreglos de ciudades</h1>`)
document.write(`<ol>`)

cities.forEach(city => {
    document.write(`<li>${city}</li>`)
})




document.write(`</ol>`) */

// -------------------------------------------------------------------

// EJERCICIO 3

/* let sumas = [];

for (let i = 0; i < 50; i++) {
    
    let dado1 = Math.floor(Math.random()*6)
    +1;
    let dado2 = Math.floor(Math.random()*6)
    +1;
    
    sumas.push(dado1 + dado2)

}

sumas.forEach((suma, index) => {
    console.log(`Tirada nº${index} || Suma:${suma}`)
})

let sumasUnicas = [];
let ocurrencias = [];

for (let i = 0; i < sumas.length; i++) {
    let suma = sumas[i];

    let index = sumasUnicas.indexOf(suma);
    
    if(index === -1){
        sumasUnicas.push(suma)
        ocurrencias.push(1)
    } else {
        ocurrencias[index]++
    }
}

document.write(`<br><br> Sumas unicas: ${sumasUnicas}`)
document.write(`<br> Ocurrencias por suma: ${ocurrencias}`)
 */

// --------------------------------------------------------------------------

// EJERCICIO 4

/* function esPar(numero){
    numero = parseInt(prompt("Ingresa un numero"))

    if((numero % 2) ===  0){
        document.write("El numero es Par")
    } else {
        document.write("El numero es impar")
    }
}

esPar(); */

// --------------------------------------------------------------------------

// EJERCICIO 5

/* function analizarTexto(texto) {
    if (texto === texto.toUpperCase()) {
        document.write("El texto esta formada solo por mayusculas");
    } else if (texto === texto.toLowerCase()) {
        document.write("El texto esta formada solo por minusculas");
    } else {
        document.write("El texto tiene una mezcla de mayusculas y minusculas");
    }
}

analizarTexto("Hola como estas") */

// --------------------------------------------------------------------------

// EJERCICIO 6

/* let num1 = parseInt(prompt("Ingrese el primer lado del rectangulo"))
let num2 = parseInt(prompt("Ingrese el segundo lado del rectangulo"))

function calcularPerimetro(){
    let p = 2 * (num1 + num2);
    return document.write(`El perimetro del rectangulo es de ${p}`)
        
    

}

calcularPerimetro(); */

// --------------------------------------------------------------------------

// EJERCICIO 7

/* function tablaMultiplicar(numero){

    // Validar numero
    if(isNaN(numero)){
        document.write(`<p>Ingresa un numero valido</p>`);
        return;
    }

    // Generar la tabla
    document.write(`
        <table border="1" cellpadding="5" cellspacing="0"> 
            <thead>
                <tr>
                    <th colspan="2">Tabla de multiplicar del numero ${numero}</th>
                </tr>
            </thead>
            <tbody>
    `)
        for (let i = 1; i <= 10; i++) {
            document.write(`
                <tr>
                    <td>${numero} * ${i}</td>
                    <td>${numero * i}</td>
                </tr>
                `)
        }

        document.write(`</tbody></table>`)

}

let number = parseInt(prompt("Ingrese un numero para mostrar la tabla de multiplicar"))

tablaMultiplicar(number); */