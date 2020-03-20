$(document).ready(function() { //Permet d'éxécuter des fonctions quand le DOM est pret 

    $("#refresh").click(function() { // Selectionne le bouton identifier avec l'id refresh.Utilise la fonction .click sur ce bouton qui quand on appuira dessus
        $.get("playlist.txt", function(data) { // Prends le fichier playlist.txt sous forme de la variable data 

            $.each(splitFile(data), function(index, line) {
                /* On utilise la fonction $.each qui prend en paramétre la fonction splitFile qui elle prend en paramétre data qui va séparer les ligne via le paramétre \n
                 */
                var index = line[0];
                var name = line[1];
                var length = line[2];
                var movie = createMovie(index, name, length);




                $('ul').append(htmlDivElement(movie));




            });
        });
    });
});

function htmlDivElement(movie) {

    return "<div class='divFilm zoom'><button type='button' class='btn btn-warning' id='play'" + movie.index + "'>Play</button><div class ='divIndex'>" + movie.index + "</div><div class='divTitle'>" + movie.name + movie.length + "</div></div>";
}

function splitFile(data) {

    var result = []; //Création de la variable result qui correspond a un tableau

    var listOfLine = (data.split('\n')); //Creation de la variable listOfLine qui contient les 'data.split'  
    listOfLine.forEach(line => { /*On utilise la variable listOfLine sur laquelle on applique un forEach qui prend en parametre une variable line, ensuite on crée une variable tab qui elle correspond */
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