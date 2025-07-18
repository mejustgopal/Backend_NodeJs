// const { createServer } = require('node:http'); //common js

// import { createServer } from 'node:http'; //es6
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hecking Started</h1>');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// import {a,c,e} from "./mymodule.js"
// import {b} from "./mymodule.js"

// console.log(a,c, e);
// console.log(b);

// import l from "./mymodule.js"

// console.log(l);


const a = require("./mymodule2")
console.log(a , __dirname , __filename);
