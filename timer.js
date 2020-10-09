function odliczanie() {
    const date = new Date();

    var rok = date.getFullYear();
    var miesiac = date.getMonth();
    var dzien = date.getDay();
    var godzina = date.getHours();
    var minuta = date.getMinutes();
    var sekunda = date.getSeconds();

    document.getElementsByClassName("timer")[0].innerHTML = `Dzien: ${dzien}, miesiac: ${miesiac}, rok: ${rok}, godzin: ${godzina}, minut: ${minuta}, sekund: ${sekunda}`;
    setTimeout(odliczanie, 1000);
}