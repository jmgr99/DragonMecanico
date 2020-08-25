function encode_utf8(s) {
  return unescape(encodeURIComponent(s));
}
function decode_utf8(s) {
  return decodeURIComponent(escape(s));
}

var testroot = "x";
var rad1 = 'ח'
var rad2 = 'ל'
var rad3 = 'ק'

var sheva = decode_utf8('\xD6\xB0');
var hatefsegol = decode_utf8('\xD6\xB1');
var hatefpataj = decode_utf8('\xD6\xB2\x20');
var hatefqamets = decode_utf8('\xD6\xB3\x20');
var hireq = decode_utf8('\xD6\xB4');
var tsere = decode_utf8('\xD6\xB5');
var segol = decode_utf8('\xD6\xB6');
var pataj = decode_utf8('\xD6\xB7');
var qamets = decode_utf8('\xD6\xB8');
var holem = decode_utf8('\xD6\xB9');
var qubuts = decode_utf8('\xD6\xBB\x20');
var daguesh = decode_utf8('\xD6\xBC');

var conjdict = {"qal":{'perfect': {"Isg":
[rad1,qamets,rad2,pataj,rad3,sheva,"ת",daguesh,hireq,"י",],
"Ipl":
[rad1,qamets,rad2,pataj,rad3,sheva,"נ","ו",daguesh,],
"IIsgm":
[rad1,qamets,rad2,pataj,rad3,sheva,"ת",daguesh,qamets,],
"IIsgf":
[rad1,qamets,rad2,pataj,rad3,sheva,"ת",daguesh,sheva,],
"IIplm":
[rad1,"ֲ",rad2,pataj,rad3,sheva,"ת",daguesh,segol,"ם",],
"IIplf":
[rad1,"ֲ",rad2,pataj,rad3,sheva,"ת",daguesh,segol,"ן",],
"IIIsgm":
[rad1,qamets,rad2,pataj,rad3,],
"IIIsgf":
[rad1,qamets,rad2,sheva,rad3,qamets,"ה",],
"IIIplm":
[rad1,qamets,rad2,sheva,rad3,"ו",daguesh,],
"IIIplf":
[rad1,qamets,rad2,sheva,rad3,"ו",daguesh,],
},'imperfect': {"Isg":
["א",segol,rad1,hatefsegol,rad2,holem,rad3,],
"Ipl":
["נ",pataj,rad1,"ֲ",rad2,holem,rad3,],
"IIsgm":
["ת",daguesh,pataj,rad1,"ֲ",rad2,holem,rad3,],
"IIsgf":
["ת",daguesh,pataj,rad1,pataj,rad2,sheva,rad3,hireq,"י",],
"IIplm":
["ת",daguesh,pataj,rad1,pataj,rad2,sheva,rad3,"ו",daguesh,],
"IIplf":
["ת",daguesh,pataj,rad1,"ֲ",rad2,holem,rad3,sheva,"נ",qamets,"ה",],
"IIIsgm":
["י",pataj,rad1,"ֲ",rad2,holem,rad3,],
"IIIsgf":
["ת",daguesh,pataj,rad1,"ֲ",rad2,holem,rad3,],
"IIIplm":
["י",pataj,rad1,pataj,rad2,sheva,rad3,"ו",daguesh,],
"IIIplf":
["ת",daguesh,pataj,rad1,"ֲ",rad2,holem,rad3,sheva,"נ",qamets,"ה",],
},'imperative': {"IIsgm":
[rad1,"ֲ",rad2,holem,rad3,"!","‏",],
"IIsgf":
[rad1,hireq,rad2,sheva,rad3,hireq,"י","!","‏",],
"IIplm":
[rad1,hireq,rad2,sheva,rad3,"ו",daguesh,"!","‏",],
"IIplf":
[rad1,"ֲ",rad2,holem,rad3,sheva,"נ",qamets,"ה","!","‏",],
},'participle': {"mascsg":
[rad1,"ו",holem,rad2,tsere,rad3,],
"femsg":
[rad1,"ו",holem,rad2,segol,rad3,segol,"ת",],
"mascpl":
[rad1,"ו",holem,rad2,sheva,rad3,hireq,"י","ם",],
"fempl":
[rad1,"ו",holem,rad2,sheva,rad3,"ו",holem,"ת",],
},'infinitive': {"Construct":
[rad2,pataj,rad1,"ֲ",rad2,holem,rad3,],
},}
                
function conjugate (root, verbform, time, person){var x = conjdict[verbform][time][person].join('');
                                                  return x;}

window.onload = function() {
document.getElementById("root").innerHTML = 'קטל';
document.getElementById("form").innerHTML = 'Qal';
document.getElementById("a1").innerHTML = conjugate(testroot,'qal','perfect','Isg');
document.getElementById("a2").innerHTML = conjugate(testroot,'qal','perfect','IIsgm');
document.getElementById("a3").innerHTML = conjugate(testroot,'qal','perfect','IIsgf');
document.getElementById("a4").innerHTML = conjugate(testroot,'qal','perfect','IIIsgm');
document.getElementById("a5").innerHTML = conjugate(testroot,'qal','perfect','IIIsgf');
document.getElementById("a6").innerHTML = conjugate(testroot,'qal','perfect','Ipl');
document.getElementById("a7").innerHTML = conjugate(testroot,'qal','perfect','IIplm');
document.getElementById("a8").innerHTML = conjugate(testroot,'qal','perfect','IIplf');
document.getElementById("a9").innerHTML = conjugate(testroot,'qal','perfect','IIIplm');
document.getElementById("a10").innerHTML = conjugate(testroot,'qal','perfect','IIIplf');
document.getElementById("b1").innerHTML = conjugate(testroot,'qal','imperfect','Isg');
document.getElementById("b2").innerHTML = conjugate(testroot,'qal','imperfect','IIsgm');
document.getElementById("b3").innerHTML = conjugate(testroot,'qal','imperfect','IIsgf');
document.getElementById("b4").innerHTML = conjugate(testroot,'qal','imperfect','IIIsgm');
document.getElementById("b5").innerHTML = conjugate(testroot,'qal','imperfect','IIIsgf');
document.getElementById("b6").innerHTML = conjugate(testroot,'qal','imperfect','Ipl');
document.getElementById("b7").innerHTML = conjugate(testroot,'qal','imperfect','IIplm');
document.getElementById("b8").innerHTML = conjugate(testroot,'qal','imperfect','IIplf');
document.getElementById("b9").innerHTML = conjugate(testroot,'qal','imperfect','IIIplm');
document.getElementById("b10").innerHTML = conjugate(testroot,'qal','imperfect','IIIplf');
document.getElementById("c1").innerHTML = conjugate(testroot,'qal','imperative','IIsgm');
document.getElementById("c2").innerHTML = conjugate(testroot,'qal','imperative','IIsgf');
document.getElementById("c3").innerHTML = conjugate(testroot,'qal','imperative','IIplm');
document.getElementById("c4").innerHTML = conjugate(testroot,'qal','imperative','IIplf');
document.getElementById("d1").innerHTML = conjugate(testroot,'qal','participle','mascsg');
document.getElementById("d2").innerHTML = conjugate(testroot,'qal','participle','femsg');
document.getElementById("d3").innerHTML = conjugate(testroot,'qal','participle','mascpl');
document.getElementById("d4").innerHTML = conjugate(testroot,'qal','participle','fempl');
document.getElementById("e1").innerHTML = conjugate(testroot,'qal','infinitive','absolute');
document.getElementById("e2").innerHTML = conjugate(testroot,'qal','infinitive','construct');
};
