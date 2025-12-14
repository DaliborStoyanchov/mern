import { Router } from "express";
import { createBook } from "./book.controller.ts";

const router = Router();

router.post("/", createBook);

export default router;
