const controller = require("../controllers/AuthController.js");

module.exports = function (app) {
    app.post("/auth/login", controller.login);
};
