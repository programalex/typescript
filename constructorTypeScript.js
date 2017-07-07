var Constructor = (function () {
    function Constructor(modelo) {
        if (modelo === void 0) { modelo = null; }
        this.velocida = 0;
        this.color = "blanco";
        if (modelo == null) {
            this.modelo = "modelo del auto";
        }
        else {
            this.modelo = modelo;
        }
    }
    Constructor.prototype.getmodelo = function () {
        return this.modelo;
    };
    Constructor.prototype.setmodelo = function (modelo) {
        this.modelo = modelo;
    };
    return Constructor;
}());
var cocheconstructor = new Constructor("modelo del auto con parametro asignado");
cocheconstructor.getmodelo();
console.log("el modelo del carro es :" + cocheconstructor.getmodelo());
