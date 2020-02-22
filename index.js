const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");

var app = express();

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded());

app.use(morgan("dev"));
app.use(require("./routes/routesRouter"));

app.listen(process.env.PORT || PORT, () => {
  console.log(`server running on ${process.env.PORT || PORT}`);
});
