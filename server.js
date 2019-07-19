// require express and path

const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;
//heroku will attach the port it will use to the variable PORT, else the variable will be empty and it will use 3000 instead (as in local environment)

//data handling
// express deprecated res.sendfile: Use res.sendFile instead app\routing\htmlRoutes.js:11:13

app.use(express.urlencoded({ extended:true}));
//extended:true adds checks layer to data
app.use(express.json());
//data will be transformed into and trasnferred using json format

//to give access to users
app.use(express.static("app/public"));
//css file needs to be in the public folder for it to be able to be found

//will route to the file
// require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log(`App listening on http://localhost:${PORT}`);
});

