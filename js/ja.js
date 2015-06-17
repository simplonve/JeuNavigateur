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
    var ALLER_GAUCHE = false;
    var ALLER_DROITE = false;

    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame']
      || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    var requestAnimId;

    var canvasTerrainContext;
    var terrainLongueur = 800;
    var terrainLargeur = 600;
    var filetLargeur = 6;
    var couleurTerrain = "#000000";
    var couleurFilet = "#008B8B";
    var dessinerTerrain = function() {
      // gauche
      canvasTerrainContext.fillStyle = couleurFilet;
      canvasTerrainContext.fillRect (terrainLongueur/1.2 - filetLargeur/2, 0, filetLargeur, terrainLargeur);

      // droit
      canvasTerrainContext.fillStyle = couleurFilet;
      canvasTerrainContext.fillRect (terrainLongueur/7 - filetLargeur/2, 0, filetLargeur, terrainLargeur);
    }

    var canvasPersosContext;
    var largeurPerso = 40;
    var longueurPerso = 40;
    var positionXPersoA = terrainLongueur/2 - largeurPerso/2;
    var positionYPersoA = 550 ;
    var couleurPerso = "#8B0000";
    var dessinerPersos = function() {
      // le Perso A
      canvasPersosContext.fillStyle = couleurPerso;
      canvasPersosContext.fillRect (positionXPersoA, positionYPersoA, largeurPerso, longueurPerso);
    }

    var animerPersoA = function() {
      if (ALLER_DROITE && positionXPersoA > 0)
        positionXPersoA+=5;
      else if (ALLER_GAUCHE && positionXPersoA < terrainLargeur + longueurPerso)
        positionXPersoA-=5;
    }

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
      canvasTerrainContext = creerCanvasContext("canvasTerrain", terrainLongueur, terrainLargeur, 0, couleurTerrain);
      dessinerTerrain();

      canvasPersosContext = creerCanvasContext("canvasPersos", terrainLongueur, terrainLargeur, 1);
      dessinerPersos();

      requestAnimId = window.requestAnimationFrame(principale); // premier appel de principale au rafraichissement de la page
    }

    var principale = function() {
      // le code du jeu
      canvasPersosContext.clearRect ( 0, 0 , terrainLongueur , terrainLargeur );
      animerPersoA();
      dessinerPersos();
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

