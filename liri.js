require("dotenv").config();

// var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);

// var reqest = require("request");

// var movie = process.argv[3];
// var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
 
// console.log(movie);

// --------------------------------------------------------------------------------
var Cmd = process.argv[2];
console.log(Cmd);
var spellItOut;

switch (Cmd){
    case "my-tweets":
        twitter();
        break;

    case "spotify-this-song":
        spotify();
        break;

    case "movie-this":
        omdbapi();
        break;

    case "do-what-it-says":
        doIt();
        break;
};



function twitter(){
    console.log("My Twitter API is not in order yet!");

};

function spotify(){
    console.log("Spotify sings wrong.");
};

function omdbapi(){
    console.log("Give me my movie");
};

function doIt(){
    console.log("Do what I say!");
};

