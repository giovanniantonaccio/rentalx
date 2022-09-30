import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ msg: "hello world" });
});

app.listen(3333, () => {
  console.log("🚀 Server started on port 3333!");
});
