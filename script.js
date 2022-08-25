//Définir une date

var deadline = new Date("aug 31, 2022 21:00:00").getTime();

//Calculer

var x = setInterval(function() {
var now = new Date().getTime();
var t = deadline - now;
var days = Math.floor(t / (1000 * 60 * 60 * 24));
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((t % (1000 *60)) / 1000);

//La sortie du résultat

document.getElementById("demo").innerHTML = days + "j " + hours + "h " + minutes + "m " + seconds + "s ";

//Texte de compte à rebours terminé

    if (t < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Dommage vous venez de râter une belle promotion";
    }
}, 1000)
