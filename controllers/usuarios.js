import { response, request } from 'express'
import bcrypt from 'bcryptjs'

//Se hace la desestructuracion para que cuando pongas res. te salgan las propiedades.

import Usuario from '../models/usuario.js'

export const usuarioGet = (req = request, res = response) => {
  // const query = req.query
  const { q, nombre = 'no name', apikey, page = 1, limit } = req.query

  res.json({
    msg: 'get API - usuarioGet',
    // query
    q,
    nombre,
    apikey,
    page,
    limit
  })
}
export const usuarioPost = async (req, res = response) => {
  const { nombre, correo, password, rol } = req.body
  // const { nombre, edad } = req.body
  const usuario = new Usuario({ nombre, correo, password, rol })

  //Verificar si el correo existe
  const existeEmail = await Usuario.findOne({ correo })
  if (existeEmail) {
    return res.status(400).json({
      msg: 'Ese correo ya está registrado'
    })
  }
  //Encriptar la contraseña
  const salt = bcrypt.genSaltSync(10)
  usuario.password = bcrypt.hashSync(password, salt)
  //Guardar en BD

  await usuario.save()

  res.json({
    msg: 'post API - usuarioPost',
    usuario
    // nombre,
    // edad
  })
}
//se recoge en el req el body que se puede meter en el postman como respuesta

export const usuarioPut = (req, res = response) => {
  // const userId =req.params.id
  const { id } = req.params

  res.status(500).json({
    msg: 'put API - usuarioPut',
    id
  })
}

export const usuarioPatch = (req, res = response) => {
  res.json({
    msg: 'patch API - usuarioPatch'
  })
}

export const usuarioDelete = (req, res = response) => {
  res.json({
    msg: 'delete API - usuarioDelete'
  })
}

//Se crean constantes para cada usuario y se exportan y se ponen en las routes usuarios.js
