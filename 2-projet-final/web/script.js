listOfMovie = [];

//NE PAS TOUCHER
var port = new osc.WebSocketPort({
    url: "ws://localhost:8081"
});



// Cette fonction est appelée lorsqu'un message provenant du logiciel vidéo est arrivé
port.on("message", function(oscMessage) {

    switch (oscMessage.address) {
        case "/addMovie":
            // Ajouter 1 film à la playlist. Les films sont envoyés un par un
            // Normalement tout est écrit 
            console.log("Recu addMovie", oscMessage);
            var movie = createMovie(oscMessage.args);
            listOfMovie.push(movie);
            $("#list").append(htmlDivElement(movie));
            createPlayCallback(movie);

            break;
        case "/playIndex":
            console.log("Recu playIndex", oscMessage);
            // A COMPLETER           
            break;

        case "/playPercentage":
            oscMessage("/player/printActualFrame", 1);
            break;

        default:
            break;
    }
});

//NE PAS TOUCHER
port.open();

var createMovie = function(args) {


    var movie = { index: i, name: n, length: l };
    return movie;
};

//NE PAS TOUCHER - permet d'envoyer un message au logiciel vidéo
var sendOscMessage = function(oscAddress, arg) {
    port.send({
        address: oscAddress,
        args: [arg]
    });

    console.log("message OSC envoyé");
};



$(document).ready(function() {

    $('#refresh').click(function() {
        console.log("Refresh playlist");
        sendOscMessage("/player/refreshPlaylist", 1);
    });


    $('#play').click(function() {
        console.log("play");
        sendOscMessage("/player/play", 1);
        sendOscMessage("/message/message", "J'aime les ballons");
        sendOscMessage("/player/printActualFrame", 1);



    });

    $('#pause').click(function() {
        console.log("pause");
        sendOscMessage("/player/pause", 1);
    });







    // $("#refresh").click(function() {
    //     $.get("playlist.txt", function(data) {

    //         $.each(splitFile(data), function(index, line) {

    //             var index = line[0];
    //             var name = line[1];
    //             var length = line[2];
    //             var movie = createMovie(index, name, length);
    //             $('ul').append(htmlDivElement(movie));
    //             createPlayCallback(movie);

    //         });
    //     });
    // });
});

function htmlDivElement(movie) {

    return '<div class="divFilm zoom"><button type="button" class="btn btn-warning" id="play' + movie.index + '">Play</button>\
    <div class ="divIndex">' + movie.index + '</div>\
    <div class="divTitle">' + movie.name + movie.length + '</div></div>';
}

function createPlayCallback(movie) {
    $('#play' + movie.index).on('click', function() {
        console.log('Lecture du film : ' + movie.name + ', durée : ' + movie.length);
    });

    sendOscMessage("/player/playIndex", movie.index);

}

// function refreshPlayslit() {
//  $('#refresh').click(function(){
//     console.log("Refresh playlist");
//         sendOscMessage("/player/refreshPlaylist", 1);

// Envoit un message au logiciel video pour demander un actualisation de la playlist