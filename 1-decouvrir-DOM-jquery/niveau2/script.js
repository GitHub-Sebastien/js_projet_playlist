var listOfMovie = [];

$(document).ready(function() {

    $("#ui").children('button').click(function() {
        $.get("playlist.txt", function(data) {
            $.each(splitFile(data), function(index, data) {
                $('ul').append(htmlDivElement(data));
            });
        });
    });
});

function htmlDivElement(data) {

    return '<div class="divFilm">' + data + '</div>';
}

function splitFile(data) {
    return (data.split('\n'));
}