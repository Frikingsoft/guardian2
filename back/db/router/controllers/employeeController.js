import Employee from "../../models/Employee.js"

export const get = async (req, res) => {
    try {
        if (req.params.id) {
            const employee = await Employee.findOne({ _id: req.params.id })
            if (!employee) {
                return res.status(404).json({ message: "Egreso no existe" })
            }
            return res.json(employee)
        }
        const employees = await Employee.find();

        res.json(employees);

    } catch (error) {
        res.status(500).json({ message: "Error fetching employees" });
    }
}

export const post = async (req, res) => {
    const data = req.body;
    try {
        const employee = await Employee.findOne({ email: data.email });
        if (employee) return res.status(400).json({ message: "Employee already exists" });

        const newEmployee = new Employee(data);
        console.log(newEmployee)
        await newEmployee.save();

        res.json({ message: "Employee created successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error creating employee" });
    }
}

export const put = async (req, res) => {
    const id = req.params.idEmployee;
    const data = req.query;

    try {
        const employee = await Employee.findOneAndUpdate({ _id: id }, data, { new: true });
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ message: "Error updating employee" });
    }
}

export const deleteEmployee = async (req, res) => {
    const id = req.params.idEmployee;
    try {
        await Employee.findOneAndDelete({ _id: id });
        return res.status(200).json({ message: "Employee deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting employee" });
    }
}