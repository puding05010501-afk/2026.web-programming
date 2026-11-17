const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log("요청 발생");
  console.log(req.method);
  res.setHeader("Content-Type", "text/plain; charset=utf-8");

  const { method, url } = req;
  if (method === "GET" && (url === "/" || url === "/home")) {
    res.statusCode = 200;
    res.end("홈페이지");
  } else if (method === "GET" && url === "/about") {
    res.statusCode = 200;
    res.end("소개페이지");
  } else {
    res.statusCode = 404;
    res.end("페이지 없음");
  }
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`${PORT}번 포트로 서버 실행`);
});