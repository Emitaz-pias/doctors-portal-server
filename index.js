const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const { MongoClient } = require("mongodb");
const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 5000;

const uri = `mongodb+srv://doctor:${process.env.DB_PASS}@cluster0.7lce2.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  const appointment = client
    .db(process.env.DB_NAME)
    .collection(process.env.COLLECTION_NAME);
  // perform actions on the collection object
  console.log("db connected");
  app.post("/addAppointment", (req, res) => {});
});

app.get("/", (req, res) => res.send("heellooo world"));

app.listen(5000, console.log("app is running"));
