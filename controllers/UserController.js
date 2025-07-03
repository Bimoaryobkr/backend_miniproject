const User = require("../models/UserModel.js");

exports.create = async (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Data can not empty" });
        return;
    }
    try {
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });
        res.status(201).send(newUser);
    } catch (err) {
        res.status(500).send({
            message: "Error occurred while creating the user.",
        });
    }
};

exports.findAll = async (req, res) => {
    try {
        const users = await User.getAll();
        res.send(users);
    } catch (err) {
        res.status(500).send({
            message: "Error occurred while retrieving users.",
        });
    }
};

exports.findOne = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (user) {
            res.send(user);
        } else {
            res.status(404).send({
                message: `Not found user with id ${req.params.id}.`,
            });
        }
    } catch (err) {
        res.status(500).send({
            message: `Error retrieving user with id ${req.params.id}`,
        });
    }
};

exports.update = async (req, res) => {
    if (!req.body) {
        return res
            .status(400)
            .send({ message: "Data to update can not empty" });
    }
    try {
        const updatedUser = await User.updateById(req.params.id, req.body);
        if (updatedUser) {
            res.send({
                message: "User was updated successfully.",
                data: updatedUser,
            });
        } else {
            res.status(404).send({
                message: `Cannot update user with id ${req.params.id}`,
            });
        }
    } catch (err) {
        res.status(500).send({
            message: `Error updating user with id ${req.params.id}`,
        });
    }
};

exports.delete = async (req, res) => {
    try {
        const result = await User.remove(req.params.id);
        if (result) {
            res.send({ message: "User was deleted successfully" });
        } else {
            res.status(404).send({
                message: `Cannot delete user with id ${req.params.id}.`,
            });
        }
    } catch (err) {
        res.status(500).send({
            message: `Could not delete user with id ${req.params.id}.`,
        });
    }
};
