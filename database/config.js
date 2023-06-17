import mongoose from 'mongoose'

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN)

    console.log('base de datos online')
  } catch (error) {
    console.log(error)
    throw new Error('Error a la hora de iniciar la base de datos')
  }
}

// Me dijo Jero que esta pagina se puede optimizar mejor el error

export default dbConnection
