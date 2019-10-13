require("dotenv").config();
var keys = require("./keys.js");
//var spotify = new Spotify(keys.spotify);
//vars to capture user inputs.
var userOption = process.argv[2]; 
var inputParameter = process.argv[3];

//Execute function
UserInputs(userOption, inputParameter);

//FUNCTIONS
function UserInputs (userOption, inputParameter){
    switch (userOption) {
        case 'concert-this':
            console.log("concert");
          break;
        case 'spotify-this-song':
            console.log("song");
          break;
        case 'movie-this':
            console.log("movie");
          break;
        case 'do-what-it-says':
            console.log("says");
          break;


    }
}