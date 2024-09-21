const nunjucks = require("nunjucks");
const path = require("path");

const viewpath = path.join(__dirname, "../views");

nunjucks.configure(viewpath, {
  autoescape: true,
  throwOnUndefined: true,
});
// app.set("views", viewpath);
// app.set("view engine", "html");

exports.handler = async (event, context) => {
  try {
    // Render the Nunjucks template
    const html = nunjucks.render("patient_data.html", {
      // You can pass data to the template here if needed
      title: "Patient Data",
      // Add other context variables as necessary
    });

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "text/html",
      },
      body: html,
    };
  } catch (error) {
    console.error("Error rendering template:", error);
    return {
      statusCode: 500,
      body: "Internal Server Error",
    };
  }
};
