const express = require("express");
const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.get("/", (req, res) => {
    res.status(200);
    res.send("Hello,world");
});

app.get("/home", (req, res) => {
    res.status(200);
    res.send("home");

    app.get("/about", (req, res) => {
    res.status(200);
    res.send("about");
});
});

app.listen(PORT, () => {
  console.log(`${PORT}번 포트로 서버 실행`);
});