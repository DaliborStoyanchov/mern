import { Router } from "express";
import {
  createBook,
  getABook,
  getAllBooks,
  updateBook,
} from "./book.controller.ts";

const router = Router();

router.post("/", createBook);
router.get("/", getAllBooks);
router.get("/:id", getABook);
router.put("/edit/:id", updateBook);

export default router;
