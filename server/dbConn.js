// require("dotenv").config({ path: ".env" });

// const express = require("express");
// const router = express.Router();

// const Coffee = require("./models/Coffee");

// router.get("/", (req, res) => {
//   Coffee.find()
//     .sort({ data: -1 })
//     .then((person) => res.json(coffee))
//     .catch((err) => res.status(404), json({ notFound: "no coffee found" }));
// });

// // const connectDB = async () => {
// //   try {
// //     await mongoose.connect(process.env.REACT_APP_URI, {
// //       useNewUrlParser: true,
// //       useUnifiedTopology: true,
// //     });
// //     console.log("Connected to MongoDB");
// //   } catch (err) {
// //     console.log(err);
// //   } finally {
// //   }
// // };

// // const addSchema = async () => {
// //   try {
// //     coffeeSchema.create({
// //       coffeeName: "Peets",
// //       coffeeType: "Dark",
// //     });
// //     console.log("coffeeSchema has been inserted");
// //   } finally {
// //   }
// // };

// // module.exports = connectDB;
