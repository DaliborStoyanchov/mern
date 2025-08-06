import express from "express";

const app = express();

app.get("/notes", (req, res) => {
  res.status(200).send("You got 5 notes");
});

app.post("/notes", (req, res) => {
  res.status(201).json({ message: "Post created successfully!" });
});

app.put("/notes/:id", (req, res) => {
  res.status(200).json({ message: "Post updated successfully!" });
});

app.delete("/notes/:id", (req, res) => {
  res.status(200).json({ message: "Post deleted successfully!" });
});

app.listen(5001, () => {
  console.log("Server is up and running at PORT: 5001");
});
