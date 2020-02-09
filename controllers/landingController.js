const fs = require('fs');

exports.guardarLanding = async (req, res) => {

    const {rut, celular, email, renta} = req.body;
    const texto = `Landing generdo: rut-${rut} celular: ${celular} email: ${email} renta: ${renta}`
    fs.writeFile('archivoLandind.txt', texto, (err) => {
        if (err) throw err;
    });
    res.json({msg: 'Se ha realizado el Registro de datos exitosamente'});

};