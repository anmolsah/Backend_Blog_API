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
import dotenv from "dotenv";
import swaggerUI from "swagger-ui-express";
import swaggerSpec from "./config/swagger";
import authRoutes from "./routes/authRoutes";
import { connectDb } from "./config/database";
import morgan from "morgan";

dotenv.config();

const app = express();
app.use(express.json());
app.use(morgan("dev"));
const port = 3000;

app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

connectDb().catch((err) => {
  console.error("Failed to connect to the database", err);
});
