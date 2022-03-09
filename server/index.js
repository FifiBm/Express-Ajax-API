const express = require('express'); // require express dependency
const app = express(); // invoke express function and assign to a variable
const PORT = 3000; // The port the server will listen on
const path = require('path');
const { groceryItem } = require('./data.js');

app.use('/', expresss.static(path.join(_dirname, '..', 'public')));
app.use( expresss.urlencoded({ extended: true}));
app.use( expresss.json());

app.get('/data', function(req, res) {
    res.status(200).send(GroceryItems);
});

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
})