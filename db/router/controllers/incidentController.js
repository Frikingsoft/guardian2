import Incident from "../../models/Incident.js"

export const get = async (req, res) => {
    try {

        // const { filter, search, page } = req.query;

        // const current_page = Number(page ? page : 1);
        // const limit = 5;
        // const skip = (page - 1) * limit;

        // if (search) query.name = { $regex: search, $options: "i" };

        const incidents = await Incident.find()
        // const incidents = await Operator.find(query)
        // .skip(skip)
        // .limit(limit)
        // .sort({ createdAt: -1 })
        // .exec();

        // const total = await Incident.countDocuments(query);

        // const last_page = Math.ceil(total / limit);

        res.status(200).json(incidents);
        // res.status(200).json({
        //     incidents,
        //     meta: {
        //         last_page,
        //         total,
        //         current_page,
        //     },
        // });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const post = async (req, res) => {
    const data = req.body;
    try {
        const incident = Incident.findOne({ email: data.email });
        if (incident) return res.status(400).json({ message: "Incident already exists" });

        const newEmployee = new Incident(data);
        await newEmployee.save();

        res.json({ message: "Incident created successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error creating incident" });
    }
}
// export const deleteIncident = async (req, res) => { }