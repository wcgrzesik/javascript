// To jest tzw. Module Pattern czyli caly kod js opakowany w IIFE
// Dzięki takiemu zabiegowi nasz kod nie będzie kolidował z innymi bibliotekami
// Jesli kod jest zapisany tak jak wczesniej, to funkcje sa zadeklarowane globalnie, a to prowadzi do kolizji z innymi bibliotekami
// Wyobraz sobie sytuacje, w ktorej inna biblioteka udostepnia globalnie zadeklarowana funkcje "odliczanie", w takiej sytuacji twoj kod
// nadpisywalby ta funkcje. Jesli funkcja jest deklarowana w zakresie lokalnym (tutaj jest to zakres funkcji IIFE), to jej implementacja nie nadpisze niczego co sie znajduje w zasiegu globalnym
// Zapoznaj sie z tematem zasięgu zmiennych: "Scope"
(() => {
  function odliczanie() {
    const date = new Date();

    const rok = date.getFullYear();
    const miesiac = date.getMonth();
    const dzien = date.getDay();
    const godzina = date.getHours();
    const minuta = date.getMinutes();
    const sekunda = date.getSeconds();

    document.getElementsByClassName("timer")[0].innerHTML = `Dzień: ${dzien}, miesiąc: ${miesiac}, rok: ${rok}, godzin: ${godzina}, minut: ${minuta}, sekund: ${sekunda}`;
  }
  let number = Math.floor(Math.random() * 5) + 1;

  function slider() {
    number++;
    if (number > 5) number = 1;
    const img = "<img src=\"slajd/slajd" + number + ".png\"/>";
    document.getElementById("slider").innerHTML = img;
  }

  function sprawdz() {
    const liczba = document.getElementById("pole").value;

    if (liczba > 0) document.getElementById("wynik").innerHTML = "dodatnia";
    else if (liczba < 0) document.getElementById("wynik").innerHTML = "ujemna";
    else if (liczba == 0) document.getElementById("wynik").innerHTML = "zero";
    else document.getElementById("wynik").innerHTML = "to nie jest liczba";
  }

  function zakres() {
    const liczba1 = document.getElementById("pole1").value;
    const liczba2 = document.getElementById("pole2").value;
    let napis = "";

    for (i = liczba1; i <= liczba2; i++) {
      napis = napis + i + "";
    }
    for (i = liczba1; i >= liczba2; i--) {
      napis = napis + i + "";
    }
    document.getElementById("wynik2").innerHTML = napis;
  }


  setInterval(slider, 1000);
  setInterval(odliczanie, 1000);

  document.getElementById('zakres').onclick = zakres;
  document.getElementById('sprawdz').onclick = sprawdz;
})();