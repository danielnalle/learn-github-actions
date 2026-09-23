const fs = require("fs");

fs.mkdirSync("dist", { recursive: true });
fs.writeFileSync("dist/build.txt", "Build completed successfully\n");

console.log("Build completed");
