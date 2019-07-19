// // Your `htmlRoutes.js` file should include two routes:

// * A GET Route to `/survey` which should display the survey page.
// * A default, catch-all route that leads to `home.html` which displays the home page.

var path = require("path");

//html routes
module.exports = function (app) {
    app.get("/", function (req, res) {
        res.sendfile(path.join(__dirname, "../public/survey.html"));
    });
};