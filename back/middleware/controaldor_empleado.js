import jwt from "jsonwebtoken"
const controaldor_empleado = (req, res, next) => {
        let token =req.headers["authorization"]
        let payload
        try {
            // Decodificar el token (sin verificar la firma)
            payload = jwt.decode(token);
            if(payload.rol === "employee"){
                req.rol = "employee" 
                next()
            }
            if(payload.rol === "admin"){
                req.rol = "admin"
                next()
            }
            return payload // Retorna el payload del token
            
        } catch (error) {
            console.error("Error al decodificar el token:", error.message);
            return null; // Retorna null si el token no es válido
        }
        
}

const comparar_token=(token, )=>{
    
}
export{
    controaldor_empleado
}
