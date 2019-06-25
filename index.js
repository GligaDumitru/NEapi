const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");
const exphbs = require("express-handlebars");
const members = require("./Members");

const app = express();

// Init middleware
app.use(logger);

// Handlebars middleware

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Homepage
app.get("/", (req, res) =>
  res.render("index", {
    title: "Meber appp",
    members
  })
);
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// Set static folder

app.use(express.static(path.join(__dirname, "public")));

// Members Api Routes
app.use("/api/v1/members", require("./routes/api/members"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, _ => console.log(`Server started on port ${PORT}`));
