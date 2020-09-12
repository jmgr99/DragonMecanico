const firebaseConfig = {
  apiKey: "AIzaSyBsZFq8AkBEAj4D9dUQRmv26de4O2WYUt0",
  authDomain: "testbase-c6baf.firebaseapp.com",
  databaseURL: "https://testbase-c6baf.firebaseio.com",
  projectId: "testbase-c6baf",
  storageBucket: "testbase-c6baf.appspot.com",
  messagingSenderId: "986174073958",
  appId: "1:986174073958:web:2ad398c369d8772dc091a7",
  measurementId: "G-51XCK3G98W"
};
function encode_utf8(s) {
  return unescape(encodeURIComponent(s));
}
function decode_utf8(s) {
  return decodeURIComponent(escape(s));
}
var round = 0
var corrected = 0
var resultperson = [];
var resulttime = [];
var resultform = [];
var verbs = [];
var verbverbform = [];
var verbtime = [];
var verbperson = [];
var correctionform = [];
var correctiontense = [];
var correctionperson = [];
var score = 0
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
var wrongsymbol = decode_utf8('\xE2\x9D\x8C')

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
                  'imperative':
                     {"IIsgm":[rad1,sheva,rad2,holem,rad3],
                      "IIsgf":[rad1,hireq,rad2,sheva,rad3,hireq,"י"],
                      "IIplm":[rad1,hireq,rad2,sheva,rad3,"ו",daguesh],
                      "IIplf":[rad1,sheva,rad2,holem,rad3,sheva,"נ",qamets,"ה"]},
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
                    "mascsg":["נ",hireq,rad1,sheva,rad2,qamets,rad3],
                    "femsg":["נ",hireq,rad1,sheva,rad2,segol,rad3,segol,"ת"],
                    "mascpl":["נ",hireq,rad1,sheva,rad2,qamets,rad3,hireq,"ים"],
                    "fempl":["נ",hireq,rad1,sheva,rad2,qamets,rad3,"ו",holem,"ת"]},
                'infinitive':{
                    'absolute':["ה",hireq,rad1,daguesh,qamets,rad2,holem,rad3],
                    'construct':["ל",sheva,"ה",hireq,rad1,daguesh,qamets,rad2,tsere,rad3]},},
      'piel':{'perfect':
                    {"Isg":[rad1,hireq,rad2,daguesh,pataj,rad3,sheva,"ת",daguesh,hireq,"י"],
                    "Ipl":[rad1,hireq,rad2,daguesh,pataj,rad3,sheva,"נו",daguesh],
                    "IIsgm":[rad1,hireq,rad2,daguesh,pataj,rad3,sheva,"ת",daguesh,qamets],
                    "IIsgf":[rad1,hireq,rad2,daguesh,pataj,rad3,sheva,"ת",daguesh,sheva],
                    "IIplm":[rad1,hireq,rad2,daguesh,pataj,rad3,sheva,"ת",daguesh,segol,"ם"],
                    "IIplf":[rad1,hireq,rad2,daguesh,pataj,rad3,sheva,"ת",daguesh,segol,"ן"],
                    "IIIsgm":[rad1,hireq,rad2,daguesh,tsere,rad3],
                    "IIIsgf":[rad1,hireq,rad2,daguesh,sheva,rad3,qamets,"ה"],
                    "IIIplm":[rad1,hireq,rad2,daguesh,sheva,rad3,"ו",daguesh],
                    "IIIplf":[rad1,hireq,rad2,daguesh,sheva,rad3,"ו",daguesh]},
              'imperfect':
                   {"Isg":["אֲ",rad1,pataj,rad2,daguesh,tsere,rad3],
                    "Ipl":["נ",sheva,rad1,pataj,rad2,daguesh,tsere,rad3],
                    "IIsgm":["ת",daguesh,sheva,rad1,pataj,rad2,daguesh,tsere,rad3],
                    "IIsgf":["ת",daguesh,sheva,rad1,pataj,rad2,daguesh,sheva,rad3,hireq,"י"],
                    "IIplm":["ת",daguesh,sheva,rad1,pataj,rad2,daguesh,sheva,rad3,"ו",daguesh],
                    "IIplf":["ת",daguesh,sheva,rad1,pataj,rad2,daguesh,tsere,rad3,sheva,"נ",qamets,"ה"],
                    "IIIsgm":["י",sheva,rad1,pataj,rad2,daguesh,tsere,rad3],
                    "IIIsgf":["ת",daguesh,sheva,rad1,pataj,rad2,daguesh,tsere,rad3],
                    "IIIplm":["י",sheva,rad1,pataj,rad2,daguesh,sheva,rad3,"ו",daguesh],
                    "IIIplf":["ת",daguesh,sheva,rad1,pataj,rad2,daguesh,tsere,rad3,sheva,"נ",qamets,"ה"]},
              'imperative':
                  {"IIsgm":[rad1,pataj,rad2,daguesh,tsere,rad3],
                    "IIsgf":[rad1,pataj,rad2,daguesh,sheva,rad3,hireq,"י‏"],
                    "IIplm":[rad1,pataj,rad2,daguesh,sheva,rad3,"ו",daguesh],
                    "IIplf":[rad1,pataj,rad2,daguesh,tsere,rad3,sheva,"נ",qamets,"ה‏"]},
              'participle':
                  {"mascsg":["מ",sheva,rad1,pataj,rad2,daguesh,tsere,rad3],
                    "femsg":["מ",sheva,rad1,pataj,rad2,daguesh,segol,rad3,segol,"ת"],
                    "mascpl":["מ",sheva,rad1,pataj,rad2,daguesh,sheva,rad3,hireq,"ים"],
                    "fempl":["מ",sheva,rad1,pataj,rad2,daguesh,sheva,rad3,"ו",holem,"ת"]},
              'infinitive':
                  {'absolute':[rad1,pataj,rad2,daguesh,holem,rad3],
                    'construct':["ל",sheva,rad1,pataj,rad2,daguesh,tsere,rad3]},
                  },
      'pual':{'perfect':{
                  "Isg":[rad1,"ֻ",rad2,daguesh,pataj,rad3,sheva,"ת",daguesh,hireq,"י"],
                  "Ipl":[rad1,"ֻ",rad2,daguesh,pataj,rad3,sheva,"נו",daguesh],
                  "IIsgm":[rad1,"ֻ",rad2,daguesh,pataj,rad3,sheva,"ת",daguesh,qamets],
                  "IIsgf":[rad1,"ֻ",rad2,daguesh,pataj,rad3,sheva,"ת",daguesh,sheva],
                  "IIplm":[rad1,"ֻ",rad2,daguesh,pataj,rad3,sheva,"ת",daguesh,segol,"ם"],
                  "IIplf":[rad1,"ֻ",rad2,daguesh,pataj,rad3,sheva,"ת",daguesh,segol,"ן"],
                  "IIIsgm":[rad1,"ֻ",rad2,daguesh,pataj,rad3],
                  "IIIsgf":[rad1,"ֻ",rad2,daguesh,sheva,rad3,qamets,"ה"],
                  "IIIplm":[rad1,"ֻ",rad2,daguesh,sheva,rad3,"ו",daguesh],
                  "IIIplf":[rad1,"ֻ",rad2,daguesh,sheva,rad3,"ו",daguesh]},
              'imperfect':{
                  "Isg":["אֲ",rad1,"ֻ",rad2,daguesh,pataj,rad3],
                  "Ipl":["נ",sheva,rad1,"ֻ",rad2,,daguesh,pataj,rad3],
                  "IIsgm":["ת",daguesh,sheva,rad1,"ֻ",rad2,,daguesh,pataj,rad3],
                  "IIsgf":["ת",daguesh,sheva,rad1,"ֻ",rad2,,daguesh,sheva,rad3,hireq,"י"],
                  "IIplm":["ת",daguesh,sheva,rad1,"ֻ",rad2,,daguesh,sheva,rad3,"ו",daguesh],
                  "IIplf":["ת",daguesh,sheva,rad1,"ֻ",rad2,,daguesh,pataj,rad3,sheva,"נ",qamets,"ה"],
                  "IIIsgm":["י",sheva,rad1,"ֻ",rad2,,daguesh,pataj,rad3],
                  "IIIsgf":["ת",daguesh,sheva,rad1,"ֻ",rad2,,daguesh,pataj,rad3],
                  "IIIplm":["י",sheva,rad1,"ֻ",rad2,,daguesh,sheva,rad3,"ו",daguesh],
                  "IIIplf":["ת",daguesh,sheva,rad1,"ֻ",rad2,,daguesh,pataj,rad3,sheva,"נ",qamets,"ה"]},
              'participle':{
                  "mascsg":["מ",sheva,rad1,"ֻ",rad2,,daguesh,qamets,rad3],
                  "femsg":["מ",sheva,rad1,"ֻ",rad2,,daguesh,segol,rad3,segol,"ת"],
                  "mascpl":["מ",sheva,rad1,"ֻ",rad2,,daguesh,qamets,rad3,hireq,"ים"],
                  "fempl":["מ",sheva,rad1,"ֻ",rad2,,daguesh,qamets,rad3,"ו",holem,"ת"]},
              'infinitive':{
                  'absolute':[rad1,"ֻ",rad2,,daguesh,holem,rad3]},
          },
        'hifil':{
          'perfect':
                {"Isg":["ה",hireq,rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,hireq,"י"],
                 "Ipl":["ה",hireq,rad1,sheva,rad2,pataj,rad3,sheva,"נו",daguesh],
                 "IIsgm":["ה",hireq,rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,qamets],
                 "IIsgf":["ה",hireq,rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,sheva],
                 "IIplm":["ה",hireq,rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,segol,"ם"],
                 "IIplf":["ה",hireq,rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,segol,"ן"],
                 "IIIsgm":["ה",hireq,rad1,sheva,rad2,hireq,"י",rad3],
                 "IIIsgf":["ה",hireq,rad1,sheva,rad2,hireq,"י",rad3,qamets,"ה"],
                 "IIIplm":["ה",hireq,rad1,sheva,rad2,hireq,"י",rad3,"ו",daguesh],
                 "IIIplf":["ה",hireq,rad1,sheva,rad2,hireq,"י",rad3,"ו",daguesh]},
            'imperfect':
                 {"Isg":["א",pataj,rad1,sheva,rad2,hireq,"י",rad3],
                 "Ipl":["נ",pataj,rad1,sheva,rad2,hireq,"י",rad3],
                 "IIsgm":["ת",daguesh,pataj,rad1,sheva,rad2,hireq,"י",rad3],
                 "IIsgf":["ת",daguesh,pataj,rad1,sheva,rad2,hireq,"י",rad3,hireq,"י"],
                 "IIplm":["ת",daguesh,pataj,rad1,sheva,rad2,hireq,"י",rad3,"ו",daguesh],
                 "IIplf":["ת",daguesh,pataj,rad1,sheva,rad2,tsere,rad3,sheva,"נ",qamets,"ה"],
                 "IIIsgm":["י",pataj,rad1,sheva,rad2,hireq,"י",rad3],
                 "IIIsgf":["ת",daguesh,pataj,rad1,sheva,rad2,hireq,"י",rad3],
                 "IIIplm":["י",pataj,rad1,sheva,rad2,hireq,"י",rad3,"ו",daguesh],
                 "IIIplf":["ת",daguesh,pataj,rad1,sheva,rad2,tsere,rad3,sheva,"נ",qamets,"ה"]},
          'imperative':
                {"IIsgm":["ה",pataj,rad1,sheva,rad2,tsere,rad3],
                "IIsgf":["ה",pataj,rad1,sheva,rad2,hireq,"י",rad3,hireq,"י‏"],
                "IIplm":["ה",pataj,rad1,sheva,rad2,hireq,"י",rad3,"ו",daguesh],
                "IIplf":["ה",pataj,rad1,sheva,rad2,tsere,rad3,sheva,"נ",qamets,"ה‏"],
                },
          'participle':
                {"mascsg":["מ",pataj,rad1,sheva,rad2,hireq,"י",rad3],
                "femsg":["מ",pataj,rad1,sheva,rad2,hireq,"י",rad3,qamets,"ה"],
                "mascpl":["מ",pataj,rad1,sheva,rad2,hireq,"י",rad3,hireq,"ים"],
                "fempl":["מ",pataj,rad1,sheva,rad2,hireq,"י",rad3,"ו",holem,"ת"],
          },
          'infinitive':
                {'absolute':["ה",pataj,rad1,sheva,rad2,tsere,rad3],
                'construct':["ל",sheva,"ה",pataj,rad1,sheva,rad2,hireq,"י",rad3]}
              },
  'hofal':
         {'perfect':
                {"Isg":["הֻ",rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,hireq,"י"],
                "Ipl":["הֻ",rad1,sheva,rad2,pataj,rad3,sheva,"נו",daguesh],
                "IIsgm":["הֻ",rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,qamets],
                "IIsgf":["הֻ",rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,sheva],
                "IIplm":["הֻ",rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,segol,"ם"],
                "IIplf":["הֻ",rad1,sheva,rad2,pataj,rad3,sheva,"ת",daguesh,segol,"ן"],
                "IIIsgm":["הֻ",rad1,sheva,rad2,pataj,rad3],
                "IIIsgf":["הֻ",rad1,sheva,rad2,sheva,rad3,qamets,"ה"],
                "IIIplm":["הֻ",rad1,sheva,rad2,sheva,rad3,"ו",daguesh],
                "IIIplf":["הֻ",rad1,sheva,rad2,sheva,rad3,"ו",daguesh]},
          'imperfect':
                {"Isg":["אֻ",rad1,sheva,rad2,pataj,rad3],
                "Ipl":["נֻ",rad1,sheva,rad2,pataj,rad3],
                "IIsgm":["ת",daguesh,"ֻ",rad1,sheva,rad2,pataj,rad3],
                "IIsgf":["ת",daguesh,"ֻ",rad1,sheva,rad2,sheva,rad3,hireq,"י"],
                "IIplm":["ת",daguesh,"ֻ",rad1,sheva,rad2,sheva,rad3,"ו",daguesh],
                "IIplf":["ת",daguesh,"ֻ",rad1,sheva,rad2,pataj,rad3,sheva,"נ",qamets,"ה"],
                "IIIsgm":["יֻ",rad1,sheva,rad2,pataj,rad3],
                "IIIsgf":["ת",daguesh,"ֻ",rad1,sheva,rad2,pataj,rad3],
                "IIIplm":["יֻ",rad1,sheva,rad2,sheva,rad3,"ו",daguesh],
                "IIIplf":["ת",daguesh,"ֻ",rad1,sheva,rad2,pataj,rad3,sheva,"נ",qamets,"ה"]},
        'participle':
                {"mascsg":["מֻ",rad1,sheva,rad2,qamets,rad3],
                "femsg":["מֻ",rad1,sheva,rad2,segol,rad3,segol,"ת"],
                "mascpl":["מֻ",rad1,sheva,rad2,qamets,rad3,hireq,"ים"],
                "fempl":["מֻ",rad1,sheva,rad2,qamets,rad3,"ו",holem,"ת"]},
        'infinitive':
                {'absolute':["הֻ",rad1,sheva,rad2,tsere,rad3]},},
    'hitpael':{
        'perfect':{
                "Isg":["ה",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,pataj,rad3,sheva,"ת",daguesh,hireq,"י"],
                "Ipl":["ה",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,pataj,rad3,sheva,"נו",daguesh],
                "IIsgm":["ה",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,pataj,rad3,sheva,"ת",daguesh,qamets],
                "IIsgf":["ה",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,pataj,rad3,sheva,"ת",daguesh,sheva],
                "IIplm":["ה",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,pataj,rad3,sheva,"ת",daguesh,segol,"ם"],
                "IIplf":["ה",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,pataj,rad3,sheva,"ת",daguesh,segol,"ן"],
                "IIIsgm":["ה",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,tsere,rad3],
                "IIIsgf":["ה",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,sheva,rad3,qamets,"ה"],
                "IIIplm":["ה",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,sheva,rad3,"ו",daguesh],
                "IIIplf":["ה",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,sheva,rad3,"ו",daguesh]},
        'imperfect':{
                "Isg":["א",segol,"ת",sheva,rad1,pataj,rad2,daguesh,tsere,rad3],
                "Ipl":["נ",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,tsere,rad3],
                "IIsgm":["ת",daguesh,hireq,"ת",sheva,rad1,pataj,rad2,daguesh,tsere,rad3],
                "IIsgf":["ת",daguesh,hireq,"ת",sheva,rad1,pataj,rad2,daguesh,sheva,rad3,hireq,"י"],
                "IIplm":["ת",daguesh,hireq,"ת",sheva,rad1,pataj,rad2,daguesh,sheva,rad3,"ו",daguesh],
                "IIplf":["ת",daguesh,hireq,"ת",sheva,rad1,pataj,rad2,daguesh,tsere,rad3,sheva,"נ",qamets,"ה"],
                "IIIsgm":["י",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,tsere,rad3],
                "IIIsgf":["ת",daguesh,hireq,"ת",sheva,rad1,pataj,rad2,daguesh,tsere,rad3],
                "IIIplm":["י",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,sheva,rad3,"ו",daguesh],
                "IIIplf":["ת",daguesh,hireq,"ת",sheva,rad1,pataj,rad2,daguesh,tsere,rad3,sheva,"נ",qamets,"ה"]},
    'imperative':{
                "IIsgm":["ה",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,tsere,rad3],
                "IIsgf":["ה",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,sheva,rad3,hireq,"י‏"],
                "IIplm":["ה",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,sheva,rad3,"ו",daguesh],
                "IIplf":["ה",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,tsere,rad3,sheva,"נ",qamets,"ה‏"]},
    'participle':{
                "mascsg":["מ",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,tsere,rad3],
                "femsg":["מ",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,segol,rad3,segol,"ת"],
                "mascpl":["מ",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,sheva,rad3,hireq,"ים"],
                "fempl":["מ",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,sheva,rad3,"ו",holem,"ת"]},

    'infinitive':{
                'absolute':["ה",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,tsere,rad3],
                'construct':["ל",sheva,"ה",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,tsere,rad3]},},};

