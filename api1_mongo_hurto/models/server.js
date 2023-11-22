const express = require('express')
const cors = require('cors') //implementa seguridadad
const bodyParser = require('body-parser') //convierte el objeto enviado desde el formulario
const { dbConection } = require('../database/config')


class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.hurtoPath = '/hurto' //Ruta de la API
        this.middlewares()
        this.routes()
        this.conectarDB()
    }

    listen(){
        this.app.listen(
            this.port, () => {
                console.log('Escuchando por el puerto '+this.port)
            } 
        )
    }
    routes(){
        this.app.use(this.hurtoPath, require('../routes/hurto'))
    }

    middlewares(){
        this.app.use( cors() ) //indecar el uso de cors
        this.app.use( bodyParser.json())
    }

    async conectarDB(){
        await dbConection()
    }

}

module.exports = {Server} //Exportación de la clase