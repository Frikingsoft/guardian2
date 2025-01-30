import { __dirname } from "../../config.js"
import path from "path"

const empleado = (req,res)=>{
    res.sendFile(path.join(__dirname, '../front/Login/dist/spa/index.html'))    
}
export{
    empleado
}
