require("dotenv").config();

var keys = require("./keys.js");
//vars to capture user inputs.
var axios = require("axios");
var userOption = process.argv[2];
var inputParameter = process.argv[3];
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);
var moment = require('moment');

//to execute functions
UserInputs(userOption, inputParameter);

//functions for user
function UserInputs(userOption, inputParameter) {
    switch (userOption) {
        case 'concert-this':
            concertInfo(inputParameter);
            //console.log("concert ");
            break;
        case 'spotify-this-song':
            spotifyInfo(inputParameter);
            //console.log("song");
            break;
        case 'movie-this':
            movieInfo(inputParameter);
            //console.log("movie");
            break;
        case 'do-what-it-says':
            //this should pull from random.txt and pull a request when no inputParameter is given
            randomInfo();
            //console.log("says");
            break;

    }
}

//pulling from bandsintown api and spaciously displaying the result of next concert
function concertInfo(inputParameter) {
    axios.get("https://rest.bandsintown.com/artists/" + inputParameter + "/events?app_id=codingbootcamp").then(
        function (response) {
            console.log("");
            console.log(">--PERFORMING RITUALS TO THE MYSTICS TO RETRIEVE YOUR DESIRED DATA--<");
            console.log("");
            console.log("Venue Name: " + response.data[0].venue.name);
            console.log("Venue Location: " + response.data[0].venue.city + ", " + response.data[0].venue.country);
            console.log("Event Date: " + moment(response.data[0].venue.datetime).format("MM/DD/YYYY"));
            console.log("");
        })
}

//pulling up to 5 songs from spotify api since there are a lot of songs out there 
//and spaciously displaying each entry
function spotifyInfo(inputParameter) {
    spotify.search(
        { type: "track", query: inputParameter },
        function (err, data) {
            if (err) {
                console.log("Error occurred: " + err);
                return;
            }
            var listing = data.tracks.items;
            console.log("");
            console.log(">--PERFORMING RITUALS TO THE MYSTICS TO RETRIEVE YOUR DESIRED DATA--<");
            for (var i = 0; i < 5; i++) {
                console.log("");
                console.log("Artist(s): " + listing[i].artists[0].name);
                console.log("Song name: " + listing[i].name);
                console.log("Preview song: " + listing[i].preview_url);
                console.log("Album: " + listing[i].album.name);
                console.log("");
            }
        });
}