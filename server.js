const http = require('http');

const fs = require('fs');



const port = process.env.PORT || 3000;



http.createServer((req, res) => {

&#x20; fs.readFile('index.html', (err, data) => {

&#x20;   res.writeHead(200, { 'Content-Type': 'text/html' });

&#x20;   res.end(data);

&#x20; });

}).listen(port);



console.log(`Server running on ${port}`);
