import fs from "fs/promises"

let a = await fs.readFile("info.txt")


let b = await fs.appendFile("info1.txt","\n\n\n\n\nWah mere sher tune isme kuch append kar diya hai 👌");

console.log(a.toString(),b);