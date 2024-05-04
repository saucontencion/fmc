const express = require('express')
const app = express();

app.get("/", (req, res) => {
    res.send('hola mundo')
})
app.use(express.static('public'));

app.get("/cliente.html", (req, res) => {
    res.sendFile(__dirname + '/public/cliente.html')
})
app.listen(8080, () => console.log("server started"));