//const randomElement = timearray[Math.floor(Math.random() * timearray.length)];

//var person = Object.keys(conjdict[verbform][time]);
function refresh() {
  ++round
  var exceptionformarray = [];
  var exceptiontimearray = [];
  var qal = document.getElementById("qal")
  var nifal = document.getElementById("nifal")
  var piel = document.getElementById("piel")
  var pual = document.getElementById("pual")
  var hifil = document.getElementById("hifil")
  var hofal = document.getElementById("hofal")
  var hitpael = document.getElementById("hitpael")
  var perfect = document.getElementById("perfect")
  var imperfect = document.getElementById("imperfect")
  var imperative = document.getElementById("imperative")
  var participle = document.getElementById("infinitive")
  var infinitive = document.getElementById("participle")
  document.getElementById("qal").disabled= true;
  document.getElementById("nifal").disabled= true;
  document.getElementById("piel").disabled= true;
  document.getElementById("pual").disabled= true;
  document.getElementById("hifil").disabled= true;
  document.getElementById("hofal").disabled= true;
  document.getElementById("hitpael").disabled= true;
  document.getElementById("perfect").disabled= true;
  document.getElementById("imperfect").disabled= true;
  document.getElementById("imperative").disabled= true;
  document.getElementById("infinitive").disabled= true;
  document.getElementById("participle").disabled= true;
  function erase(x){
    if (x.style.display ==! "none") {
    x.style.display = "none";}
    else if (x.style.display === 'block'){x.style.display = "none";
  }};


  var cbformarray = [qal,nifal,piel,pual,hifil,hofal,hitpael];
  var cbtimearray = [perfect,imperfect,imperative,infinitive,participle];
  function boxer(x){if (x.checked === false){exceptionformarray.push(x.id)}};
  function boxertime(x){if (x.checked === false){exceptiontimearray.push(x.id)}};
  for (x of cbformarray){boxer(x)};
  for (x of exceptionformarray){delete conjdict[x]};
  for (x of cbtimearray){boxertime(x)};
  function underground(verbform){for (x of exceptiontimearray){delete conjdict[verbform][x]}};
  for (var x in conjdict){underground(x)};
  //console.log(conjdict);
  try{
  var verbformarray = Object.keys(conjdict);
  var verbform = verbformarray[Math.floor(Math.random() * verbformarray.length)];
  var timearray = Object.keys(conjdict[verbform]);
  var time = timearray[Math.floor(Math.random() * timearray.length)];
  var personarray = Object.keys(conjdict[verbform][time]);
  var person = personarray[Math.floor(Math.random() * personarray.length)];
  var a1 = document.getElementById("a1").innerHTML = conjdict[verbform][time][person].join('');

  document.getElementById("formm").innerHTML = verbform;
  document.getElementById("time").innerHTML = time;
  document.getElementById("person").innerHTML = person;
  document.getElementById("a1").innerHTML = a1;}
  catch(err) {
    var a1 = document.getElementById('a1');
    erase(a1);
    document.getElementById("score").innerHTML = score;
    document.getElementById("savealert").style.display = 'block';
    // Dummy Array
var data = verbs;
var data2 = verbverbform
var data3 = verbtime
var data4 = verbperson
var data5 = correctionform
var data6 = correctiontense
var data7 = correctionperson



// Draw HTML table
var perrow = 1, // 1 cells per row
    html = "<thead><tr><th>Verb</th><th>Form</th><th></th><th>Tense</th><th></th><th>Person</th><th></th></tr></thead><tbody>";

// Loop through array and add table cells
for (var i=0; i<data.length; i++) {

  html += "<tr>" + "<td>" + data[i] + "</td>" + "<td>" + data2[i] + "</td>" + "<td>" + data5[i] + "</td>" + "<td>" + data3[i] + "</td>" + "<td>" + data6[i] + "</td>" + "<td>" + data4[i] + "</td>" + "<td>" + data7[i] + "</td>" + "</tr>";

  // If you need to click on the cell and do something
  // html += "<td onclick='FUNCTION()'>" + data[i] + "</td>";

  // Break into next row
  var next = i+1;
  if (next%perrow==0 && next!=data.length) {
    html += "</tr><tr>";
  }
}
html += "</tr>";

// Attach HTML to container
document.getElementById("tabletable").innerHTML = html;
var table = document.getElementById("tabletable");
for (var i = 0, row; row = table.rows[i]; i++) {
   //iterate through rows
   //rows would be accessed using the "row" variable assigned in the for loop

   }
    document.getElementById("tabletable").style.display = 'block';
	 $('#tabletable').DataTable( {"scrollX": true} );
  };

  var aa1 = document.getElementById('aa1');
  var successAlert1 = document.getElementById('successAlert1');
	var errorAlert1 = document.getElementById('errorAlert1');
	var successAlert2 = document.getElementById('successAlert2');
	var errorAlert2 = document.getElementById('errorAlert2');
	var successAlert3 = document.getElementById('successAlert3');
	var errorAlert3 = document.getElementById('errorAlert3');

	erase(successAlert1);
	erase(errorAlert1);
	erase(successAlert2);
	erase(errorAlert2);
	erase(successAlert3);
	erase(errorAlert3);
	erase(aa1);
  verbs.push(a1);
  verbverbform.push(verbform);
  verbtime.push(time);
  verbperson.push(person);
  delete conjdict[verbform][time][person]
};

