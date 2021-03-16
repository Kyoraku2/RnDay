var context = null;
var rectangle = { x: 0, y: 0, hauteur: 0, largeur: 0, couleur: "", vecX: 0, vecY: 0, speed: 20/60 };
var obstacles = [];
var clic = { x: 0, y: 0 };    
var lastUpdate = 0;
var mur = [];
var nbMurs = 11;
var leMerdy = new Image();
leMerdy.src = "OVNI.png";
var alien = new Image();
alien.src = "merdix.png"
var clemerdy = false;
var shadow = new Image();
shadow.src = "shadow.png";
var message = false;

var exit = {x: 5*70+25,
    y: 9*70+25,
    largeur: 40,
    hauteur: 40};
var victory = false;

for(var i = 0; i<nbMurs;i++){
  obstacles[i] = [];
}

init = function() {

    context = document.getElementById("cvs").getContext("2d");
    context.width = document.getElementById("cvs").width;
    context.height = document.getElementById("cvs").height;
    document.addEventListener("keydown", captureAppuiToucheClavier)
    document.addEventListener("keyup", captureRelacheToucheClavier)

    document.addEventListener("click", captureClicSouris)

    rectangle.hauteur = rectangle.largeur = 40;
    rectangle.x = 4*70+20;
    rectangle.y = 0;
    rectangle.couleur = "#FF0000";
    //35 c cool pour le gros
    for (var i=0; i < nbMurs; i++) {
        for(var j = 0 ; j<nbMurs ;j++){
            obstacles[i][j] = {
                x: i*70,
                y: j*70,
                largeur: 10,
                hauteur: 10
            };
        }
    }
    getLevel1();
    boucleDeJeu();
}

