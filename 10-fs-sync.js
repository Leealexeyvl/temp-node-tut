const { writeFileSync, readFileSync } = require("fs");
console.log("Start");
const first = readFileSync("./content/first.txt", "utf8");
const fs = require("fs");
const second = fs.readFileSync("./content/second.txt", "utf-8");
const write = () => {
  writeFileSync("./content/sum.txt", `${first} and ${second}`);
  console.log("Do our things");
};
write();
console.log("Finish");
