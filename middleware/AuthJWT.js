const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
    let authHeader = req.headers["authorization"];

    if (!authHeader) {
        return res.status(403).send({ message: "No token provided!" });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
        return res.status(403).send({ message: "Token format is invalid!" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: "Unauthorized!" });
        }
        req.userId = decoded.id;
        next();
    });
};

const authJwt = {
    verifyToken: verifyToken,
};

module.exports = authJwt;
