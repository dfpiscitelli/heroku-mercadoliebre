const express = require("express");
const { get } = require("http");
const app = express();
const path = require('path');
const port = process.env.PORT || 2003;

app.listen(port, () => {  
    console.log("corriendo on port 2003");
});
const pathPublic = path.resolve(__dirname, '../public');
app.use(express.static(pathPublic));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/home.html'));
})

app.get('/register.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
})

app.get('/login.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
})