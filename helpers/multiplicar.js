const fs = require('fs');
const colors = require('colors');

const crearArchivoTexto = async( base = 5, limite = 10, listar ) => {
  try {
    console.log('============================================'.green);
    console.log('\t\tTabla del '.grey, colors.magenta( base ));
    console.log('============================================'.green);

    let salidaConsola = '';
    let salidaArchivo = '';
    
    for (let i = 1; i < limite+1; i++) {
      salidaConsola += `${ base } ${ 'x'.red } ${ i } ${ '='.blue } ${ base * i }\n`;
      salidaArchivo += `${ base } x ${ i } = ${ base * i }\n`;
    }

    if (listar) {
      console.log(salidaConsola);
    } 

    fs.writeFileSync( './salida/tabla-multiplicar.txt', salidaArchivo);

    return 'Archivo de texto creado correctamente!!!'.rainbow;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivoTexto
}