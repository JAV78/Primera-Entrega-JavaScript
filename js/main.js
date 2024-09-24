const precioCerveza = 200;

let edad = parseInt(prompt("Ingrese su edad:"));
    alert("Valor de la cerveza $200")
    alert("Descuentos - 10 a 14 = 15%, 15 a 19 = 20% y más de 19 = 30%")

if (isNaN(edad) || edad <= 0) {    
    alert("Ingrese su edad en números");    

} else if (edad<18) {
    alert("Debes ser mayor de 17 años");
    
} else {
    let cantidad = parseInt(prompt("Cantidad de cervezas"));

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Ingresa cantidad de cervezas en números");
    } else {

        let totalCompra = precioCerveza * cantidad;
        let descuento = 0;

        if (cantidad>19) {
            descuento = 0.30;
        } else if (cantidad>14) {
            descuento = 0.20; 
        } else if (cantidad>9) {
            descuento = 0.15;  
        }

        if (descuento>0) {
            let montoDescuento = totalCompra * descuento;
            totalCompra = totalCompra - montoDescuento;
            alert(`Se ha aplicado un descuento del ${(descuento * 100)}%`);
        }

        alert(`Cantidad: ${cantidad} cervezas.`);
        alert(`Valor total: $${totalCompra.toFixed(2)}`);
    }
}
