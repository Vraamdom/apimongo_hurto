const express = require('express')
const cors = require('cors') //implementa seguridadad
const { dbConection } = require('../database/config')
const bodyParser = require()

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
        this.app.use(cors()) //indecar el uso de cors
    }

    async conectarDB(){
        await dbConection()
    }

}

module.exports = {Server} //Exportación de la clase