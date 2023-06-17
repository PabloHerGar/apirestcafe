import { Router } from 'express'
import validarCampos from '../middlewares/validar-campos.js'
import Rol from '../models/rol.js'
import {
  usuarioGet,
  usuarioPost,
  usuarioPut,
  usuarioPatch,
  usuarioDelete
} from '../controllers/usuarios.js'
import { check } from 'express-validator'

const router = Router()
//Desestructaramos Router de express, le asignamos una variable router que haga la funcion Router()

router.get('/', usuarioGet)

router.post(
  '/',
  [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    // .not().isEmpty() Esto significa NO está VACIO

    check('password', 'El password debe de ser más de 6 letras').isLength({
      min: 6
    }),
    check('correo', 'El correo no es valido').isEmail(),
    // check('rol', 'No es un rol valido').isIn(['ADMIN_ROL', 'USER_ROL']),
    check('rol').custom(async (rol = '') => {
      const existeRol = await Rol.findOne({ rol })

      if (!existeRol) {
        throw new Error(`El rol ${rol} no está registrado en la BD `)
      }
    }),
    validarCampos
  ],
  usuarioPost
)

//Comprueba que el email es valido

router.put('/:id', usuarioPut)

router.patch('/', usuarioPatch)

router.delete('/', usuarioDelete)

//Le quitamos this.app y lo convertimos en router

//Le quitamos /api y lo dejamos / porque en el server le designamos el nuevo path

export default router
