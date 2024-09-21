const express = require("express");
const nunjucks = require("nunjucks");
const serverless = require("serverless-http");

const app = express();

// Configure Nunjucks
nunjucks.configure("views", {
  autoescape: true,
  throwOnUndefined: true,
});

// Define an endpoint
app.get("/showpage", (req, res) => {
  const html = nunjucks.render("patient_data.html", {
    title: "Patient Data",
  });
  res.send(html);
});

// Export as a serverless function
module.exports.handler = serverless(app);
