var CODE_TOUCHE_GAUCHE = 37;
var CODE_TOUCHE_DROITE = 39;
var ALLER_GAUCHE = false;
var ALLER_DROITE = false;
var joueur;
var numero;
var requestAnimId;
var window;
var document;

var fond_score = new Image();
fond_score.src = 'img/fondgame.svg';

var fond_jeu = new Image();
fond_jeu.src = 'img/ecranbureau.svg';

var fond_ecran = new Image();
fond_ecran.src = 'img/fondecran.svg';

var canvasFondContext;
var canvasPersosContext;
var canvasCodeContext;
var Fondlargeur = 1024;
var Fondhauteur = 768;
var couleurFond = "#000000";

var perso = function (Fondlargeur) {
    "use strict";
    var that = this;
    this.hauteur = 400;
    this.largeur = 400;
    this.positionX = Fondlargeur/2 - this.hauteur/2;
    this.positionY = 300;
    this.positionFinal = "";
    this.image = new Image();
    this.image.src = 'img/geekdos.svg';

    this.dessiner = function () {
        canvasFondContext.drawImage(this.image, this.positionX, this.positionY, this.largeur, this.hauteur);
    };

    this.animer = function () {
            "use strict";
            if (ALLER_DROITE){
                    this.positionX = 500;
                    this.positionFinal = "droite";
            }
            else if (ALLER_GAUCHE){
                    this.positionX = 150;
                    this.positionFinal = "gauche";
            }
    };
};


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
        "use strict";
        canvasFondContext.font = '25pt serif';
        canvasFondContext.fillStyle = couleurScore;
        canvasFondContext.fillText (affichage_score, posXScore, posYScore);
        canvasFondContext.fillText (compteur_tour, posXTour, posYTour);
};

var afficher_page_scoreFinal = function (affichage_score_final) {
    "use strict";
    effacer_canvas();
    canvasFondContext.drawImage(fond_score, 0, 0, 1024, 768);
    canvasFondContext.font = '25pt serif';
    canvasFondContext.fillStyle = couleurScore;
    canvasFondContext.fillText (affichage_score_final, posXScore_final, posYScore_final);
    canvasPersos.addEventListener('click', onClick(), false);
    canvasPersosContext.font = '25pt serif';
    canvasPersosContext.fillStyle = '#FFFFFF';
    canvasPersosContext.fillText ('Rejouer ?', 445, 550);
};

var posXObjetD = 540;
var posYObjetD = 0;
var largeurObjet = 330;
var hauteurObjet = 50;
var posXObjetG = 158;
var posYObjetG = 0;
var ObjetD;
var ObjetG;
var img_code_D = new Image();
var img_code_G = new Image();

var getRandomInt = function (min, max) {
        "use strict";
        return Math.floor(Math.random() * (max - min + 1)) + min;
};

var randomObjet = function () {
        "use strict";
        if (Math.random() < 0.5) {
        numero = getRandomInt(1, 10);
        ObjetD = true;
        img_code_D.src = 'img/bon_code/b' + numero + '.svg';
        img_code_G.src = 'img/mauvais_code/m' + numero + '.svg';
        }
        else {
        numero = getRandomInt(1, 10);
        ObjetG = true;
        img_code_D.src = 'img/mauvais_code/m' + numero + '.svg';
        img_code_G.src = 'img/bon_code/b' + numero + '.svg';
        }
};

var dessinerObjet = function () {
        "use strict";
        canvasCodeContext.fillRect (posXObjetD, posYObjetD, largeurObjet, hauteurObjet);
        canvasCodeContext.drawImage(img_code_D, posXObjetD, posYObjetD, largeurObjet, hauteurObjet);

        canvasCodeContext.fillRect (posXObjetG, posYObjetG, largeurObjet, hauteurObjet);
        canvasCodeContext.drawImage(img_code_G, posXObjetG, posYObjetG, largeurObjet, hauteurObjet);
};

var animerObjet = function () {
        "use strict";
        posYObjetD+=1;
        posYObjetG+=1;
};

