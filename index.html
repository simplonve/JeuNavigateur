<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/>
		<title>jeu_nav</title>
	</head>
    <script>
       (function () {
    // debut du code isole

    var CODE_TOUCHE_GAUCHE = 37;
    var CODE_TOUCHE_DROITE = 39;
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

    var score = 0;
    var affichage_score = 'Score : '+score.toString();
    var posXScore = 40;
    var posYScore = 55;
    var posXTour = 40;
    var posYTour = 100;
    var tour = 20;
    var compteur_tour = 'Tour restant : '+tour.toString();
    var couleurScore = '#00FFFF';
    var dessinerScore = function () {
        canvasTerrainContext.font = '25pt serif';
        canvasTerrainContext.fillStyle = couleurScore;
        canvasTerrainContext.fillText (affichage_score, posXScore, posYScore);
        canvasTerrainContext.fillText (compteur_tour, posXTour, posYTour);
    }

    var posXObjetD = 682;
    var posYObjetD = 0;
    var tailleObjet = 30;
    var posXObjetG = 341;
    var posYObjetG = 0;
    var couleurObjetD;
    var couleurObjetG;
    var randomObjet = function() {
        if (Math.random() > 0.5){
            couleurObjetD = '#4B0082'
            couleurObjetG = '#98FB98'
        } else {
            couleurObjetD = '#98FB98'
            couleurObjetG = '#4B0082'
        }
    }

    var dessinerObjet = function(){
        canvasDescContext.fillStyle = couleurObjetD;
        canvasDescContext.fillRect (posXObjetD, posYObjetD, tailleObjet, tailleObjet);

        canvasDescContext.fillStyle = couleurObjetG;
        canvasDescContext.fillRect (posXObjetG, posYObjetG, tailleObjet, tailleObjet);
    }

    var animerObjet = function(){
        posYObjetD+=2;
        posYObjetG+=2;
    }

    var onClick = function(){
    var elem = document.getElementById('canvasDesc'),
        elemLeft = elem.offsetLeft,
        elemTop = elem.offsetTop,
        context = elem.getContext('2d'),
        elements = [];

    // Add event listener for `click` events.
    elem.addEventListener('click', function(event) {
        var x = event.pageX - elemLeft,
            y = event.pageY - elemTop;

        // Collision detection between clicked offset and element.
        elements.forEach(function(element) {
            if (y > element.top && y < element.top + element.height
                && x > element.left && x < element.left + element.width) {
                score += 1;
            }
        });

    }, false);
    
    // Add element.
    elements.push({
        colour: '#05EFFF',
        width: 150,
        height: 100,
        top: 500,
        left: 450
    });

    // Render elements.
    elements.forEach(function(element) {
        context.fillStyle = element.colour;
        context.fillRect(element.left, element.top, element.width, element.height);
    });}

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
      randomObjet();
      canvasTerrainContext = creerCanvasContext("canvasTerrain", terrainlargeur, terrainhauteur, 0, couleurTerrain);
      dessinerScore();

      canvasPersosContext = creerCanvasContext("canvasPersos", terrainlargeur, terrainhauteur, 1);
      dessinerPersos();

      canvasDescContext = creerCanvasContext("canvasDesc", terrainlargeur, terrainhauteur, 2);

      requestAnimId = window.requestAnimationFrame(principale); // premier appel de principale au rafraichissement de la page
    }

    var principale = function() {
      // le code du jeu
      canvasPersosContext.clearRect ( 0, 0 , terrainlargeur , terrainhauteur );
      canvasDescContext.clearRect ( 0, 0 , terrainlargeur , terrainhauteur );
      canvasTerrainContext.clearRect ( 0, 0 , terrainlargeur , terrainhauteur );
      animerPersoA();
      canvasDesc.addEventListener('click', onClick(), false);
      dessinerPersos();
      dessinerScore();
      if (posYObjetD < 400) {
        dessinerObjet();
        animerObjet();
      }
      else if (couleurObjetD == '#98FB98' && positionPersoFinal == 'droite'){
            score += 1;
            posYObjetD = 0;
            posYObjetG = 0;
            randomObjet();
            positionPersoFinal = '';
            positionXPerso = terrainlargeur/2 - hauteurPerso/2;
            tour-=1
            affichage_score = 'Score : '+score.toString();
            compteur_tour = 'Tour restant : '+tour.toString();
      }
      else if (couleurObjetG == '#98FB98' && positionPersoFinal == 'gauche'){
            score += 1;
            posYObjetD = 0;
            posYObjetG = 0;
            randomObjet();
            positionPersoFinal = '';
            positionXPerso = terrainlargeur/2 - hauteurPerso/2;
            tour-=1
            affichage_score = 'Score : '+score.toString();
            compteur_tour = 'Tour restant : '+tour.toString();
      }
      else{
          score -= 1;
          posYObjetD = 0;
          posYObjetG = 0;
          randomObjet();
          positionPersoFinal = '';
          positionXPerso = terrainlargeur/2 - hauteurPerso/2;
          tour-=1
          affichage_score = 'Score : '+score.toString();
          compteur_tour = 'Tour restant : '+tour.toString();
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