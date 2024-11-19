import * as NBT from "nbtify";
import fs from "node:fs";
async function convertFromDat(fromUrl) {
const file = fs.readFileSync(fromUrl);
let string = await NBT.read(file)
string = NBT.stringify(string)
fs.writeFileSync("./level.txt", string)
}
async function convertToDat(toUrl) {
const file = fs.readFileSync("./level.txt");
let output = NBT.parse(file.toString())
output = await NBT.write(output)
fs.writeFileSync(toUrl, output)
}
convertToDat("./b+M7ZwFnAgA=/level.dat_old")