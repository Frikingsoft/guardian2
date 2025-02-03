import Local from "../../db/models/Local.js"
const panel = async(req,res)=>{
    let locales =  await Local.find({})
    global.io.emit("locales", { locales });
    res.status(200).send('ok')
}
export{
    panel
}
