import { servidor } from "./config.js"
import { inicio } from "./rutas/get/inicio.js"
import { registro } from "./rutas/post/registro.js"
import { validar_registro } from "./middleware/validar_registro.js"

servidor.get("/",inicio)
servidor.post("/registro",validar_registro,registro)

