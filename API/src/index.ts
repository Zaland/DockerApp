import "./config";
import express from "express";
import bodyParser from "body-parser";

const app = express();

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
app.post("/submit", (req, res) => {
  console.log("received", req.body);
  res.send("success");
});

// start the Express server
app.listen(process.env.API_PORT, () => {
  console.log(`server started at ${process.env.API_URL}`);
});
