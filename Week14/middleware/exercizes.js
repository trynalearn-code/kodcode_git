
// //6.
// function logger(req,res,next){
//     console.log(req.method, req.url)
//     next()
// }


// //7.
// const express = require('express');
// const app = express();

// app.use(express.json())

// app.post('/users', (req, res) => {
//   console.log(req.body); // צריך להדפיס אובייקט ולא undefined
//   res.json({ received: req.body });
// });

// //8.
// function auth(req, res, next) {
//   const token = req.header("Authorization");
//   if (!token) {
//     return res.status(401).json({ message: `You aren't authorized` });
//   }
// next();
// }

//9.
