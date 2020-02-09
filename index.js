const express = require('express');
const app = express();
const cors = require('cors');


// habilitar cors
app.use(cors());

app.use(express.json({extended: true}));

const PORT = process.env.port || 4000;

app.use('/api/rent', require('./routes/landing'));

app.listen(PORT, () => {
    console.log('corriendo en el servidor');
});