var onClick = function () {
        "use strict";
        var elem = document.getElementById('canvasPersos'), elemLeft = elem.offsetLeft, elemTop = elem.offsetTop, context = elem.getContext('2d'), elements = [];

        // Add event listener for `click` events.
        elem.addEventListener('click', function (event) {
                var x = event.pageX - elemLeft, y = event.pageY - elemTop;

                // Collision detection between clicked offset and element.
                elements.forEach(function (element) {
                        if (y > element.top && y < element.top + element.height && x > element.left && x < element.left + element.width) {
                                score = 0;
                                tour = 20;
                                requestAnimId = window.requestAnimationFrame(principale);
                        }
                });
        }, false);

        // Add element.
        elements.push({ colour: '#000000', width: 170, height: 80, top: 500, left: 440 });

        // Render elements.
        elements.forEach(function (element) {
        context.fillStyle = element.colour;
        context.fillRect(element.left, element.top, element.width, element.height);
        });
};

var reinitialisation = function () {
        "use strict";
        ObjetD = false;
        ObjetG = false;
        posYObjetD = 0;
        posYObjetG = 0;
        randomObjet();
        joueur.positionFinal = '';
        joueur.positionX = Fondlargeur/2 - joueur.hauteur/2;
        affichage_score = 'Score : '+score.toString();
        compteur_tour = 'Tour restant : '+tour.toString();
};

var effacer_canvas = function () {
        "use strict";
        canvasPersosContext.clearRect( 0, 0 , Fondlargeur , Fondhauteur );
        canvasCodeContext.clearRect( 0, 0 , Fondlargeur , Fondhauteur );
        canvasFondContext.clearRect( 0, 0 , Fondlargeur , Fondhauteur );
};

var creerCanvasContext = function (name, width, height, zindex, color) {
        "use strict";
        var canvas = window.document.createElement("canvas");
        canvas.id = name;
        canvas.style.position = "absolute";
        if ( color !== undefined ){
                canvas.style.background = color;
        }
        canvas.style.zIndex = zindex;
        canvas.width = width;
        canvas.height = height;
        document.body.appendChild(canvas);
        return canvas.getContext('2d');
};

var initialisation = function () {
        "use strict";
        joueur = new perso(Fondlargeur);
        randomObjet();
        canvasCodeContext = creerCanvasContext("canvasCode", Fondlargeur, Fondhauteur, 1);
        canvasCodeContext.drawImage(fond_ecran, 110, 100);
        canvasFondContext = creerCanvasContext("canvasFond", Fondlargeur, Fondhauteur, 2);
        canvasFondContext.drawImage(fond_jeu, 0, 0);
        canvasPersosContext = creerCanvasContext("canvasPersos", Fondlargeur, Fondhauteur, 3);
        requestAnimId = window.requestAnimationFrame(principale);
};

var principale = function () {
    "use strict";
    if (joueur.image.complete) {
    effacer_canvas();
    canvasCodeContext.drawImage(fond_ecran, 110, 100);
    canvasFondContext.drawImage(fond_jeu, 0, 0);
    joueur.animer();
    joueur.dessiner();
    dessinerScore();
    }
    if (tour <= 0){
    affichage_score_final = 'Votre score est : '+score.toString();
    afficher_page_scoreFinal(affichage_score_final);
    }
    else {
    if (posYObjetD < 400) {
        dessinerObjet();
        animerObjet();
    }
    else if (ObjetD === true && joueur.positionFinal == 'droite'){
        score += 1;
        tour-=1;
        reinitialisation();
    }
    else if (ObjetG === true && joueur.positionFinal == 'gauche'){
        score += 1;
        tour-=1;
        reinitialisation();
    }
    else{
        score -= 1;
        tour-=1;
        reinitialisation();
    }
    requestAnimId = window.requestAnimationFrame(principale);
    }
};

var onKeyDown = function (event) {
    "use strict";
    if ( event.keyCode == CODE_TOUCHE_GAUCHE ) {
        ALLER_GAUCHE = true;
    } else if ( event.keyCode == CODE_TOUCHE_DROITE ) {
        ALLER_DROITE = true;
    }
};

var onKeyUp = function (event) {
    "use strict";
    if ( event.keyCode == CODE_TOUCHE_GAUCHE ) {
        ALLER_GAUCHE = false;
    } else if ( event.keyCode == CODE_TOUCHE_DROITE ) {
        ALLER_DROITE = false;
    }
};

window.onkeydown = onKeyDown;
window.onkeyup = onKeyUp;
window.onload = initialisation;