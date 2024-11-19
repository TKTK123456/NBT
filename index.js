import * as NBT from "nbtify";
import fs from "node:fs";
async function convertFromDat() {
const file = fs.readFileSync("./b+M7ZwFnAgA=/level.dat");
let string = await NBT.read(file)
string = NBT.stringify(string)
fs.writeFileSync("./level.txt", string)
}
async function convertToDat() {
const file = fs.readFileSync("./level.txt");
let output = NBT.parse(file.toString())
output = await NBT.write(output)
fs.writeFileSync("./b+M7ZwFnAgA=/level.dat", output)
}