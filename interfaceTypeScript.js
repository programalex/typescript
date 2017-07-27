var Carro = (function () {
    function Carro() {
    }
    Carro.prototype.getModelo = function () {
        return this.modelo;
    };
    Carro.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Carro.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    Carro.prototype.setVelocidad = function (velocidad) {
        this.velocidad = velocidad;
    };
    return Carro;
}());
var carro = new Carro();
carro.setModelo("este es el modelo del carro");
console.log();
console.log("el modelo del carro en consola es :" + carro.getModelo());
alert("el modelo del carro en un alert es:" + " " + carro.getModelo());
document.getElementById("txt").innerHTML = "El modelo del carro en un label es:" + " " + carro.getModelo();
