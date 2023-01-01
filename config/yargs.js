const argv = require('yargs')
      .option('b', {
          alias: 'base',
          type: 'number',
          demandOption: true,
          describe: 'Es la base de la tabla de multiplicar.'
      })
      .option('l', {
          alias: 'listar',
          type: 'boolean',
          default: false,
          describe: 'Muestra la tabla en consola.'
      })
      .option('h', {
          alias: 'hasta',
          type: 'number',
          default: 10,
          describe: 'Cantidad de multiplicaciones.'
      })
      .check( (argv, options) => {
          console.log('yargs', argv)
          if (isNaN(argv.base)) {
              throw 'La base tiene que ser un número'
            }
            //! Si no hay error, SIEMPRE DEVOLVER TRUE
            return true;
        })
        .argv;
        
        //! exporto todo el argv
        //! es como si las lineas de códdigo estuviesen
        //! en el archivo donde se lo llama.
        module.exports = argv;