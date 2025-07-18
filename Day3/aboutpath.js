import { log } from "console";
import path from "path"

let mypath = "D:\\Web Development\\Backend_NodeJs\\Day3\\info.txt"

console.log(path.extname(mypath));
console.log(path.dirname(mypath));
console.log(path.basename(mypath));


console.log(path.join("c:/","programs\\info.txt"));
