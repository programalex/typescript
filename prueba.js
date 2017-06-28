function firstts(dato) {
    return "Hola mundo soy :" + dato;
}
var dato = "Alexander";
var resultado = firstts(dato);
var etiqueta = document.getElementById("contenido");
etiqueta.innerHTML = resultado;
//variables
/*
var nombredos:string = "un string";
var edad:any = 20;
var unarray : Array<string> = ["uno","dos"];
etiqueta.innerHTML = dato + "-" +nombredos;
*/
// varaiable let  y variable var 
/*
var a = 1;
var b = 2;
if  (a === 1){
    let a = 1.1;
    var b = 2.2;
console.log ("soy let:"+a+"soy  var :"+b);
};
console.log ("soy var:"+a+"soy var:"+b+"fuera del if");
 */
// funciones y tipado
/*
function devolverdato(num:number):string{
   return "Numero devuelto:"+num
}
alert ( devolverdato (1));
*/
/*
function devolverstring(texto:string):number{
    if(texto == "hola"){
var num = 10;
    }else{
var num = 20;
    }
    return num;
}
alert ( devolverstring ("hola"));
*/
/*
function devolverboolean(texto:string):boolean{
    if(texto == "hola"){
var num = true;
    }else{
var num = false;
    }
    return num;
}
alert ( devolverboolean ("hola"));
*/