function myFunction() {
	var aa1 = document.getElementById("aa1");
	if (aa1.style.display === "none") {
	  aa1.style.display = "block";
	} else {
	  aa1.style.display = "none";
	}
	}

	function correct() {
		var inputValform = document.getElementById("binyan").value;
		var answerform = document.getElementById("formm").innerText;
		var inputValtime = document.getElementById("time/mood").value;
		var answertime = document.getElementById("time").innerText;
		var inputValperson = document.getElementById("personselect").value;
		var answerperson = document.getElementById("person").innerText;

		if (inputValform === answerform){
			$('#successAlert1').show();
			$('#errorAlert1').hide();
			} else {
	  	$('#successAlert1').hide();
	  	$('#errorAlert1').show();}
		if (inputValtime === answertime){
			$('#successAlert2').show();
			$('#errorAlert2').hide();
      } else {
		 	$('#successAlert2').hide();
		 	$('#errorAlert2').show();}
		if (inputValperson === answerperson){
			$('#successAlert3').show();
			$('#errorAlert3').hide();
      } else {
			$('#successAlert3').hide();
			$('#errorAlert3').show();}

    if (document.getElementById('successAlert1').style.display == 'none'){
        correctionform.push(wrongsymbol);
        console.log('pointdown')} else {correctionform.push(decode_utf8('\xE2\x9C\x85'));
        score++;
        console.log('pointup')};

    if (document.getElementById('successAlert2').style.display == 'none'){
        correctiontense.push(wrongsymbol);
        console.log('pointdown')} else {correctiontense.push(decode_utf8('\xE2\x9C\x85'));
        score++;
        console.log('pointup')};

    if (document.getElementById('successAlert3').style.display == 'none'){
        correctionperson.push(wrongsymbol);
        console.log('pointdown')} else {correctionperson.push(decode_utf8('\xE2\x9C\x85'));
        score++;
        console.log('pointup')};


		};
		var successAlert1 = document.getElementById('successAlert1');
		var errorAlert1 = document.getElementById('errorAlert1');
		var successAlert2 = document.getElementById('successAlert2');
		var errorAlert2 = document.getElementById('errorAlert2');
		var successAlert3 = document.getElementById('successAlert3');
		var errorAlert3 = document.getElementById('errorAlert3');


