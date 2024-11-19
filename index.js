import * as NBT from "nbtify";
import fs from "node:fs";
async function convertFromDat(fromUrl) {
  const file = fs.readFileSync(fromUrl);
  let string = await NBT.read(file);
  string = NBT.stringify(string);
  fs.writeFileSync("./level.txt", string);
}
async function convertToDat(toUrl) {
  const file = fs.readFileSync("./level.txt");
  let output = NBT.parse(file.toString());
  //console.log(output);
  output = await NBT.write(output);
  fs.promises.writeFile(toUrl, output);
}
//convertFromDat("./pKnfyrM4LEo=/level.dat");
//convertToDat("./pKnfyrM4LEo=/level.dat");
convertToDat("./level.dat");