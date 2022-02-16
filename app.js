
const path = require("path");
const express = require("express");
const app = express();
const publicFolderPath = path.resolve(__dirname,'./public');

app.use(express.static(publicFolderPath));


app.listen(3000, () => {
  console.log("Servidor Corriendo en el puerto 3000");
});


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/home.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/login.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/register.html"));
});

