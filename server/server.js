require("dotenv").config();

//IMPORTS
const express = require("express");
const app = express();
const MongoClient = require("mongodb");
const mongoURI = process.env.REACT_APP_URI;
const mongoose = require("mongoose");
PORT = 3001;

let db;
let dbConnectionStr = mongoURI;
let dbName = "coffee";

getConnection = async () => {
  try {
    const client = await MongoClient.connect(dbConnectionStr, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to ${dbName} Database`);
    db = await client.db(dbName);
  } catch (error) {
    console.error(`Failed to Connect to ${dbName} Database because ${error}`);
  }
};

app.get("/addCoffee", async (req, res, next) => {
  try {
    await client.connect();
    const database = client.db("Cluster0");
    const collection = database.collection("Coffee");
    const query = await collection.insertOne({
      name: "Coffee",
      description: "Coffee is a coffee drink made from roasted coffee beans.",
      image:
        "https://www.publicdomainpictures.net/pictures/60000/velka/coffee-cup-and-beans-1379232745fgz.jpg",
    });

    console.log(query);
    res.status(200).json();
  } catch (error) {
    throw error;
  } finally {
    await client.close();
    console.log("all is done");
  }
});

// app.post("/api/coffee", async (req, res) => {
//   try {
//     await client.connect();
//   } catch (error) {
//     throw error;
//   } finally {
//     console.log("post complete");
//   }
// });

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on`, `${PORT}`);
});
