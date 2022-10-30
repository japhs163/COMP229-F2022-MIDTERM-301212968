/*
JAPHET REYES
301212968
Midterm
 */
module.exports = {
    /* "AtlasDB": "mongodb+srv://user:FRhOCaK8BYgHf9zM@cluster0.y1hpij8.mongodb.net/test" */
        "AtlasDB": "mongodb+srv://user:FRhOCaK8BYgHf9zM@cluster0.y1hpij8.mongodb.net/test"

}
const  mongoose = require("mongoose");

//Assign MongoDB connection string to Uri and declare options settings
var  uri = "mongodb+srv://user:FRhOCaK8BYgHf9zM@cluster0.y1hpij8.mongodb.net/test"

// Declare a variable named option and assign optional settings
const  options = {
useNewUrlParser:  true,
useUnifiedTopology:  true
};

// Connect MongoDB Atlas using mongoose connect method
mongoose.connect(uri, options).then(() => {
console.log("Database connection established!");
},
err  => {
{
console.log("Error connecting Database instance due to:", err);
}
});