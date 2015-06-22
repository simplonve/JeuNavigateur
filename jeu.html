<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/>
		<title>jeu_nav</title>
	</head>
    <script>
       (function () {
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

    //images
    var fond_score = new Image();
    fond_score.src = 'img/fondgame.svg';

    var fond_jeu = new Image();
    fond_jeu.src = 'img/ecranbureau.svg';

    var perso = new Image();
    perso.src = 'img/geekdos.svg';

    //les 2 barres vertical
    var canvasTerrainContext;
    var terrainlargeur = 1024;
    var terrainhauteur = 768;
    var couleurTerrain = "#000000";


    var canvasPersosContext;
    var hauteurPerso = 400;
    var largeurPerso = 400;
    var positionXPerso = terrainlargeur/2 - hauteurPerso/2;
    var positionYPerso = 300;
    var couleurPerso = "#8B0000";
    var positionPersoFinal = "";
    var dessinerPersos = function() {
      canvasPersosContext.fillStyle = couleurPerso;
      canvasTerrainContext.drawImage(perso, positionXPerso, positionYPerso, hauteurPerso, largeurPerso);
    }

    var animerPersoA = function() {
      if (ALLER_DROITE){
        positionXPerso = 500;
        positionPersoFinal = "droite";
      }
      else if (ALLER_GAUCHE){
        positionXPerso = 150;
        positionPersoFinal = "gauche";
      }
    }

    var score = 0;
    var affichage_score = 'Score : '+score.toString();
    var posXScore = 440;
    var posYScore = 55;
    var posXScore_final = 340;
    var posYScore_final = 350;
    var posXTour = 385;
    var posYTour = 100;
    var tour = 1;
    var compteur_tour = 'Tour restant : '+tour.toString();
    var couleurScore = '#FFFFFF';
    var affichage_score_final;
    var dessinerScore = function () {
        canvasTerrainContext.font = '25pt serif';
        canvasTerrainContext.fillStyle = couleurScore;
        canvasTerrainContext.fillText (affichage_score, posXScore, posYScore);
        canvasTerrainContext.fillText (compteur_tour, posXTour, posYTour);
    }
    var afficher_page_scoreFinal = function(affichage_score_final){
      canvasPersosContext.clearRect ( 0, 0 , terrainlargeur , terrainhauteur );
      canvasDescContext.clearRect ( 0, 0 , terrainlargeur , terrainhauteur );
      canvasTerrainContext.clearRect ( 0, 0 , terrainlargeur , terrainhauteur );
      canvasTerrainContext.drawImage(fond_score, 0, 0, 1024, 768);
      canvasTerrainContext.font = '25pt serif';
      canvasTerrainContext.fillStyle = couleurScore;
      canvasTerrainContext.fillText (affichage_score_final, posXScore_final, posYScore_final);
      canvasPersos.addEventListener('click', onClick(), false);
      canvasPersosContext.font = '25pt serif';
      canvasPersosContext.fillStyle = '#FFFFFF';
      canvasPersosContext.fillText ('Rejouer ?', 445, 550);
    }

    var posXObjetD = 682;
    var posYObjetD = 0;
    var tailleObjet = 30;
    var posXObjetG = 330;
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
        var elem = document.getElementById('canvasPersos'),
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
                score = 0;
                tour = 20;
                requestAnimId = window.requestAnimationFrame(principale);
            }
        });

    }, false);

    // Add element.
    elements.push({
        colour: '#000000',
        width: 170,
        height: 80,
        top: 500,
        left: 440
    });

    // Render elements.
    elements.forEach(function(element) {
        context.fillStyle = element.colour;
        context.fillRect(element.left, element.top, element.width, element.height);
    });}

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
      canvasTerrainContext = creerCanvasContext("canvasTerrain", terrainlargeur, terrainhauteur, 3);
      canvasTerrainContext.drawImage(fond_jeu, 0, 0);
      dessinerScore();
      canvasPersosContext = creerCanvasContext("canvasPersos", terrainlargeur, terrainhauteur, 4);
      dessinerPersos();
      canvasDescContext = creerCanvasContext("canvasDesc", terrainlargeur, terrainhauteur, 2);
      requestAnimId = window.requestAnimationFrame(principale);
    }

    var principale = function() {
      // le code du jeu
      canvasPersosContext.clearRect ( 0, 0 , terrainlargeur , terrainhauteur );
      canvasDescContext.clearRect ( 0, 0 , terrainlargeur , terrainhauteur );
      canvasTerrainContext.clearRect ( 0, 0 , terrainlargeur , terrainhauteur );
      canvasTerrainContext.drawImage(fond_jeu, 0, 0);
      animerPersoA();
      dessinerPersos();
      dessinerScore();
      if (tour <= 0){
          affichage_score_final = 'Votre score est : '+score.toString()
          afficher_page_scoreFinal(affichage_score_final);
      }
      else {
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
      requestAnimId = window.requestAnimationFrame(principale);
    }
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

    window.onkeydown = onKeyDown;
    window.onkeyup = onKeyUp;
    window.onload = initialisation;
  })();
    </script>
	<body>
    </body>
</html>