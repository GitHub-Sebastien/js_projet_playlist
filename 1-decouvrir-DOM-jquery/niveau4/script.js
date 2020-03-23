$(document).ready(function() {

    $("#refresh").click(function() {
        $.get("playlist.txt", function(data) {

            $.each(splitFile(data), function(index, line) {

                var index = line[0];
                var name = line[1];
                var length = line[2];
                var movie = createMovie(index, name, length);
                $('ul').append(htmlDivElement(movie));
                createPlayCallback(movie);

            });
        });
    });
});

function htmlDivElement(movie) {

    return '<div class="divFilm zoom"><button type="button" class="btn btn-warning" id="play' + movie.index + '">Play</button>\
    <div class ="divIndex">' + movie.index + '</div>\
    <div class="divTitle">' + movie.name + movie.length + '</div></div>';
}

function splitFile(data) {

    var result = [];

    var listOfLine = (data.split('\n'));
    listOfLine.forEach(line => {
        var tab = line.split(',');
        result.push(tab);
    });
    return result;
}

function createMovie(i, n, l) {

    var m = { index: i, name: n, length: l };
    return m;
}

function addMovie(m) {

    listOfMovie.push(m);

}

function createPlayCallback(movie) {
    $('#play' + movie.index).on('click', function() {
        console.log('Lecture du film : ' + movie.name + ', durée : ' + movie.length);
    });
};