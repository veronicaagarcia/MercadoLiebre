const express = require("express");
const app = express();
const PORT = process.env.PORT || 4001;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/register.html", (req, res) => {
    res.sendFile(__dirname + "/views/register.html");
});

app.get("/login.html", (req, res) => {
    res.sendFile(__dirname + "/views/login.html");
});

app.listen(3033, () => console.log("Corriendo todo ok en el puerto 3033"));

app.listen(PORT, () => console.log("running on port 4001"));

