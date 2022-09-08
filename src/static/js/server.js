
const compression = require('compression');
const express = require("express");
const path = require("path");
const app = express();
const shouldCompress = (req, res) => {
  if (req.headers['x-no-compression']) return false;
  return compression.filter(req, res);
};
app.use(compression({ filter: shouldCompress, threshold: 0 }));
app.use("/src", express.static(path.resolve(__dirname, "src")));
// rotas
app.get("/", (req, res) => { res.sendFile(path.resolve(__dirname, "./index_dashboard.html")); });
app.get("/catalog", (req, res) => { res.sendFile(path.resolve(__dirname, "./index_catalog.html")); });
app.get("/catalog_user", (req, res) => { res.sendFile(path.resolve(__dirname, "./index_catalog_user.html")); });
app.get("/catalog_poster", (req, res) => { res.sendFile(path.resolve(__dirname, "./index_catalog_poster.html")); });
app.get("/item", (req, res) => { res.sendFile(path.resolve(__dirname, "./index_item.html")); });
app.get("/faq", (req, res) => { res.sendFile(path.resolve(__dirname, "./index_faq.html")); });
app.get("/register", (req, res) => { res.sendFile(path.resolve(__dirname, "./index_register.html")); });
app.get("/login", (req, res) => { res.sendFile(path.resolve(__dirname, "./index_login.html")); });
app.get("/loginAdmin", (req, res) => { res.sendFile(path.resolve(__dirname, "./index_loginAdmin.html")); });
app.get("/logout", (req, res) => { res.sendFile(path.resolve(__dirname, "./index_logout.html")); });
app.get("/cart", (req, res) => { res.sendFile(path.resolve(__dirname, "./index_cart.html")); });
app.get("/production", (req, res) => { res.sendFile(path.resolve(__dirname, "./index_production.html")); });
// start!
app.listen(80, () => console.log("Server running...80"));
