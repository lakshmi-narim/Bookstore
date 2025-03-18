import express from "express";
import Book from "../models/Book.js";

const router = express.Router();

// Get all books
router.get("/", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// Add a new book
router.post("/", async (req, res) => {
  const newBook = new Book(req.body);
  await newBook.save();
  res.json(newBook);
});

// Delete a book
router.delete("/:id", async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: "Book deleted" });
});

export default router;
