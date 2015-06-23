var CODE_TOUCHE_GAUCHE = 37;
var CODE_TOUCHE_DROITE = 39;
var ALLER_GAUCHE = false;
var ALLER_DROITE = false;
var joueur;
var code;
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

var perso = function (Fondlargeur) {
    "use strict";
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

var objetDescend = function () {
    this.posXDroite = 538;
    this.posYDroite = 0;
    this.largeurObjet = 330;
    this.hauteurObjet = 50;
    this.posXGauche = 158;
    this.posYGauche = 0;
    this.img_code_D = new Image();
    this.img_code_G = new Image();
    this.ObjetD;
    this.ObjetG;
    this.numero;

    this.getRandomInt = function (min, max) {
            "use strict";
            return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    this.random = function () {
            "use strict";
            if (Math.random() < 0.5) {
                this.numero = this.getRandomInt(1, 10);
                this.ObjetD = true;
                this.img_code_D.src = 'img/bon_code/b' + this.numero + '.svg';
                this.img_code_G.src = 'img/mauvais_code/m' + this.numero + '.svg';
            }
            else {
                this.numero = this.getRandomInt(1, 10);
                this.ObjetG = true;
                this.img_code_D.src = 'img/mauvais_code/m' + this.numero + '.svg';
                this.img_code_G.src = 'img/bon_code/b' + this.numero + '.svg';
            }
    };

    this.dessiner = function () {
            "use strict";
            canvasCodeContext.fillRect (this.posXDroite, this.posYDroite, this.largeurObjet, this.hauteurObjet);
            canvasCodeContext.drawImage(this.img_code_D, this.posXDroite, this.posYDroite, this.largeurObjet, this.hauteurObjet);

            canvasCodeContext.fillRect (this.posXGauche, this.posYGauche, this.largeurObjet, this.hauteurObjet);
            canvasCodeContext.drawImage(this.img_code_G, this.posXGauche, this.posYGauche, this.largeurObjet, this.hauteurObjet);
    };

    this.animer = function () {
            "use strict";
            this.posYDroite+=1;
            this.posYGauche+=1;
    };
};

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
        code.ObjetD = false;
        code.ObjetG = false;
        code.posYDroite = 0;
        code.posYGauche = 0;
        code.random();
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
        code = new objetDescend();
        code.random();
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
    if (code.posYDroite < 400) {
        code.dessiner();
        code.animer();
    }
    else if (code.ObjetD === true && joueur.positionFinal == 'droite'){
        score += 1;
        tour-=1;
        reinitialisation();
    }
    else if (code.ObjetG === true && joueur.positionFinal == 'gauche'){
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