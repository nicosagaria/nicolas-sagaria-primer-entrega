let ingresoSemanal = parseInt(prompt("Coloque su ingreso de esta semana"));
alert("Tu ingreso de esta semana es de " + ingresoSemanal);

let gastoComida = parseInt(prompt("¿Cuánto gastaste en comida esta semana?"));

let gastoTransporte = parseInt(prompt("¿Cuánto gastaste en tansporte esta semana?"));

let gastoOcio = parseInt(prompt("¿Cuánto gastaste en ocio esta semana?"));

let gastoImpuestos = parseInt(prompt("¿Cuánto gastaste en impuestos esta semana?"));


let gastoTotal = gastoComida + gastoTransporte + gastoOcio + gastoImpuestos;

alert("Tu gasto de esta semana es de $" + gastoTotal);

let balance = ingresoSemanal - gastoTotal;

alert("Tu balance es de $" + balance);

if (ingresoSemanal < gastoTotal) {
    alert("Estás requiriendo un contador");
} else {
    alert("Tenes $" + balance + " para gastar en lo que quieras");
}

/*
let cantidadDeGastos = parseInt(prompt("¿Cuántos gastos tuviste esta semana?"));

for (let cadaGasto = 1; cadaGasto <= cantidadDeGastos; cadaGasto++) {
    let sumaGastos = cadaGasto + 
}*/