// import { createServer } from "http";

// const server = createServer((req, res) => {
//   //set headers so browsers can read our response
//   res.setHeader("Content-type", "application/json");

//   if (req.url === "/") {
//     res.writeHead(200);
//     res.end(JSON.stringify({ message: "Hello World" }));
//   }
// });

// server.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

import express from "express";

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
