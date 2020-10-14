function onload()
{
  slider();
  odliczanie();
}
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
var number = Math.floor(Math.random()*5)+1;

function slider()
{
  number++; if (number>5) number=1;
var img = "<img src=\"slajd/slajd" + number + ".png\"/>";
  document.getElementById("slider").innerHTML = img;
  setTimeout("slider()", 5000);

}
function sprawdz()
{
    var liczba = document.getElementById("pole").value;
    
    if (liczba>0) document.getElementById("wynik").innerHTML="dodatnia";
    else if (liczba<0) document.getElementById("wynik").innerHTML="ujemna";
    else if (liczba==0) document.getElementById("wynik").innerHTML="zero";
    else document.getElementById("wynik").innerHTML="to nie jest liczba";
}
function zakres()
{
  var liczba1 = document.getElementById("pole1").value;
  var liczba2 = document.getElementById("pole2").value;
  var napis = "";
  
  for (i=liczba1; i<=liczba2; i++)
  {
      napis = napis + i + "";
  }
  for (i=liczba1; i>=liczba2; i--)
  {
    napis = napis + i + "";
  }
document.getElementById("wynik2").innerHTML = napis;
}
