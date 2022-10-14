const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');


//database
const db = require('./queries');


process.on('SIGINT',function(){

    console.log('desconectando base de datos');
    process.exit(0);

});
//database


const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));



app.use(express.static(path.join(__dirname,'dist/sis2-proyect')));


app.get('/api',(res,req) => {
  res.send('La API FUNCIONA');

});

//poner todas las rutas aca

require('./server/routes/prueba')(app);

//termino de las rutas
app.get('*',(req,res) =>{
  res.sendFile('dist/sis2-proyect/index.html',{ root : __dirname});
});



const port = process.env.PORT || '3000';
app.set('port',port);



const server = http.createServer(app);
server.listen(port, ()=> console.log('API FUNCIONANDO EN : ' + port));
