// PRE-ENTREGA DEL PROYECTO FINAL

/*

Para hacer este programa me basé en la forma en la cual
se manejan en la empresa en la que trabajo para calcular los sueldos, 
sumando el sueldo base mas la comisión del total de las ventas que el empleado genera al mes.


º Si el empleado supera los 200000 del total de ventas, se le sumara un 25% al sueldo base.
º Si el empleado supera los 100000 pero no los 20000 del total de ventas, se le sumara un 10% al sueldo base.
º Si el empleado supera los 50000 del total de ventas, se le sumara un 2% al sueldo base.

*/

let arrayHistorial = []

class Calculador {
    constructor(
        antiguedad,
        mes,
        anio,
        importeVenta,
        sueldoBase,
        totalVenta,
        totalAcumulado
    ) {
        this.antiguedad = antiguedad;
        this.mes = mes;
        this.anio = anio;
        this.importeVenta = importeVenta
        this.sueldoBase = sueldoBase;
        this.totalVenta = totalVenta;
        this.totalAcumulado = totalAcumulado;
    }

}

function calcularSueldo() {

    let ingresaVenta = true;
    let importeVenta = 0;
    let totalVentas = 0;
    let totalAcumulado = 0;
    let sueldoBase = 0;

    sueldoBase = parseInt(prompt('Ingresar sueldo basico: '));
    
    while (ingresaVenta !== false) {
        importeVenta = parseInt(prompt('Ingrese importe $ venta: '));
        
        if (importeVenta !== 0) {
            // Total calculado de ventas.
            totalVentas = totalVentas + importeVenta

            ingresaVenta = confirm("¿Deseas ingresar una nueva venta? "); //Esto va a validar si aceptas ingresar una nueva venta, sino corta.
        } else {
            alert('¡El importe ingresado no puede ser 0 (cero)! ')
        }
    }

    if (totalVentas > 200000) {
        totalAcumulado = sueldoBase + ((totalVentas * 25) / 100)
    } else if (totalVentas >= 100000 && totalVentas < 200000) {
        totalAcumulado = sueldoBase + ((totalVentas * 10) / 100)
    } else if (totalVentas >= 50000 && totalVentas < 100000) {
        totalAcumulado = sueldoBase + ((totalVentas * 2) / 100)
    }

    imprimirImporte(totalAcumulado)

    // Esto inserta el total acumulado calculado en un array para luego mostrar como una especie de hsitorial de los calculados.
    arrayHistorial.push(totalAcumulado)

}

function imprimirImporte(totalAcumulado) {
    alert('El sueldo correspondiente a las ventas realizadas es de: $ ' + totalAcumulado)
}

function imprimirHistorial() {
    console.log("Sueldos calculados:" + arrayHistorial.slice(0,arrayHistorial.length))
}