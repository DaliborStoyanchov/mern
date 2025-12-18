import type { Request, Response } from "express";
import Book from "./book.model.ts";

export const createBook = async (req: Request, res: Response) => {
  try {
    const {
      title,
      description,
      category,
      trending,
      coverImage,
      oldPrice,
      newPrice,
    } = req.body;

    if (
      !title ||
      !description ||
      !category ||
      trending === undefined ||
      !coverImage
    )
      res.status(400).json({
        message: "Missing required fields",
      });

    const book = await Book.create({
      title,
      description,
      category,
      trending,
      coverImage,
      oldPrice,
      newPrice,
    });

    res.status(200).json({ message: "Book added successfully", book });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to create book",
    });
  }
};

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });

    res.status(200).json({ message: "Books fetched successfully", books });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to fetch books",
    });
  }
};

export const getABook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const book = await Book.findById(id);

    if (!book) res.status(404).json({ message: "Book not found" });

    res.status(200).json({ message: "Book fetched successfully", book });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to fetch a book",
    });
  }
};

export const updateBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updateBook) res.status(404).json({ message: "Book not found" });

    res.status(200).json({ message: "Book updated successfully", updatedBook });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to update a book",
    });
  }
};

export const deleteABook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) res.status(404).json({ message: "Book not found" });

    res.status(200).json({ message: "Book deleted successfully", deletedBook });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete a book",
    });
  }
};
