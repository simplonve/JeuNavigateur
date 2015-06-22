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

    var fond_score = new Image();
    fond_score.src = 'img/fondgame.svg';

    var fond_jeu = new Image();
    fond_jeu.src = 'img/ecranbureau.svg';

    var fond_ecran = new Image();
    fond_ecran.src = 'img/fondecran.svg';

    var perso = new Image();
    perso.src = 'img/geekdos.svg';

    var canvasFondContext;
    var canvasPersosContext;
    var canvasCodeContext;
    var Fondlargeur = 1024;
    var Fondhauteur = 768;
    var couleurFond = "#000000";
    var hauteurPerso = 400;
    var largeurPerso = 400;
    var positionXPerso = Fondlargeur/2 - hauteurPerso/2;
    var positionYPerso = 300;
    var couleurPerso = "#8B0000";
    var positionPersoFinal = "";
    var dessinerPersos = function() {
      canvasPersosContext.fillStyle = couleurPerso;
      canvasFondContext.drawImage(perso, positionXPerso, positionYPerso, hauteurPerso, largeurPerso);
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
    var tour = 3;
    var compteur_tour = 'Tour restant : '+tour.toString();
    var couleurScore = '#FFFFFF';
    var affichage_score_final;
    var dessinerScore = function () {
        canvasFondContext.font = '25pt serif';
        canvasFondContext.fillStyle = couleurScore;
        canvasFondContext.fillText (affichage_score, posXScore, posYScore);
        canvasFondContext.fillText (compteur_tour, posXTour, posYTour);
    }
    var afficher_page_scoreFinal = function(affichage_score_final){
      effacer_canvas();
      canvasFondContext.drawImage(fond_score, 0, 0, 1024, 768);
      canvasFondContext.font = '25pt serif';
      canvasFondContext.fillStyle = couleurScore;
      canvasFondContext.fillText (affichage_score_final, posXScore_final, posYScore_final);
      canvasPersos.addEventListener('click', onClick(), false);
      canvasPersosContext.font = '25pt serif';
      canvasPersosContext.fillStyle = '#FFFFFF';
      canvasPersosContext.fillText ('Rejouer ?', 445, 550);
    }

    var posXObjetD = 552;
    var posYObjetD = 0;
    var HauteurObjet = 300;
    var LargeurObjet = 50;
    var posXObjetG = 170;
    var posYObjetG = 0;
    var ObjetD;
    var ObjetG;
    var img_code_D = new Image();
    var img_code_G = new Image();
    var getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

    var randomObjet = function() {
    if (Math.random() < 0.5) {
        numero = getRandomInt(0, 10);
        ObjetD = 'bon_code'
        img_code_D.src = 'img/good/g' + numero + '.svg';
        img_code_G.src = 'img/bad/b' + numero + '.svg';
    }
    else {
        numero = getRandomInt(0, 10);
        ObjetG = 'bon_code'
        img_code_D.src = 'img/bad/b' + numero + '.svg';
        img_code_G.src = 'img/good/g' + numero + '.svg';
    }
    }

    var dessinerObjet = function(){
        canvasCodeContext.fillRect (posXObjetD, posYObjetD, HauteurObjet, LargeurObjet);
        canvasCodeContext.drawImage(img_code_D, posXObjetD, posYObjetD, HauteurObjet, LargeurObjet);

        canvasCodeContext.fillRect (posXObjetG, posYObjetG, HauteurObjet, LargeurObjet);
        canvasCodeContext.drawImage(img_code_G, posXObjetG, posYObjetG, HauteurObjet, LargeurObjet);
    }

    var animerObjet = function(){
        posYObjetD+=1;
        posYObjetG+=1;
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

    var reinitialisation = function(){
        posYObjetD = 0;
        posYObjetG = 0;
        randomObjet();
        positionPersoFinal = '';
        positionXPerso = Fondlargeur/2 - hauteurPerso/2;
        affichage_score = 'Score : '+score.toString();
        compteur_tour = 'Tour restant : '+tour.toString();
    }

    var effacer_canvas = function(){
        canvasPersosContext.clearRect ( 0, 0 , Fondlargeur , Fondhauteur );
        canvasCodeContext.clearRect ( 0, 0 , Fondlargeur , Fondhauteur );
        canvasFondContext.clearRect ( 0, 0 , Fondlargeur , Fondhauteur );
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
      randomObjet();
      canvasCodeContext = creerCanvasContext("canvasCode", Fondlargeur, Fondhauteur, 1);
      canvasCodeContext.drawImage(fond_ecran, 110, 100);
      canvasFondContext = creerCanvasContext("canvasFond", Fondlargeur, Fondhauteur, 2);
      canvasFondContext.drawImage(fond_jeu, 0, 0);
      canvasPersosContext = creerCanvasContext("canvasPersos", Fondlargeur, Fondhauteur, 3);
      dessinerScore();
      dessinerPersos();
      requestAnimId = window.requestAnimationFrame(principale);
    }

    var principale = function() {
      effacer_canvas();
      canvasCodeContext.drawImage(fond_ecran, 110, 100);
      canvasFondContext.drawImage(fond_jeu, 0, 0);
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
      else if (ObjetD == 'bon_code' && positionPersoFinal == 'droite'){
            score += 1;
            tour-=1
            reinitialisation();
      }
      else if (ObjetG == 'bon_code' && positionPersoFinal == 'gauche'){
            score += 1;
            tour-=1
            reinitialisation();
      }
      else{
          score -= 1;
          tour-=1
          reinitialisation();
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