getLevel1 = function(){
  obstacles[0][0] = {
    x: obstacles[0][0].x,
    y: obstacles[0][0].y,
    largeur: 70*4,
    hauteur:10
  }
  obstacles[5][0] = {
    x: obstacles[5][0].x,
    y: obstacles[5][0].y,
    largeur: 70*5,
    hauteur:10
  }
    obstacles[0][1] = {
    x: 0,
    y: 0,
    largeur: 10,
    hauteur:70*10
  }
   obstacles[10][0] = {
    x: 700,
    y: 0,
    largeur: 10,
    hauteur:70*10
  }
  obstacles[7][9] = {
    x: obstacles[7][9].x,
    y: obstacles[7][9].y,
    largeur: 70*2,
    hauteur:10
  }
  obstacles[7][10] = {
    x: obstacles[7][10].x,
    y: obstacles[7][10].y-70,
    largeur: 10,
    hauteur:70
  }
  obstacles[10][8] = {
    x: obstacles[10][8].x-140,
    y: obstacles[10][8].y,
    largeur:70*2,
    hauteur:10
  }
  obstacles[10][6] = {
    x: obstacles[10][6].x-70,
    y: obstacles[10][6].y,
    largeur:70,
    hauteur:10
  }
  obstacles[9][7] = {
    x: obstacles[9][7].x,
    y: obstacles[9][7].y-70,
    largeur: 10,
    hauteur:70
  }
  obstacles[8][8] = {
    x: obstacles[8][8].x,
    y: obstacles[8][8].y-70,
    largeur: 10,
    hauteur:70
  }
  obstacles[8][7] = {
    x: obstacles[8][7].x-70,
    y: obstacles[8][7].y,
    largeur: 70,
    hauteur: 10
  }
  obstacles[7][7] = {
    x: obstacles[7][7].x,
    y: obstacles[7][7].y-70,
    largeur: 10,
    hauteur:70
  }
  obstacles[7][8] = {
    x: obstacles[7][8].x-70,
    y: obstacles[7][8].y,
    largeur: 80,
    hauteur: 10
  }
  obstacles[6][7] = {
    x: obstacles[6][7].x,
    y: obstacles[6][7].y,
    largeur: 10,
    hauteur:70*2
  }
  obstacles[3][9] = {
    x: obstacles[3][9].x,
    y: obstacles[3][9].y,
    largeur: 70*3,
    hauteur:10
  }

//Chez Tayeb

  // Bord bas
  obstacles[0][10] = {
    x: obstacles[0][10].x,
    y: obstacles[0][10].y,
    largeur: 70*5,
    hauteur: 10
  }
  obstacles[6][10] = {
    x: obstacles[6][10].x,
    y: obstacles[6][10].y,
    largeur: 70*4,
    hauteur: 10
  }
  
  //Coin haut gauche
  obstacles[1][0] = {
    x: obstacles[1][0].x,
    y: obstacles[1][0].y,
    largeur: 10,
    hauteur: 70
  }

  obstacles[0][2] = {
    x: obstacles[0][2].x,
    y: obstacles[0][2].y,
    largeur: 70*2,
    hauteur: 10
  }

  obstacles[2][1] = {
    x: obstacles[2][1].x,
    y: obstacles[2][1].y,
    largeur: 10,
    hauteur: 70
  }

  obstacles[1][3] = {
    x: obstacles[1][3].x,
    y: obstacles[1][3].y,
    largeur: 70,
    hauteur: 10
  }

  obstacles[2][3] = {
    x: obstacles[2][3].x,
    y: obstacles[2][3].y,
    largeur: 10,
    hauteur: 70*4
  }
  
  obstacles[0][4] = {
    x: obstacles[0][4].x,
    y: obstacles[0][4].y,
    largeur: 70,
    hauteur: 10
  }

  obstacles[1][4] = {
    x: obstacles[1][4].x,
    y: obstacles[1][4].y,
    largeur: 10,
    hauteur: 70
  }

  obstacles[0][6] = {
    x: obstacles[0][6].x,
    y: obstacles[0][6].y,
    largeur: 70,
    hauteur: 10
  }

  obstacles[0][8] = {
    x: obstacles[0][8].x,
    y: obstacles[0][8].y,
    largeur: 70,
    hauteur: 10
  }

  obstacles[1][7] = {
    x: obstacles[1][7].x,
    y: obstacles[1][7].y,
    largeur: 10,
    hauteur: 70
  }

  obstacles[3][7] = {
    x: obstacles[1][7].x,
    y: obstacles[1][7].y,
    largeur: 70*2,
    hauteur: 10
  }

  obstacles[2][5] = {
    x: obstacles[2][5].x,
    y: obstacles[2][5].y,
    largeur: 70,
    hauteur: 10
  }

  obstacles[3][6] = {
    x: obstacles[3][6].x,
    y: obstacles[3][6].y,
    largeur: 70,
    hauteur: 10
  }

  obstacles[1][9] = {
    x: obstacles[1][9].x,
    y: obstacles[1][9].y,
    largeur: 70,
    hauteur: 10
  }

  obstacles[2][8] = {
    x: obstacles[2][8].x,
    y: obstacles[2][8].y,
    largeur: 10,
    hauteur: 70
  }

  obstacles[3][8] = {
    x: obstacles[2][8].x,
    y: obstacles[2][8].y,
    largeur: 70*3,
    hauteur: 10
  }

  obstacles[5][9] = {
    x: obstacles[5][9].x,
    y: obstacles[5][9].y,
    largeur: 10,
    hauteur: 70
  }

  obstacles[8][5] = {
    x: obstacles[8][5].x,
    y: obstacles[8][5].y,
    largeur: 70,
    hauteur: 10
  }

  obstacles[0][9] = { // ça fait niveau 8,5
    x: obstacles[8][5].x,
    y: obstacles[8][5].y,
    largeur: 10,
    hauteur: 70
  }
  

/*******LA BOX A ARTHUR********** 
*********************************
*********************************/
  //Truc random du milieu
  obstacles[5][1] = {
    x: obstacles[5][0].x,
    y: obstacles[5][0].y,
    largeur: 10,
    hauteur: 80
  }
  
  obstacles[3][0] = {
    x: obstacles[3][0].x,
    y: obstacles[3][0].y,
    largeur: 10,
    hauteur: 70*4
  }

  obstacles[4][1] = {
    x: obstacles[4][1].x,
    y: obstacles[4][1].y,
    largeur: 70,
    hauteur: 10
  }

  obstacles[3][2] = {
    x: obstacles[3][2].x,
    y: obstacles[3][2].y,
    largeur: 70*6,
    hauteur: 10
  }

  obstacles[6][1] = {
    x: obstacles[6][1].x,
    y: obstacles[6][1].y,
    largeur: 70*3,
    hauteur: 10
  }
  
  obstacles[6][2] = {
    x: obstacles[6][1].x,
    y: obstacles[6][1].y,
    largeur: 10,
    hauteur: 70*2
  }

  obstacles[8][2] = {
    x: obstacles[8][2].x,
    y: obstacles[8][2].y,
    largeur: 10,
    hauteur: 80
  }
  
  obstacles[9][3] = {
    x: obstacles[9][3].x,
    y: obstacles[9][3].y,
    largeur: 70,
    hauteur: 10
  }
  
  obstacles[7][3] = {
    x: obstacles[7][3].x,
    y: obstacles[7][3].y,
    largeur: 10,
    hauteur: 70*2
  }
  
  obstacles[7][4] = {
    x: obstacles[7][4].x,
    y: obstacles[4][4].y,
    largeur: 70*2,
    hauteur: 10
  }

  obstacles[9][4] = {
    x: obstacles[9][4].x,
    y: obstacles[9][4].y,
    largeur: 10,
    hauteur: 70
  }

  obstacles[4][3] = {
    x: obstacles[4][3].x,
    y: obstacles[4][3].y,
    largeur: 70,
    hauteur: 10
  }

  obstacles[4][4] = {
    x: obstacles[4][3].x,
    y: obstacles[4][3].y,
    largeur: 10,
    hauteur: 70*5
  }

  obstacles[5][3] = {
    x: obstacles[5][3].x,
    y: obstacles[5][3].y,
    largeur: 10,
    hauteur: 70*2
  }

  obstacles[5][4] = {
    x: obstacles[5][4].x,
    y: obstacles[5][4].y,
    largeur: 70,
    hauteur: 10
  }
  
  obstacles[5][6] = {
    x: obstacles[5][6].x,
    y: obstacles[5][6].y,
    largeur: 70*3,
    hauteur: 10
  }

  obstacles[6][5] = {
    x: obstacles[6][5].x,
    y: obstacles[6][5].y,
    largeur: 10,
    hauteur: 70
  }

  obstacles[5][7] = {
    x: obstacles[5][6].x,
    y: obstacles[5][6].y,
    largeur: 10,
    hauteur: 70*2
  }
}

