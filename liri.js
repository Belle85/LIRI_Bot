require("dotenv").config();


// var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);

var request = require("request");
var nodeArgs = process.argv;
var movieInput = "";

// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
for (var i = 3; i < nodeArgs.length; i++) {

    if (i > 3 && i < nodeArgs.length) {

        movieInput = movieName + "+" + nodeArgs[i];

    }

    else {

        movieInput += nodeArgs[i];

    }
}



// --------------------------------------------------------------------------------
var Cmd = process.argv[2];
console.log(Cmd);

switch (Cmd) {
    case "my-tweets":
        twitter();
        break;

    case "spotify-this-song":
        spotify();
        break;

    case "movie-this":
        if (movieInput) {
            omdbapi(movieInput)
        } else {
            omdbapi("Mr. Nobody")
        };
        break;

    case "do-what-it-says":
        doIt();
        break;
};



function twitter() {
    console.log("My Twitter API is not in order yet!");
};

function spotify() {
    console.log("Spotify sings wrong.");
};



function omdbapi() {
    console.log("Give me my movie");

    // var movie = process.argv[3];
    var queryURL = "https://www.omdbapi.com/?t=" + movieInput + "&y=&plot=short&apikey=trilogy";

    request(queryURL, function (error, response, body) {
        if (!error && response.statusCode === 200) {


            console.log("This is my body:" + (body));


        }
    })
};

function doIt() {
    console.log("Do what I say!");
};
