module.exports = function (req, res, next) {
    // leer el token del header
    const {rut, celular, email, renta} = req.body;
    console.log('el rut es: ', rut);
    console.log('el celular es: ', celular);
    console.log('el email es: ', email);
    console.log('la renta es: ', renta);
    if(!rut || !celular || !email || !renta){
        res.status(401).json({error: 'todos los campos son obligatorios'});
    }else{
        console.log('Validacion correcta');
        // para que se vaya al siguiente middleware
        next();
    }

};
