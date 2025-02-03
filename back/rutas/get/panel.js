import Local from "../../db/models/Local.js"
const panel = async(req,res)=>{
    let locales =  await Local.find({})
    res.status(200).json({locales})
}
export{
    panel
}
