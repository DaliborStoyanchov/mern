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
    ) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }
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

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();

    res.status(200).json({ message: "Books fetched successfully", books });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to fetch books",
    });
  }
};
