var employees = require('./src/models/employees.json');

var express = require('express');
var app = express();

app.use(express.static('./public', {index: 'index.html'}));


app.get('/employees', (req, res)=> {
	res.json(employees);
});

app.listen(3000);
console.log('Listening on port 3000');