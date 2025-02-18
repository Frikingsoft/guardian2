import Incident from "../../models/Incident.js"

export const get = async (req, res) => {
    try {
        if (req.params.id) {
            const incident = await Incident.findOne({ _id: req.params.id })
            if (!incident) {
                return res.status(404).json({ message: "Egreso no existe" })
            }
            return res.json(incident)
        }
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

        const newIncident = new Incident(data);
        await newIncident.save();

        res.json({ message: "Incident created successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error creating incident" });
    }
}
// export const deleteIncident = async (req, res) => { }