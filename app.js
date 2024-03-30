const express = require("express");
const app = express();
const cookieParser = require("cookie-parser"); //cookie parser package

//loading cookieParser in express to parse cookies
app.use(cookieParser("thisissecret")); //adding secret msg in cookieParser to support signed cookie

app.get("/greet", (req, res) => {
  // console.log(req.cookies)
  const { name = "noName" } = req.cookies;
  res.send(`hey there ${name}`);
});

app.get("/setname", (req, res) => {
  res.cookie("name", "xhinsoo");
  res.cookie("message", "You suck");
  res.send("Setting cookies");
});

app.get("/getsignedcookies", (req, res) => {
  res.cookie("fruit", "grape", { signed: true });
  res.send("signed cookies");
});

app.get("/getverified", (req, res) => {
  res.send(req.cookies); //cannot see signed cookies
  res.send(req.signedCookies); //can see signed cookies
});
app.listen(3000, () => {
  console.log("listening 3000");
});
