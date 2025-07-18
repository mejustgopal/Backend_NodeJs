const { error, log } = require("console");
const fs = require("fs")

// console.log(fs);

console.log("Starting");
// fs.writeFileSync("info.txt","An apple a day keeps a doctor away");
// fs.writeFile("info1.txt", "A bad worker fights with his tools", () => {
//     console.log("done");
//     fs.readFile("info1.txt", (error, data) => {
//         console.log(error, data.toString());

//     })

// });

fs.appendFile("info.txt"," BOOm",(e,d)=>{
    console.log(d);
    
})

console.log("Ending");

