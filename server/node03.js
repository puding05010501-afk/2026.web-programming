const http = require("http");

const server = http.createServer((req,res)=>{
  console.log("요청 발생");
  console.log(req.method);
  res.setHeader("Content-Type","text/plain");
  //res.write("Hello, Node!");
  //res.end();
  //res.setHeader("Content.Type","text/html");
  //const readStream = fs.createReadStream(__dirname+"/index.html", "uft8");
  //readStream.pipe(res)
  const {method, url} = req;
  if(method === "GET" && url === "/home"){
    res.statusCode = 200;
    res.end("홈페이지");
  } else if(method === "GET" && url === "/about"){
    res.statusCode = 200;
    res.end("소개페이지");
  } else {
    res.statusCode = 404;
    res.end("페이지 없음");
  }
})

server.listen(PORT, ()=>{
  console.log(`${PORT}번 포트로 서버 실행`);
});