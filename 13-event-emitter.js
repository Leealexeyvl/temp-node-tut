const EventEmitter = require("events");

const customEvent = new EventEmitter();

customEvent.on("response", () => {
  console.log("Opa...");
});
customEvent.on("response", (par) => {
  console.log(`opachki ${par}`);
});

customEvent.emit("response", "suki");
