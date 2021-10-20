const os = require("os");
const user = os.userInfo();
console.log(user);
console.log(`This computer is on ${os.uptime / 60 / 60} hours`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOs);
