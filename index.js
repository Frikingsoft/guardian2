import { servidor } from "./config.js"

import { registro } from "./rutas/post/registro.js"
import { validar_registro } from "./middleware/validar_registro.js"
servidor.post("/registro",validar_registro,registro)
import { inicio } from "./rutas/get/inicio.js"
import { encriptar_inicio } from "./middleware/encriptar_inicio.js"
servidor.get("/",encriptar_inicio,inicio)