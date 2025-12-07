import express from "express";
import type { Request, Response } from "express";

const app = express();
app.use(express.json());

const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello TypeScript + Express!");
});

app.listen(3000, () => {
  console.log(`Server is up and running on port: ${port}`);
});
