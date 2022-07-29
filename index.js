const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,'/public')));


app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname,'/public/about.html'));
});

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'/public/index.html'));
});


app.get('/contact-me', (req,res) => {
    res.sendFile(path.join(__dirname,'/public/contact-me.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'/public/404.html'));
})


app.listen(8080, () => {
    console.log("Server is running on Port 2000");
});