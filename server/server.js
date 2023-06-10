require("dotenv").config({ path: ".env" });

//IMPORTS
const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = process.env.PORT;
const mongoURI = process.env.REACT_APP_URI;
const client = new MongoClient(mongoURI);

const app = express();
const coffee = require("./routes/coffee");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on`, `${PORT}`);
});
// getConnection()

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
});
try {
  console.log("connected");
} catch (err) {
  console.error(err);
}

app.use("/coffee", coffee);

// app.get("/", async (req, res, next) => {
//   try {
//     await client.connect();
//     const database = client.db("myApp");
//     const collection = database.collection("coffee");

//     const coffees = await collection.find({}).toArray();

//     console.log(`Server is Connected`);
//     res.status(201).send({ message: "Hello2" });
//   } catch (error) {
//     console.error(error);
//   }
// });

// const db = mongoose.connection;

// connectDB();

// getConnection = async () => {
//   try {
//     const client = await mongoose.connect(mongoURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log(`Connected to ${dbName} Database`);
//   } catch (error) {
//     console.error(`Failed to Connect to ${dbName} Database because ${error}`);
//   }
// };

// app.post("/addCoffee", async (req, res, next) => {
//   try {
//     const addCoffee = new Coffee(req.body);
//     const add = await coffee.save();
//     res.status(201).json(add);
//     res.status(200).json();
//     res.redirect("/");
//   } catch (error) {
//     throw error;
//   } finally {
//     await client.close();
//     console.log("all is done");
//   }
// });

// app.get("/coffee", async (req, res) => {
//   try {
//     const coffee = new coffeeSchema(req.body);
//     console.log(coffee);
//     res.redirect("/");
//   } catch (error) {
//     throw error;
//   } finally {
//     console.log("post complete");
//   }
// });
