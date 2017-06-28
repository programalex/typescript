class Carro{
    public color: string;
    public modelo:string;
    public velocidad:number= 2;

    public getColor() {
        return this.color;
    }
    public setColor(color:string){
        this.color = color;
    }
    public acelerar  (){
        this.velocidad++;
    }
    public getVelocidad():number{
        return this.velocidad;
    }
    public frenar(){
        this.velocidad--;
    }
}
var carro = new Carro();
var carroDos = new Carro();
var carroTres = new Carro();

carro.setColor("Rojo");
carro.acelerar();
carro.acelerar();
carro.acelerar();
carroDos.setColor("Azul");
carroTres.setColor("Verde");
console.log("el color del carro es :"+carro.getColor());
console.log("la velocidad es:"+carro.getVelocidad());
carro.frenar();
console.log("despues de frenar:"+carro.getVelocidad());
console.log("el color del carro es :"+carroDos.getColor());
console.log("el color del carro es :"+carroTres.getColor());