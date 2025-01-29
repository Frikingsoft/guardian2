import Schedule from "../../models/Schedule.js"

export const get = async (req, res) => {
    try {
        if (req.params.id) {
            const schedule = await Schedule.findOne({ _id: req.params.id })
            if (!schedule) {
                return res.status(404).json({ message: "Egreso no existe" })
            }
            return res.json(schedule)
        }
        const schedules = await Schedule.find();

        res.json(schedules);

    } catch (error) {
        res.status(500).json({ message: "Error fetching employees" });
    }
}

export const post = async (req, res) => {
    const data = req.body;
    try {
        const newSchedule = new Schedule(data);
        await newSchedule.save();

        res.json({ message: "Schedule created successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error creating schedule" });
    }
}
export const put = async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    try {
        const schedule = await Schedule.findByIdAndUpdate(req.params.id, data, { new: true });
        res.status(200).json(schedule);
    } catch (error) {
        res.status(500).json({ message: "Error updating schedule" });
    }
}

export const deleteSchedule = async (req, res) => {
    const id = req.params.id;
    try {
        await Schedule.findByIdAndDelete(id);
        return res.status(200).json({ message: "Schedule deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting schedule" });
    }
}