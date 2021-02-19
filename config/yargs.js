const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    describe: 'Es la base de la tabla de multiplicar',
    demandOption: true
  })
  .option('s', {
    alias: 'mostrar',
    type: 'boolean',
    describe: 'Muestra la tabla en consola',
    default: false
  })
  .option('l', {
    alias: 'limite',
    type: 'number',
    describe: 'Límite hasta el cual se quiere la tabla de multiplicar'
  })
  .check( (argv, options) => {
    if ( isNaN( argv.b )) {
      throw 'El parámetro tiene que ser numérico';
    }
    return true;
  } )
  .argv;

  module.exports = argv;