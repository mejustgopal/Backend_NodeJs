
use('GopalDatabase');

// Insert a few documents into the courses collection.
db.getCollection('courses').insertMany([
    {
        "name": "Full Stack Web Development",
        "price": 299.99,
        "instructor": "John Doe"
    },
    {
        "name": "Python for Data Science",
        "price": 199.50,
        "instructor": "Jane Smith"
    },
    {
        "name": "Machine Learning Basics",
        "price": 249.00,
        "instructor": "Dr. Alan Turing"
    },
    {
        "name": "Introduction to Cybersecurity",
        "price": 179.00,
        "instructor": "Alice Johnson"
    },
    {
        "name": "React and Redux Masterclass",
        "price": 209.99,
        "instructor": "Bob Martin"
    },
    {
        "name": "DevOps Essentials",
        "price": 189.00,
        "instructor": "Nina Patel"
    },
    {
        "name": "Android App Development",
        "price": 159.49,
        "instructor": "Carlos Ramirez"
    },
    {
        "name": "iOS Development with Swift",
        "price": 219.99,
        "instructor": "Emily Clark"
    },
    {
        "name": "Cloud Computing with AWS",
        "price": 289.00,
        "instructor": "George White"
    },
    {
        "name": "Data Structures and Algorithms",
        "price": 269.75,
        "instructor": "Grace Hopper"
    }
]
);

console.log("Documents inserted into the courses collection.");
