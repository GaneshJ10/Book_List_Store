const express = require("express");
const BookModel = require("../models/bookModel");
const router = express.Router();
//route to get books
router.get("/", async (req, res) => {
  try {
    const books = await BookModel.find();
    res.json({ count: books.length, data: books });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//route to get book by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BookModel.findById(id);
    res.json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//route to create books
router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      res.status(400).send({
        message: "send all reuired fields: title, author , publishYear",
      });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };
    const book = await BookModel.create(newBook);
    return res.status(201).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//route to update book
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      res.status(400).send({
        message: "send all reuired fields: title, author , publishYear",
      });
    }
    const { id } = req.params;

    const result = await BookModel.findByIdAndUpdate(id, req.body);

    if (!result) {
      res.status(404).json({ message: "book not found" });
      console.log("book not found");
    }
    res.status(200).send({ message: "book updated successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//route to delete book
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await BookModel.findByIdAndDelete(id);
    if (!result) {
      res.status(404).json({ message: "book not found" });
      console.log("book not found");
    }

    res.status(200).send({ message: "book deleted successfully" });
    console.log("book deleted");
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});
module.exports = router;
