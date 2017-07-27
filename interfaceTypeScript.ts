

interface Carrointerface{
getModelo():string;
getVelocidad():number;
}

class Carro implements Carrointerface {
public modelo:string;
public velocidad:number;
public getModelo():string{
    return this.modelo;
}
public setModelo(modelo:string){

    this.modelo = modelo;
}
public getVelocidad():number{
    return this.velocidad;
}
public setVelocidad(velocidad:number){
    this.velocidad = velocidad;
}

}
var carro = new Carro();
carro.setModelo("este es el modelo del carro");
console.log();
console.log("el modelo del carro en consola es :"+carro.getModelo());
alert("el modelo del carro en un alert es:"+" "+carro.getModelo());
document.getElementById("txt").innerHTML="El modelo del carro en un label es:" + " " + carro.getModelo() ;  