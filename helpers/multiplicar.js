const fs = require('fs');
const colors = require('colors');

//! Una función Async SIEMPRE devuelve un RETURN.
const crearArchivo = async(base = 5 , listar = false, hasta) => {
    try {

        let salida, consola = '';
        
        for (let index = 1; index <= hasta; index++) {
            salida += (`${base} X ${index} = ${base * index}\n`);
            consola += (`${base} ${'X'.green} ${index} ${'='.green} ${base * index}\n`);
        }

        if( listar ) {
            console.log("====================================".rainbow);
            console.log(`        TABLA DEL ${colors.cyan(base)}`.white);
            console.log(`   "Q de multiplicaciones: ${colors.cyan(hasta)}"`.white);
            console.log("====================================".rainbow);
            
            console.log(consola);
    
        }

        fs - fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        
        return `tabla-${base}.txt`;


    } catch (err) {
        throw err;
    }
}

//! Si fuese ES6 se exporta directo la funcion: export const crearArchivo
module.exports = {
    crearArchivo
}