boucleDeJeu = function() {
    update(Date.now());
    render();
    requestAnimationFrame(boucleDeJeu);
}

update = function(d) {
    var delta = 20;
    lastUpdate = d;
    var c; 
    rectangle.x += rectangle.vecX * delta * rectangle.speed;
    if (rectangle.x < 0) {
        rectangle.x = 0;
    }
    else if (rectangle.x > context.width - rectangle.largeur) {
        rectangle.x = context.width - rectangle.largeur;
    }
    else if ((c = collisionAvecObstacles(rectangle,obstacles)) != null) {
        if (rectangle.vecX > 0) {
            rectangle.x = c.x - rectangle.largeur;
        }
        else {
            rectangle.x = c.x + c.largeur;
        }
    }

    rectangle.y += rectangle.vecY * delta * rectangle.speed;
    if (rectangle.y < 0) {
        rectangle.y = 0;
    }
    else if (rectangle.y > context.height - rectangle.hauteur) {
        rectangle.y = context.height - rectangle.hauteur;
    }
    else if ((c = collisionAvecObstacles(rectangle,obstacles)) != null) {
        if (rectangle.vecY > 0) {
            rectangle.y = c.y - rectangle.hauteur;
        }
        else {
            rectangle.y = c.y + c.hauteur;
        }
    }
    if(collision(rectangle,exit)){
      victory = true;
    }

}

