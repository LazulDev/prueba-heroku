const { argv } = require('./config/yargs')
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

(async () => {
    const { base, limite } = argv;
    switch (argv._[0]) {
        case 'listar':
            listarTabla(base, limite)
            break;
        case 'crear':
            try {
                const data = await crearArchivo(base, limite)
                console.log('Archivo creado:', data)
            } catch (error) {
                console.log(error)
            }
            break;
        
        default:
            console.log('Comando no reconocido');
            break;
    }
    
    
})()

