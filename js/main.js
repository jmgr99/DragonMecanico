function encode_utf8(s) {
  return unescape(encodeURIComponent(s));
}
function decode_utf8(s) {
  return decodeURIComponent(escape(s));
}

var rad1 = "ק"
var rad2 = "ט"
var rad3 = "ל"

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

var conjdict = {'qal':
			           {'perfect':
				             {"Isg":[rad1,qamets,rad2,pataj,rad3,sheva,"ת",daguesh,hireq,"י"],
                      "IIsgm":[rad1,qamets,rad2,pataj,rad3,sheva,"ת",daguesh,qamets],
                      "IIsgf":[rad1,qamets,rad2,pataj,rad3,sheva,"ת",daguesh,sheva],
                      "IIIsgm":[rad1,qamets,rad2,pataj,rad3],
                      "IIIsgf":[rad1,qamets,rad2,sheva,rad3,qamets,"ה"],
                      "Ipl":[rad1,qamets,rad2,pataj,rad3,sheva,"נו",daguesh],
                      "IIplm":[rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,segol,"ם"],
                      "IIplf":[rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,segol,"ן"],
                      "IIIplm":[rad1,qamets,rad2,sheva,rad3,"ו",daguesh],
                      "IIIplf":[rad1,qamets,rad2,sheva,rad3,"ו",daguesh]},
                  'imperfect':
                  	 {"Isg":["א",segol,rad1,sheva,rad2,holem,rad3],
                      "IIsgm":["ת",daguesh,hireq,rad1,sheva,rad2,holem,rad3],
                      "IIsgf":["ת",daguesh,hireq,rad1,sheva,rad2,sheva,rad3,hireq,"י"],
                      "IIIsgm":["י",hireq,rad1,sheva,rad2,holem,rad3,],
                      "IIIsgf":["ת",daguesh,hireq,rad1,sheva,rad2,holem,rad3],
                      "Ipl":["נ",hireq,rad1,sheva,rad2,holem,rad3],
                      "IIplm":["ת",daguesh,hireq,rad1,sheva,rad2,sheva,rad3,"ו",daguesh],
                      "IIplf":["ת",daguesh,hireq,rad1,sheva,rad2,holem,rad3,sheva,"נ",qamets,"ה"],
                      "IIIplm":["י",hireq,rad1,sheva,rad2,sheva,rad3,"ו",daguesh],
                      "IIIplf":["ת",daguesh,hireq,rad1,sheva,rad2,holem,rad3,sheva,"נ",qamets,"ה"]},
                  'participle':
                  		{'mascsg': [rad1,"ו",holem,rad2,tsere,rad3],
                       'femsg':  [rad1,"ו",holem,rad2,segol,rad3,segol,"ת"],
                       'mascpl': [rad1,"ו",holem,rad2,sheva,rad3,hireq,"ים"],
                       'fempl':  [rad1,"ו",holem,rad2,sheva,rad3,"ו",holem,"ת"]},
                  'infinitive':
                  		{'absolute':[rad1,qamets,rad2,"ו",holem,rad3],
                       'construct':["ל",hireq,rad1,sheva,rad2,holem,rad3]},
										 },
              'nifal':
                  {'perfect':{
                      "Isg":["נ",hireq,rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,hireq,"י"],
                      "Ipl":["נ",hireq,rad1,sheva,rad2,pataj,rad3,sheva,"נו",daguesh],
                      "IIsgm":["נ",hireq,rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,qamets],
                      "IIsgf":["נ",hireq,rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,sheva],
                      "IIplm":["נ",hireq,rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,segol,"ם"],
                      "IIplf":["נ",hireq,rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,segol,"ן"],
                      "IIIsgm":["נ",hireq,rad1,sheva,rad2,pataj,rad3],
                      "IIIsgf":["נ",hireq,rad1,sheva,rad2,sheva,rad3,qamets,"ה"],
                      "IIIplm":["נ",hireq,rad1,sheva,rad2,sheva,rad3,"ו",daguesh],
                      "IIIplf":["נ",hireq,rad1,sheva,rad2,sheva,rad3,"ו",daguesh]},
                  'imperfect':{
                      "Isg":["א",segol,rad1,daguesh,qamets,rad2,tsere,rad3],
                      "Ipl":["נ",hireq,rad1,daguesh,qamets,rad2,tsere,rad3],
                      "IIsgm":["ת",daguesh,hireq,rad1,daguesh,qamets,rad2,tsere,rad3],
                      "IIsgf":["ת",daguesh,hireq,rad1,daguesh,qamets,rad2,sheva,rad3,hireq,"י"],
                      "IIplm":["ת",daguesh,hireq,rad1,daguesh,qamets,rad2,sheva,rad3,"ו",daguesh],
                      "IIplf":["ת",daguesh,hireq,rad1,daguesh,qamets,rad2,pataj,rad3,sheva,"נ",qamets,"ה"],
                      "IIIsgm":["י",hireq,rad1,daguesh,qamets,rad2,tsere,rad3],
                      "IIIsgf":["ת",daguesh,hireq,rad1,daguesh,qamets,rad2,tsere,rad3],
                      "IIIplm":["י",hireq,rad1,daguesh,qamets,rad2,sheva,rad3,"ו",daguesh],
                      "IIIplf":["ת",daguesh,hireq,rad1,daguesh,qamets,rad2,pataj,rad3,sheva,"נ",qamets,"ה"]},
                  'imperative':{
                      "IIsgm":["ה",hireq,rad1,daguesh,qamets,rad2,tsere,rad3],
                      "IIsgf":["ה",hireq,rad1,daguesh,qamets,rad2,sheva,rad3,hireq,"י‏"],
                      "IIplm":["ה",hireq,rad1,daguesh,qamets,rad2,sheva,rad3,"ו",daguesh],
                      "IIplf":["ה",hireq,rad1,daguesh,qamets,rad2,pataj,rad3,sheva,"נ",qamets,"ה‏"]},
                  'participle':{
                      "mascsg":["מ",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,tsere,rad3],
                      "femsg":["מ",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,segol,rad3,segol,"ת"],
                      "mascpl":["מ",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,sheva,rad3,hireq,"ים"],
                      "fempl":["מ",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,sheva,rad3,"ו",holem,"ת"]},
                  'infinitive':{
                      'absolute':["ה",hireq,rad1,daguesh,qamets,rad2,holem,rad3],
                      'construct':["ל",sheva,"ה",hireq,rad1,daguesh,qamets,rad2,tsere,rad3]},
                  }
                  }




function correct() {
	var persontest = conjdict['qal']['perfect']
	var randomformm = function rf() {
    		var keys = Object.keys(conjdict);
    		return conjdict[keys[ keys.length * Math.random() << 0]];};
	var a1 = document.getElementById("a1").innerHTML = conjdict['qal']['perfect']['Isg'].join('');}
	var formm = document.getElementById("formm").innerHTML = randomformm

function myFunction() {
	var aa1 = document.getElementById("aa1");
	if (aa1.style.display === "none") {
	  aa1.style.display = "block";
	} else {
	  aa1.style.display = "none";
	}
	}
