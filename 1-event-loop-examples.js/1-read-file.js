const fs = require("fs");

console.log("Started a first task");

fs.readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("Complete first task");
});
console.log("Starting next task");
