import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000; // default port to listen

// middleware
app.use(bodyParser.json());

// cors
app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3001");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// endpoints
app.get("/", (_req, res) => {
  res.send("Hello world!");
});

app.post("/submit", (req, res) => {
  console.log("received", req.body);
  res.send("yo");
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
