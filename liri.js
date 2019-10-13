require("dotenv").config();

var keys = require("./keys.js");
//var spotify = new Spotify(keys.spotify);
//vars to capture user inputs.
var axios = require("axios");
var userOption = process.argv[2]; 
var inputParameter = process.argv[3];
var moment = require('moment');

//Execute function
UserInputs(userOption, inputParameter);

//FUNCTIONS
function UserInputs (userOption, inputParameter){
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
 
function concertInfo(inputParameter) {
    axios.get("https://rest.bandsintown.com/artists/" + inputParameter + "/events?app_id=codingbootcamp").then(
        function(response) {
          console.log("");
          console.log(">--PERFORMING RITUALS TO THE MYSTICS TO RETRIEVE YOUR DESIRED DATA--<");
          console.log("");
          console.log("Venue Name: " + response.data[0].venue.name);
          console.log("Venue Location: " + response.data[0].venue.city + ", " + response.data[0].venue.country);
          console.log("Event Date: " + moment(response.data[0].venue.datetime).format("MM/DD/YYYY"));
          console.log("");
        })
}