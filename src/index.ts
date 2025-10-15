import { createServer } from "http";

const server = createServer((req, res) => {
  //set headers so browsers can read our response
  res.setHeader("Content-type", "application/json");

  if (req.url === "/") {
    res.writeHead(200);
    res.end(JSON.stringify({ message: "Hello World" }));
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
