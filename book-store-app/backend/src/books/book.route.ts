import { Router } from "express";
import { createBook, getAllBooks } from "./book.controller.ts";

const router = Router();

router.post("/", createBook);
router.get("/", getAllBooks);

export default router;
