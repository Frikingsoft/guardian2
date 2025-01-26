import Outgo from "../../models/Outgo.js"

export const get = async (req, res) => {
    try {
        const outgoings = await Outgo.find();

        res.json(outgoings);

    } catch (error) {
        res.status(500).json({ message: "Error fetching employees" });
    }
}

export const post = async (req, res) => {
    const data = req.body;
    try {
        const outgo = Outgo.findOne({ email: data.email });
        if (outgo) return res.status(400).json({ message: "Outgo already exists" });

        const newEmployee = new Outgo(data);
        await newEmployee.save();

        res.json({ message: "Outgo created successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error creating outgo" });
    }
}
export const put = async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    try {
        const outgo = await Outgo.findByIdAndUpdate(req.params.id, data, { new: true });
        res.status(200).json(outgo);
    } catch (error) {
        res.status(500).json({ message: "Error updating outgo" });
    }
}
// export const deleteOutgo = async (req, res) => {
//     const id = req.params.id;
//     try {
//         await Outgo.findByIdAndDelete(id);
//         return res.status(200).json({ message: "Outgo deleted successfully" });
//     } catch (error) {
//         res.status(500).json({ message: "Error deleting outgo" });
//     }
// }