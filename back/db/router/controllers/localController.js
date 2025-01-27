import Local from "../../models/Local.js"

export const get = async (req, res) => {
    try {
        const locals = await Local.find();

        res.json(locals);

    } catch (error) {
        res.status(500).json({ message: "Error fetching employees" });
    }
}

export const post = async (req, res) => {
    const data = req.body;
    try {
        const local = await Local.findOne({ name: data.name });
        if (local) return res.status(400).json({ message: "Local already exists" });

        const newEmployee = new Local({ ...data });
        await newEmployee.save();

        res.json({ message: "Local created successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error creating local" });
    }
}
export const put = async (req, res) => {
    const id = req.params.idLocal;
    const data = req.query;

    try {
        console.log(req.params)
        const local = await Local.findOneAndUpdate({ _id: id }, data, { new: true });
        console.log(local)
        if (local) {
            res.status(200).json(local);
        } else {
            return res.status(404).json({ message: "Local not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error updating local" });
    }
}

export const deleteLocal = async (req, res) => {
    const id = req.params.idLocal;
    try {
        await Local.findOneAndDelete({_id: id});
        return res.status(200).json({ message: "Local deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting employee" });
    }
}