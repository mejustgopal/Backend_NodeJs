//CRUD OPERATIONS
use("CrudDb");
// console.log(db);

//CREATE OPERATIONS

// db.createCollection("courses");
// db.courses.insertOne({
//   name: "MongoDB Basics",});
// db.courses.insertMany([
//     {
//         "name": "Python Basics",
//         "price": 500,
//         "assignments": 50,
//         "projects": 10
//     },
//     {
//         "name": "Java Fundamentals",
//         "price": 700,
//         "assignments": 40,
//         "projects": 8
//     },
//     {
//         "name": "Web Development",
//         "price": 1200,
//         "assignments": 60,
//         "projects": 12
//     },
//     {
//         "name": "Data Structures in C++",
//         "price": 900,
//         "assignments": 55,
//         "projects": 9
//     },
//     {
//         "name": "JavaScript Essentials",
//         "price": 600,
//         "assignments": 45,
//         "projects": 7
//     },
//     {
//         "name": "React.js Masterclass",
//         "price": 1500,
//         "assignments": 70,
//         "projects": 15
//     },
//     {
//         "name": "Machine Learning Intro",
//         "price": 2000,
//         "assignments": 80,
//         "projects": 18
//     },
//     {
//         "name": "Database Management",
//         "price": 1000,
//         "assignments": 50,
//         "projects": 10
//     },
//     {
//         "name": "Cybersecurity Basics",
//         "price": 1100,
//         "assignments": 60,
//         "projects": 11
//     },
//     {
//         "name": "Android App Development",
//         "price": 1300,
//         "assignments": 65,
//         "projects": 13
//     }
// ]
// );

//READ OPERATIONS

// let a = db.courses.find({ price: { $gt: 1000 } }).toArray();
// console.log(a);

// let b = db.courses.find({ price: { $lt: 1000 } }).count();
// console.log(b);

// let c = db.courses.findOne({price:500})
// console.log(c);

//UPDATE

// db.courses.updateOne({ price: 500 }, { $set: { price: 555 } })

// console.log(db.courses.findOne({ price: 555 }));

// db.courses.updateMany({ price: 500 }, { $set: { price: 555 } });

// console.log(db.courses.find({ price: 555 }));

//DELETE

// db.courses.deleteOne({price:500})

// db.courses.deleteOne({price:555})

db.courses.deleteMany({price:700})