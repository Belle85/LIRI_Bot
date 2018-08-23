require("dotenv").config();


// var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);
var fs = require("fs");

var request = require("request");
var nodeArgs = process.argv;
var movieInput = "";

// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
for (var i = 3; i < nodeArgs.length; i++) {

    if (i > 3 && i < nodeArgs.length) {

        movieInput = movieInput + "+" + nodeArgs[i];

    }

    else {

        movieInput += nodeArgs[i];

    }
};
console.log(movieInput);



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
        omdbapi();
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

    var queryURL = "https://www.omdbapi.com/?t=" + movieInput + "&y=&plot=short&apikey=trilogy";

    request(queryURL, function (error, response, body) {


        if (!error && response.statusCode === 200) {

            console.log('Movie title: ' + JSON.parse(body).Title);
            console.log('Year: ' + JSON.parse(body).Year);
            console.log('Rated: ' + JSON.parse(body).Rated);
            console.log('Language: ' + JSON.parse(body).Language);
            console.log('Country: ' + JSON.parse(body).Country);
            console.log('Director: ' + JSON.parse(body).Director);
            console.log('Actors: ' + JSON.parse(body).Actors);
            console.log('Plot: ' + JSON.parse(body).Plot);

        }
    })
};


function doIt() {
    console.log("Do what I say!");

    fs.readFile("random.txt", "utf8", function (error, data) {

        if (error) {
            return console.log(error);
        }


        console.log(data);


        var dataArr = data.split(",");


        console.log(dataArr);

    });

};
