import express from 'express'
import connectDB from './src/config/db.js'
import { port, uri } from './src/config/constants.js'

connectDB();

const app = express();
//nos permitira hacer uso de json(objetos) en peticiones
app.use(express.json())

app.use(uri,);

// TODO HACER RUTA A MI ENDPOINT DE PRUEBA
const PORT = port || 5000;
app.listen(PORT, console.log(`Server runing on http://localhost:${PORT}${uri}`))