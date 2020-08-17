function encode_utf8(s) {
  return unescape(encodeURIComponent(s));
}
function decode_utf8(s) {
  return decodeURIComponent(escape(s));
}

var testroot = "x";
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
                    "mascsg":["מ",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,tsere,rad3],
                    "femsg":["מ",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,segol,rad3,segol,"ת"],
                    "mascpl":["מ",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,sheva,rad3,hireq,"ים"],
                    "fempl":["מ",hireq,"ת",sheva,rad1,pataj,rad2,daguesh,sheva,rad3,"ו",holem,"ת"]},
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
