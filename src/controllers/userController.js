import { User, db } from '../config/dbConfig.js';

const userController = {};

userController.getAllUsers = async (req, res) => {
    try {
        const usersData = await User.findAll();
        res.status(200).json(usersData);
    } catch (error) {
        res.status(500).json({ error: "Error fetching users", details: error.message });
    }
}

userController.createUser = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) return res.status(400).json({ error: "Name is required" });
        const user = await User.create({ name });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: "Error creating user", details: error.message });
    }
};

export default userController;