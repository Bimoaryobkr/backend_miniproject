const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

require("./routes/AuthRoutes.js")(app);
require("./routes/UserRoutes.js")(app);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to User API" });
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
