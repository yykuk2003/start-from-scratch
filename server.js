// @ts-check
//checks the error
const express = require('express');
const app = express();
const path =require('path');

app.use(express.static(path.join(__dirname, "static")))

app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'front.html'));
    
});

app.listen(3000, () => {
    console.log('server running');
});