const http = require("http");
const { add } = require("./calculator");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "ok" }));
    return;
  }

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      message: "GitHub Actions Learning",
      example: add(2, 3),
    }),
  );
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
