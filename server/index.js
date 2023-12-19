const express = require("express");
const mongoose = require("mongoose");
const BookModel = require("./models/bookModel");
const booksRoute = require("./routes/bookesRoute");
const cors = require("cors");
const PORT = 5000;

const app = express();
app.use(cors());
app.use(express.json());
// app.use(
//   cors({
//     origin: "http://localhost:5000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );
async function main() {
  await mongoose.connect(
    "mongodb+srv://GaneshJ10:Ganeshvijay10@book-store-mern.0pdhon2.mongodb.net/books-collection?retryWrites=true&w=majority"
  );

  app.get("/", async (req, res) => {
    res.send("hello everyOne");
  });
  app.use("/books", booksRoute);
  app.listen(PORT, () => {
    console.log("server is running properly");
  });
}
main().catch((err) => {
  console.error(err);
});
