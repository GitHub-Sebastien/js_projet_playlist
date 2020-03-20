$(document).ready(function() {

    $("#refresh").click(function() {
        $.get("playlist.txt", function(data) {

            $.each(splitFile(data), function(index, data) {
                console.log(data);

                $('ul').append(htmlDivElement(data));
            });
        });
    });
});

function htmlDivElement(data) {

    return '<div class="divFilm">' + data + '</div>';
}

function splitFile(data) {

    data.split('\n');
}
//function htmlDivElement(movie) {

//var html = "";

//return html;

//}

function createMovie(i, n, l) {

    var movie = { i: index, n: data, l: length };
    return movie;
}

//function splitFile(data) {
// completer le code ici
//}

//function addMovie(m) {

//  listOfMovie.push(m);

//}