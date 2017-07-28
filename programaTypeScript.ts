class Programa{
    public nombre:string;
    public version:string;

    getNombre(){
return this.nombre;
    }

    setNombre(nombre:string){
this.nombre = nombre;
    }
    getVersion(){
return this.version;
    }

    setVersion(version:string){
this.version = version;
    }
}
class editorPrograma extends Programa{
    public timeline:number;

setTimeLine(timeline:number){
    this.timeline = timeline;
}
    getTimeLine(){
        return this.timeline;
    }
    getAllData(){
        return this.nombre + "-- " + this.version + " --" + this.timeline;
    }
}
var editor = new editorPrograma();
editor.setNombre("Nombre del programa");
editor.setVersion("Version 1");
editor.setTimeLine(1000);

alert(editor.getAllData());
console.log(editor.getAllData());