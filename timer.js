function odliczanie() {
    const date = new Date();

    var rok = date.getFullYear();
    var miesiac = date.getMonth();
    var dzien = date.getDay();
    var godzina = date.getHours();
    var minuta = date.getMinutes();
    var sekunda = date.getSeconds();

    document.getElementsByClassName("timer")[0].innerHTML = `Dzień: ${dzien}, miesiąc: ${miesiac}, rok: ${rok}, godzin: ${godzina}, minut: ${minuta}, sekund: ${sekunda}`;
    setTimeout(odliczanie, 1000);
}
function sprawdz()
{
    var liczba = document.getElementById("pole").value;
    
    if (liczba>0) document.getElementById("wynik").innerHTML="dodatnia";
    else if (liczba<0) document.getElementById("wynik").innerHTML="ujemna";
    else if (liczba==0) document.getElementById("wynik").innerHTML="zero";
    else document.getElementById("wynik").innerHTML="to nie jest liczba";
}