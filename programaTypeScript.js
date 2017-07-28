var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Programa = (function () {
    function Programa() {
    }
    Programa.prototype.getNombre = function () {
        return this.nombre;
    };
    Programa.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Programa.prototype.getVersion = function () {
        return this.version;
    };
    Programa.prototype.setVersion = function (version) {
        this.version = version;
    };
    return Programa;
}());
var editorPrograma = (function (_super) {
    __extends(editorPrograma, _super);
    function editorPrograma() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    editorPrograma.prototype.setTimeLine = function (timeline) {
        this.timeline = timeline;
    };
    editorPrograma.prototype.getTimeLine = function () {
        return this.timeline;
    };
    editorPrograma.prototype.getAllData = function () {
        return this.nombre + "-- " + this.version + " --" + this.timeline;
    };
    return editorPrograma;
}(Programa));
var editor = new editorPrograma();
editor.setNombre("Nombre del programa");
editor.setVersion("Version 1");
editor.setTimeLine(1000);
alert(editor.getAllData());
console.log(editor.getAllData());