render = function() {
    context.clearRect(0, 0, context.width, context.height);

    
    //Pour la trainée
    context.moveTo(rectangle.x+rectangle.largeur/2, rectangle.y+rectangle.hauteur/2);
    context.arc(rectangle.x+rectangle.largeur/2,rectangle.y+rectangle.hauteur/2,10,0,Math.PI*2);
    context.fillStyle='blue';
    context.fill();
    

    context.fillStyle = rectangle.couleur;
    context.drawImage(alien, rectangle.x, rectangle.y, rectangle.largeur, rectangle.hauteur);

    context.fillStyle="black";
    for (var i=0; i < nbMurs; i++) {
      for(var j = 0 ; j<nbMurs ;j++){
        context.fillRect(obstacles[i][j].x, obstacles[i][j].y, obstacles[i][j].largeur, obstacles[i][j].hauteur);
      }
    }

    if(clemerdy){
      context.drawImage(leMerdy, rectangle.x, rectangle.y, rectangle.largeur, rectangle.hauteur);
    }

    

    //Indication sortie
    context.fillStyle = "lime";
    context.fillRect(exit.x,exit.y,exit.largeur,exit.hauteur);
    context.fillStyle = "black";
    context.font = '20px Arial';
    context.fillText('Exit', 5*70+25+2, 9*70+25+25,50);
    if(!(victory)){
      context.drawImage(shadow, rectangle.x-1920/2+rectangle.largeur/2, rectangle.y-1920/2+rectangle.hauteur/2);
    }
    
   
    if(victory){
      context.font = '30px Open sans, Sans-serif';
      context.fillStyle = "red";
      context.fillText('Vous avez trouvé la sortie !', (context.width-400)/2, 
      context.height/2,500);
      rectangle.x = 4*70+20;
      rectangle.y = 0;
      rectangle.vecX = 0;
      rectangle.vecY = 0;
      document.getElementById("vid").style.display = "block";
    }
}

captureAppuiToucheClavier = function(event) {
  if (victory == false) {
    switch (event.keyCode) {
        case 38: // up arrow
            rectangle.vecY = -1;
            break;
        case 40: // down arrow
            rectangle.vecY = 1;
            break;
        case 37: // left arrow
            rectangle.vecX = -1;
            break;
        case 39: // right arrow
            rectangle.vecX = 1;
            break;
        // autres cas si nécessaire
    }
  }
}

captureRelacheToucheClavier = function(event) {
    switch (event.keyCode) {
    case 38: // up arrow
        if (rectangle.vecY < 0) {
            rectangle.vecY = 0;
        }
        break;
    case 40: // down arrow
        if (rectangle.vecY > 0) {
            rectangle.vecY = 0;
        }
        break;
    case 37: // left arrow
        if (rectangle.vecX < 0) {
            rectangle.vecX = 0;
        }
        break;
    case 39: // right arrow
        if (rectangle.vecX > 0) {
            rectangle.vecX = 0;
        }
        break;
    // autres cas si nécessaire
    }
    
}

captureClicSouris = function(event) {
    // calcul des coordonnées de la souris dans le canvas
    if (event.target.id == "cvs") {
        clic.x = event.pageX - event.target.offsetLeft;
        clic.y = event.pageY - event.target.offsetTop;

        if (clic.x >= rectangle.x &&
            clic.x <= rectangle.x+rectangle.largeur &&
            clic.y >= rectangle.y &&
            clic.y <= rectangle.y+rectangle.hauteur) {
                /*rectangle.couleur = "#" + rectangle.couleur.substr(5) + rectangle.couleur.substr(1,4);*/
           clemerdy = true;    
            
        }
    }
}

collision = function(rect1, rect2) {
    return !(rect1.x+rect1.largeur <= rect2.x ||
                rect1.x >= rect2.x+rect2.largeur ||
                rect1.y+rect1.hauteur <= rect2.y ||
                rect1.y >= rect2.y+rect2.hauteur);
}

collisionAvecObstacles = function(rect, obs) {
    for (var i=0; i < nbMurs; i++) {
      for(var j = 0 ;j<nbMurs;j++)
        if (collision(rect, obs[i][j])) {
            return obs[i][j];
        }
    }
    return null;
}
