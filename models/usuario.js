import { Schema, model } from 'mongoose'

const UsuarioSchema = Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es obligatorio']
  },

  correo: {
    type: String,
    required: [true, 'El correo es obligatorio']
  },

  password: {
    type: String,
    required: [true, 'La contraseña es obligatorio']
  },

  imagen: {
    type: String
  },
  rol: {
    type: String,
    required: true,
    emun: ['ADMIN_ROL', 'USER_ROL']
  },
  estado: {
    type: Boolean,
    default: true
  },

  google: {
    type: Boolean,
    default: false
  }
})

export default model('Usuario', UsuarioSchema)
