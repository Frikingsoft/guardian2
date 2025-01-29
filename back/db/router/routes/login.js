import jwt from'jsonwebtoken'
let token 
const login = (req, res)=>{
    let usuario = JSON.parse(JSON.stringify(req.buscar_usuario))
    delete usuario.password
    delete usuario.entry_date
    delete usuario.num_employee
    delete usuario._id
    generar_token(usuario,process.env.secretKey,)
    console.log(token)
    res.status(200).json({ mensaje:"Acceso", usuario,token})
}
const generar_token =(payload, secretKey, options = {expiresIn: '1d'})=>{
    token = jwt.sign(payload, secretKey, options);
    return token
}

export{
    login
}