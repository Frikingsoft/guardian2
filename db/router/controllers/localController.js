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
        const local = Local.findOne({ email: data.email });
        if (local) return res.status(400).json({ message: "Local already exists" });

        const newEmployee = new Local(data);
        await newEmployee.save();

        res.json({ message: "Local created successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error creating local" });
    }
}
export const put = async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    try {
        const local = await Local.findByIdAndUpdate(req.params.id, data, { new: true });
        res.status(200).json(local);
    } catch (error) {
        res.status(500).json({ message: "Error updating local" });
    }
}

export const deleteLocal = async (req, res) => {
    const id = req.params.id;
    try {
        await Local.findByIdAndDelete(id);
        return res.status(200).json({ message: "Local deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting employee" });
    }
}