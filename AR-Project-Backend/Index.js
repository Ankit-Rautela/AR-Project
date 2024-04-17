const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => res.send("Express on Render"));

app.listen(port, () => console.log("Server ready on port ${port}"));

module.exports = app;