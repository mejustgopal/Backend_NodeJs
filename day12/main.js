import express from 'express';
import mongoose from 'mongoose';


import { Employee } from './models/Employee.js';

mongoose.connect("mongodb://localhost:27017/company");

const app = express();
const port = 3000;

app.set('view engine', 'ejs')

const getRandom = (arr) => {
    let randomNo = Math.floor(Math.random() * arr.length)
    return arr[randomNo]
}

app.get('/', (req, res) => {
    res.render('index');
})
app.get('/generate', async (req, res) => {

    //Clear the collection Employee
    await Employee.deleteMany({});
    let employees = [];

    //Generate random data
    let names = ["Gopal", "Ravi", "Sita", "Geeta", "Rohan", "Rahul", "Amit", "Anil", "Sunita", "Priya"];
    let languages = ["JavaScript", "Python", "Java", "C++", "Ruby", "Go", "C#", "PHP", "Swift", "Kotlin"];
    let cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"];


    for (let index = 0; index < 10; index++) {
        let emp = await Employee.create(
            {
                name: getRandom(names),
                salary: Math.floor(Math.random() * (100000 - 50000 + 1)) + 50000,
                language: getRandom(languages),
                city: getRandom(cities),
                isManager: Math.random() > 0.5
            }
        );
        // console.log(emp);
        employees.push(emp);

    }

    // res.render('index');
    res.json(employees);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
