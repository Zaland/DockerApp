import "./config";
import express from "express";
import bodyParser from "body-parser";
import validator from "validator";

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
  const {
    name,
    email,
    phoneNumber,
    houseNumber,
    streetName,
    city,
    stateProvince,
    country,
  } = req.body;

  const errorList = [
    ...(validator.isEmpty(name) ? ["Name is empty!"] : []),
    ...(!validator.isEmail(email) ? ["Email is not the right format!"] : []),
    ...(validator.isEmpty(phoneNumber) ? ["Phone Number is empty!"] : []),
    ...(!validator.isNumeric(houseNumber)
      ? ["House Number can only be a number!"]
      : []),
    ...(validator.isEmpty(streetName) ? ["Street Name is empty!"] : []),
    ...(validator.isEmpty(city) ? ["City is empty!"] : []),
    ...(validator.isEmpty(stateProvince) ? ["State/Province is empty!"] : []),
    ...(validator.isEmpty(country) ? ["Country is empty!"] : []),
  ];

  if (errorList.length) {
    res.status(400).send({ data: false, error: errorList });
  }

  res.send(true);
});

// start the Express server
app.listen(process.env.API_PORT, () => {
  console.log(`server started at ${process.env.API_URL}`);
});
