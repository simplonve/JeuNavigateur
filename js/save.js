<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/>
		<title>jeu_nav</title>
		<!-- <link rel="stylesheet" href="ja.js"/> -->
	</head>
    <script>
       (function () {
    // debut du code isole

    var CODE_TOUCHE_GAUCHE = 37;
    var CODE_TOUCHE_DROITE = 39;
    var CODE_TOUCHE_SPACE = 32;
    var ALLER_GAUCHE = false;
    var ALLER_DROITE = false;
    // pour que le requestAnim marche 'partout'
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame']
      || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    var requestAnimId;

    //les 2 barres vertical
    var canvasTerrainContext;
    var terrainlargeur = 1024;
    var terrainhauteur = 768;
    var filethauteur = 6;
    var couleurTerrain = "#000000";
    var couleurFilet = "#008B8B";
    var dessinerTerrain = function() {
      // gauche
      canvasTerrainContext.fillStyle = couleurFilet;
      canvasTerrainContext.fillRect (terrainlargeur/1.2 - filethauteur/2, 0, filethauteur, terrainhauteur);

      // droit
      canvasTerrainContext.fillStyle = couleurFilet;
      canvasTerrainContext.fillRect (terrainlargeur/7 - filethauteur/2, 0, filethauteur, terrainhauteur);
    }

    //le perso
    var canvasPersosContext;
    var hauteurPerso = 40;
    var largeurPerso = 40;
    var positionXPerso = terrainlargeur/2 - hauteurPerso/2;
    var positionYPerso = 700;
    var couleurPerso = "#8B0000";
    var positionPersoFinal = "";
    var dessinerPersos = function() {
      // la Perso A
      canvasPersosContext.fillStyle = couleurPerso;
      canvasPersosContext.fillRect (positionXPerso, positionYPerso, hauteurPerso, largeurPerso);
    }

    var animerPersoA = function() {
      if (ALLER_DROITE){
        positionXPerso = 682;
        positionPersoFinal = "droite";
      }
      else if (ALLER_GAUCHE){
        positionXPerso = 341;
        positionPersoFinal = "gauche";
      }
    }


    var posXObjetD = 682;
    var posYObjetD = 0;
    var tailleObjet = 30;
    var posXObjetG = 341;
    var posYObjetG = 0;
    var couleurObjet ='#4B0082';
    var dessinerObjet = function(){
        canvasDescContext.fillStyle = couleurObjet;
        canvasDescContext.fillRect (posXObjetD, posYObjetD, tailleObjet, tailleObjet);

        canvasDescContext.fillStyle = couleurObjet;
        canvasDescContext.fillRect (posXObjetG, posYObjetG, tailleObjet, tailleObjet);
    }

    var animerObjet = function(){
        posYObjetD+=1;
        posYObjetG+=1;
    }

    //var pour crée canvas
    var creerCanvasContext = function(name, width, height, zindex, color) {
      var canvas = window.document.createElement("canvas");
      canvas.id = name;
      canvas.style.position = "absolute";
      if ( color != undefined )
        canvas.style.background = color;
      canvas.style.zIndex = zindex;
      canvas.width = width;
      canvas.height = height;
      document.body.appendChild(canvas);
      return canvas.getContext('2d');
    }

    var initialisation = function() {
      // le code de l'initialisation
      canvasTerrainContext = creerCanvasContext("canvasTerrain", terrainlargeur, terrainhauteur, 0, couleurTerrain);
      dessinerTerrain();

      canvasPersosContext = creerCanvasContext("canvasPersos", terrainlargeur, terrainhauteur, 1);
      dessinerPersos();

      canvasDescContext = creerCanvasContext("canvasDesc", terrainlargeur, terrainhauteur, 2);

      requestAnimId = window.requestAnimationFrame(principale); // premier appel de principale au rafraichissement de la page
    }

    var principale = function() {
      // le code du jeu
      canvasPersosContext.clearRect ( 0, 0 , terrainlargeur , terrainhauteur );
      canvasDescContext.clearRect ( 0, 0 , terrainlargeur , terrainhauteur );
      animerPersoA();
      dessinerPersos();
      if (posYObjetD < 400) {
        dessinerObjet();
        animerObjet();
      }
      requestAnimId = window.requestAnimationFrame(principale); // rappel de principale au prochain rafraichissement de la page
    }

    var onKeyDown = function(event) {
        if ( event.keyCode == CODE_TOUCHE_GAUCHE ) {
            ALLER_GAUCHE = true;
        } else if ( event.keyCode == CODE_TOUCHE_DROITE ) {
            ALLER_DROITE = true;
        }
    }

    var onKeyUp = function(event) {
        if ( event.keyCode == CODE_TOUCHE_GAUCHE ) {
            ALLER_GAUCHE = false;
        } else if ( event.keyCode == CODE_TOUCHE_DROITE ) {
            ALLER_DROITE = false;
        }
    }

    // association des méthodes aux évènements :
    // onKeyDown = à l'appui de la touche
    // onKeyUp = au relèvement de la touche
    window.onkeydown = onKeyDown;
    window.onkeyup = onKeyUp;

    window.onload = initialisation; // appel de la fonction initialisation au chargement de la page

   // fin du code isole
  })();
    </script>
	<body>
    </body>
</html>

