import crypto from 'crypto'
import jwt from "jsonwebtoken"

const encriptar_inicio = (req, res, next) => {
    try {
        // Clave fija (debería almacenarse en un lugar seguro, como una variable de entorno)
        const encriptar = process.env.encriptar
        const vector = process.env.vector // Vector de inicialización fijo
        
        // Payload fijo para el token
        const payload = {
            data: "valor-fijo-para-el-token"
        };

        // Generar el token JWT usando un secreto fijo (clave + vector)
        const secret = crypto.createHash("sha256").update(encriptar + vector).digest("hex");
        process.env.token = jwt.sign(payload, secret, { expiresIn: "1h" });

        next(); // Continuar con el siguiente middleware
    } catch (error) {
        console.error("Error al generar el token fijo:", error);
        res.status(500).json({ error: "Error al generar el token fijo" });
    }
}



export{
    encriptar_inicio
}
