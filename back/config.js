import express from "express" // importamos el modulo de express para crear el servidor
import cors from "cors" // importamos el modulo de cors para recibir peticiones desde otro destino
import { fileURLToPath } from "url" // para obtener las rutas del archivo actual
import { dirname } from "path" // para obtener las rutas del directorio actual
import { config } from "dotenv" // importamos dotenv para las variables de entorno
import morgan from "morgan"
import useragent from 'express-useragent'
import path from "path"
import conectarDB from "./db/db.js"

//-----------------------------------------------------------------------------------
config() // ejecutamos config
const servidor = express() // ejecutamos la configuración de express
servidor.listen(process.env.PORT) // El servidor va a estar escuchando en el puerto , en este caso la variable de entorno PORT
const __filename = fileURLToPath(import.meta.url)// para obtener las rutas del archivo actual
const __dirname = dirname(__filename) // para obtener las rutas del directorio actual
conectarDB()
//------------Middleware--------------------------------------
servidor.use(cors()) // Usamos como middleware la funcion de cors

servidor.use(express.json()) // Usamos como middleware la funcion de express json para que interprete los datos que vienen como json
servidor.use(morgan("dev"))
servidor.use(useragent.express());
servidor.use("/empleado",express.static(path.join(__dirname, '../front/empleado/dist/spa')))
servidor.get('/', (req, res) => {
    if (req.useragent.isMobile) {
        res.send('¡Hola! Parece que estás usando un dispositivo móvil.');
    } else if (req.useragent.isDesktop) {
        servidor.use("/",express.static(path.join(__dirname, '../front/Login/dist/spa')))
        res.sendFile(path.join(__dirname, '../front/Login/dist/spa/index.html'))
    } else {
        res.send('¡Hola! No estoy seguro de qué dispositivo estás usando.');
    }
});


export{
    servidor, // exportamos la variable del servidor
    __dirname,
    
}
