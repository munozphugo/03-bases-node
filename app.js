const { crearArchivoTexto } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');

// const [ , , arg3 = '--base=5' ] = process.argv;
// const  [ , base = 5 ] = arg3.split('=');

console.clear();

// console.log(argv);

// console.log('Base: ', argv.base);

crearArchivoTexto( argv.base, argv.limite, argv.mostrar )
  .then( respuesta => console.log( respuesta ) )
  .catch( err => console.log( err ) );