import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/todo.js";

let con = await mongoose.connect("mongodb://localhost:27017/todo")
const app = express();
const port = 3000;

// app.get("/", (req, res) => {
//     const todo = new Todo({ title: "Sample Todo", desc: "This is a sample todo item", isDone: false, days: 5 });
//     todo.save();
//     res.send("Hello World!");
// });

app.get("/", (req, res) => {
    const todo = new Todo({ desc: "This is a sample todo item", isDone: false, days: 5 });
    todo.save();
    res.send("Hello World!");
});

// app.get("/a", async (req, res) => {
//     let todo = await Todo.findOne({});
//     res.json({ title: todo.title, desc: todo.desc, isDone: todo.isDone, days: todo.days });
// })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});