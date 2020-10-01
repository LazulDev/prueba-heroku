const fs = require('fs');


const crearArchivo = (base, limite = 10) => {
    return new Promise( (resolve, reject) => {

        if (!Number(base)) {
            // Return para que no se siga ejecutando
            reject(`${base} no es un número`)
            return 
        }

        let print = ''
        for (let i = 0; i <= limite; i++) {
            print += `${ base } * ${ i } = ${ base * i }\n`
        }
        const fileName = `tabla-${base}.txt`
        fs.writeFile(`tablas/${fileName}`, print, (err) => {
            if (err) reject(err)
            else
                resolve(fileName)
        });
        
    })
}

const listarTabla = (base, limite = 10) => {
    if (!Number(base)) {
        // Return para que no se siga ejecutando
        throw Error(`${base} no es un número`)
    }

    let print = ''
    for (let i = 0; i <= limite; i++) {
        print += `${ base } * ${ i } = ${ base * i }\n`
    }
    console.log(print)

}

module.exports = {
    crearArchivo,
    listarTabla,
}



