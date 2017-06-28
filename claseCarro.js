var Carro = (function () {
    function Carro() {
        this.velocidad = 2;
    }
    Carro.prototype.getColor = function () {
        return this.color;
    };
    Carro.prototype.setColor = function (color) {
        this.color = color;
    };
    Carro.prototype.acelerar = function () {
        this.velocidad++;
    };
    Carro.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    Carro.prototype.frenar = function () {
        this.velocidad--;
    };
    return Carro;
}());
var carro = new Carro();
var carroDos = new Carro();
var carroTres = new Carro();
carro.setColor("Rojo");
carro.acelerar();
carro.acelerar();
carro.acelerar();
carroDos.setColor("Azul");
carroTres.setColor("Verde");
console.log("el color del carro es :" + carro.getColor());
console.log("la velocidad es:" + carro.getVelocidad());
carro.frenar();
console.log("despues de frenar:" + carro.getVelocidad());
console.log("el color del carro es :" + carroDos.getColor());
console.log("el color del carro es :" + carroTres.getColor());
