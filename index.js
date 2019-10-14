
alert("Hello");
// //console.log('Hello from Node.js...');
// /*
// // This is the way to import modules
// const Person = require('./person');

// const person1 = new Person('Jhon Doe',30);

// person1.greeting();
// */
// //console.log(person);

// /* // event Example
// const Logger = require('./logger');

// const logger = new Logger();

// logger.on('message', (data) => console.log('Called Listener', data));

// logger.log('Hello World');
// logger.log('Hi');
// logger.log('Hello');
// */

// // Server example
// const http = require('http');
// const path = require('path');
// const fs = require('fs');

// /*
// // Hard coded exaple
// const server = http.createServer((req,res) => {
//   console.log(req.url);
//   //res.writeHead(200, {'Content-Type': 'text/html' });
//   res.end('<h1>Home</h1>');
//   //
//   if(req.url === '/') {
//     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err,content) => {
//       if(err) throwerr;
//       res.writeHead(200, {'Content-Type': 'text/html' });
//       res.end(content);
//     });
//  }

//   if(req.url === '/about') {
//     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err,content) => {
//       if(err) throwerr;
//       res.writeHead(200, {'Content-Type': 'text/html' });
//       res.end(content);
//     });
//   }

//   if(req.url === '/api/users') {
//     const users = [
//       {name: 'Bob Smith', age: 40},
//       {name: 'John Doe', age: 30}
//     ];    
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     res.end(JSON.stringify(users));
//   }

// });
// */

// const server = http.createServer((req,res) => {
//  // Build file path
//   let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html': req.url);
  
//   console.log(filePath);
//   //res.end();

//   // Extension of file
//   let extname = path.extname(filePath);

//   // Initila Content Type
//   let contentType = 'text/html';
  
//   //Check ext and set content Type
//   switch(extname){
//       case '.js':
//         contentType = 'text/javascript';
//         break;
//       case '.css':
//         contentType = 'text/css';
//         break;
//       case '.json':
//         contentType = 'application/json';
//         break;
//       case '.png':
//         contentType = 'image/png';
//         break;
//       case '.jpg':
//         contentType = 'image/jpg';
//         break;
//   }

//   // Read file
//   fs.readFile(filePath, (err, content) => {
//     if (err) {
//       if(err.code == 'ENOENT'){
//         //Page not found
//         fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
//           res.writeHead(200, {'Content-Type': 'text/html' });
//           res.end(content, 'utf8');
//         })
//       } else {
//         // Some server error
//         res.writeHead(500);
//         res.end(`Server error: ${err.code}`);
//       }
//     } else {
//       // Success
//       res.writeHead(200, {'Content-Type': contentType });
//       res.end(content, 'utf8');
//     }
//   });

// });




// const PORT = process.env.PORT || 5000;

// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

