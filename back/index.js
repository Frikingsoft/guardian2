import { servidor } from './config.js'
import { inicio } from "./rutas/get/inicio.js"
import { controlador_inicio } from "./middleware/controlador_inicio.js"
import { login_empleado } from "./rutas/post/login_empleado.js"
import { controlador_login_empleado } from "./middleware/controlador_login_empleado.js"
servidor.get("/",controlador_inicio,inicio)
servidor.post("/login_empleado",controlador_login_empleado,login_empleado)