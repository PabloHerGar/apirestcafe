import { Router } from 'express'
import {
  usuarioGet,
  usuarioPost,
  usuarioPut,
  usuarioPatch,
  usuarioDelete
} from '../controllers/usuarios.js'

const router = Router()
//Desestructaramos Router de express, le asignamos una variable router que haga la funcion Router()

router.get('/', usuarioGet)

router.post('/', usuarioPost)

router.put('/:id', usuarioPut)

router.patch('/', usuarioPatch)

router.delete('/', usuarioDelete)

//Le quitamos this.app y lo convertimos en router

//Le quitamos /api y lo dejamos / porque en el server le designamos el nuevo path

export default router
