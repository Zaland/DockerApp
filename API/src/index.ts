import "./config";
import express from "express";
import bodyParser from "body-parser";
import validator from "validator";
import { appendFile } from "fs";

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
    ...(validator.isEmpty(name) ? ["Name"] : []),
    ...(!validator.isEmail(email) ? ["Email"] : []),
    ...(validator.isEmpty(phoneNumber) ? ["Phone Number"] : []),
    ...(!validator.isNumeric(houseNumber) ? ["House Number"] : []),
    ...(validator.isEmpty(streetName) ? ["Street Name"] : []),
    ...(validator.isEmpty(city) ? ["City"] : []),
    ...(validator.isEmpty(stateProvince) ? ["State/Province"] : []),
    ...(validator.isEmpty(country) ? ["Country"] : []),
  ];

  if (errorList.length) {
    res.send({ success: false, error: errorList });
  } else {
    appendFile(
      "customers.txt",
      `${JSON.stringify(
        {
          name,
          email,
          phoneNumber,
          houseNumber,
          streetName,
          city,
          stateProvince,
          country,
        },
        null,
        2
      )},\n`,
      (error) => console.log({ error })
    );
    res.send({ success: true });
  }
});

// start the Express server
app.listen(process.env.API_PORT, () => {
  console.log(`server started at ${process.env.API_URL}`);
});
