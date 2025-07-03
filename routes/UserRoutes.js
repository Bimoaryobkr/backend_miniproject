const users = require("../controllers/UserController.js");
const authJwt = require("../middleware/AuthJWT.js");

module.exports = (app) => {
    const router = require("express").Router();
    router.use(authJwt.verifyToken);
    router.post("/", users.create);
    router.get("/", users.findAll);
    router.get("/:id", users.findOne);
    router.put("/:id", users.update);
    router.delete("/:id", users.delete);

    app.use("/users", router);
};
