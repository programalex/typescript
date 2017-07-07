class Constructor{
public  velocida:number ;
public modelo:string;
public color : string;
constructor(modelo:any=null){
    this.velocida=0;
    this.color="blanco";
    if (modelo == null){
    this.modelo="modelo del auto";
    }
    else{
    this.modelo = modelo;
    }
    
}

public getmodelo() {
        return this.modelo;
    }
    public setmodelo(modelo:string){
        this.modelo = modelo;
    }
    }
    var cocheconstructor = new Constructor("modelo del auto con parametro asignado");
    cocheconstructor.getmodelo();
    console.log("el modelo del carro es :" + cocheconstructor.getmodelo());