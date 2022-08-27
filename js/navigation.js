const nav = ["Abkhazia", "Samegrelo-Zemo Svaneti", "Guria", "Adjara", "Imereti", "Racha", "Shida Kartli", "Samtskhe-Javakheti", "Kvemo Kartli", "Kakheti", "Mtskheta-Mtianeti", "Tbilisi"];

const linkebi = ["abkhazia.html", "samegrelo.html", "guria.html", "adjara.html", "imereti.html", "racha.html", "shida.html", "samtskhe.html", "kvemo.html", "kakheti.html", "mtianeti.html", "tbilisi.html"];

let navlength = nav.length;
let navtext = "<ul>";

for(let i=0; i<navlength; i++){
    navtext += '<li><a href="' + linkebi[i] +'">' + nav[i] + "</a></li>";
}

navtext += '</ul>';
console.log(navtext);
document.getElementById("nav").innerHTML = navtext;

