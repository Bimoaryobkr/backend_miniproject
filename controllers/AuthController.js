const User = require("../models/UserModel.js");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
    try {
        const user = await User.findByEmail(req.body.email);

        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }

        const passwordIsValid = req.body.password === user.password;

        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "Invalid Password",
            });
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: 86400,
        });

        res.status(200).send({
            id: user.id,
            name: user.name,
            email: user.email,
            accessToken: token,
        });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};
