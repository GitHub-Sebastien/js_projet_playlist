var listOfMovie = [];

$(document).ready(function() {

    $("#ui").children('button').click(function() {
        $.get("playlist.txt", function(data) {
            var data1 = (data.split('\n'));

            console.log(data1);

            $.each(data1, function(index, value) {
                $('ul').append('<li>' + value + '</li>');
            });
        });
    });



    function htmlDivElement(value) {

        return '<div class="divFilm">' + value + '</div>';
    }







    function splitFile(data) {
        data = (data.split('\n'));


    }





});