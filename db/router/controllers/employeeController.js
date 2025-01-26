import Employee from "../../models/Employee.js"

export const get = async (req, res) => {
    try {
        const employees = await Employee.find();

        res.json(employees);

    } catch (error) {
        res.status(500).json({ message: "Error fetching employees" });
    }
}

export const post = async (req, res) => {
    const data = req.body;
    try {
        const employee = Employee.findOne({ email: data.email });
        if (employee) return res.status(400).json({ message: "Employee already exists" });

        const newEmployee = new Employee(data);
        await newEmployee.save();

        res.json({ message: "Employee created successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error creating employee" });
    }
}

export const put = async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    try {
        const employee = await Employee.findByIdAndUpdate(req.params.id, data, { new: true });
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ message: "Error updating employee" });
    }
}

export const deleteEmployee = async (req, res) => {
    const id = req.params.id;
    try {
        await Employee.findByIdAndDelete(id);
        return res.status(200).json({ message: "Employee deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting employee" });
    }
}