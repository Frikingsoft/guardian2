import { servidor, io } from './config.js'
import { inicio } from "./rutas/get/inicio.js"
import { controlador_inicio } from "./middleware/controlador_inicio.js"
import { login } from "./rutas/post/login.js"
import { controlador_login } from "./middleware/controlador_login.js"
import { registro_admin } from "./rutas/post/registro_admin.js"
import { controlador_registro_admin } from "./middleware/controlador_registro_admin.js"
import { empleado } from "./rutas/get/empleado.js"
import { controaldor_empleado } from "./middleware/controaldor_empleado.js"
import { login_admin } from "./rutas/post/login_admin.js"
import { controlador_login_admin } from "./middleware/controlador_login_admin.js"
import { panel } from "./rutas/get/panel.js"

servidor.get("/",controlador_inicio,inicio)
servidor.post("/login",controlador_login,login)
servidor.post("/registro_admin",controlador_registro_admin,registro_admin)
servidor.get("/empleado",controaldor_empleado,empleado)
servidor.post("/loginAdmin",controlador_login_admin,login_admin)
servidor.get("/panel",panel)