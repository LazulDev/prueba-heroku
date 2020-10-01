const opts = {
    base: {
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
                .command('listar', 'Imprime por consola la tabla de multiplicar', opts)
                .command('crear', 'Almacena la tabla de multiplicar en un archivo', opts)
                .demandOption(['base'], 'Proporciona la base con --base')
                .help()
                .argv


module.exports = {
    argv
}