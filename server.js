const FS = require('fs');
//const EXPRESS = require('express');

/*FS.appendFile('ejemplo.txt','Soy un documento', function(error){
    if (error) console.log("No Puedo Guardar Nada");
    console.log("Me he Creado con Exito");


});*/

console.log("Voy a Leer el Archivo");

//let lectura = FS.readFileSync('ejemplo.txt','utf8')
FS.readFile('ejemplo.txt','utf8',function(err,data){
    if(err) console.log("Error al Leer");
    console.log(data);
})
//console.log(lectura);
console.log("Terminie de Leer el Archivo");