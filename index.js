const express = require('express');
const app = express();
const morgan=require('morgan');
const cors = require('cors'); // Importa el paquete cors   npm install cors
 
//Configuraciones  servidor
app.set('port', process.env.PORT || 4000);
app.set('json spaces', 2)
 
//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors()); // Agrega el middleware CORS

 
//Nuestro primer WS Get  // A ESTAS RUTAS SE CONOCEN COMO ENDPINTS
app.get('/', (req, res) => {    
    res.json(
        {
            "Title": "Hola mundo"
        }
    );
})




//Iniciando el servidor
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});