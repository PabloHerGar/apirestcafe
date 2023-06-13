import express from 'express'
import cors from 'cors'
import dbConnection from '../database/config.js'
import usuarios from '../routes/usuarios.js'

class Server {
  constructor(params) {
    this.app = express()
    this.port = process.env.PORT

    this.rutasUsuario = '/api/usuarios'
    // se asigna usuariosPath para que se mas visible

    // Conectar a la base de datos
    this.conectarDB()

    //Middlewares
    this.middlewares()

    //Rutas de mi aplicacion
    this.routes()
  }

  async conectarDB() {
    await dbConnection()
  }

  middlewares() {
    //CORS
    this.app.use(cors())

    //Lectura y parseo del Body
    this.app.use(express.json())

    //Directorio publico
    this.app.use(express.static('public'))
  }

  routes() {
    this.app.use(this.rutasUsuario, usuarios)
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo en un puerto', this.port)
    })
  }
}

export default Server
