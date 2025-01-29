const login = (req, res)=>{
    let usuario = JSON.parse(JSON.stringify(req.buscar_usuario))
    delete usuario.password
    delete usuario.entry_date
    res.status(200).json(usuario)
}

export{
    login
}