const { readFile, writeFile } = require("fs");
// const util = require("util");

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const show = async () => {
  try {
    const data1 = await readFile("./content/first.txt", "utf-8");
    const data2 = await readFile("./content/second.txt", "utf-8");
    await writeFile("./content/promisifySum.txt", `${data1} and ${data2}`, {
      flag: "a",
    });
    console.log(data);
  } catch (error) {}
};

show("./content/first.txt");

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//         return;
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("./content/first.txt")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