function global(){
if (round == 0) {refresh()} else {
console.log(corrected)
var errorAlert1 = document.getElementById('errorAlert1');
var successAlert1 = document.getElementById('successAlert1');
if (corrected == 0){correct();
return corrected = 1}
else {refresh()};
      return corrected = 0}}


		window.onload = function() {
      document.getElementById("a1").innerHTML = "Choose your binyanim and click next!"
    };

// Your web app's Firebase configuration


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Setup access to the database
let db = firebase.firestore();
//let score = 0;

function updateScores() {
    // Clear current scores in our scoreboard
    document.getElementById('scoreboard').innerHTML = '<tr><th>Name</th><th>Score</th></tr>';

    // Get the top 5 scores from our scoreboard
    db.collection("scores").orderBy("score", "desc").limit(5).get().then((snapshot) => {
        snapshot.forEach((doc) => {
            document.getElementById('scoreboard').innerHTML += '<tr>' +
            '<td>' + doc.data().name + '</td>' +
            '<td>' + doc.data().score + '</td>' +
            '</tr>';
        })
    })

}

function saveScore() {
    // Get name from input box
    let name = document.getElementById('name').value;

    // Make sure name has a value, if not send alert.
    if(name !== "") {
        // Add a new document in collection "scores"
        db.collection("scores").doc().set({
            name: name,
            score: score
        })
        .then(function() {
            console.log("Document successfully written!");
            updateScores();
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    } else {
        alert('Please enter a name');
    }
document.getElementById("tabletable").style.display = 'none';
document.getElementById("scoreboard").style.display = 'block';
}
