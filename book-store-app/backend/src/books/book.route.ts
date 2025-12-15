import { Router } from "express";
import { createBook, getABook, getAllBooks } from "./book.controller.ts";

const router = Router();

router.post("/", createBook);
router.get("/", getAllBooks);
router.get("/:id", getABook);

export default router;
