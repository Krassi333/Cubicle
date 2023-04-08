const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hi');
});

app.listen(5000, () => console.log('The server is listening on port 5000...'))