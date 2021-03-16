
var context = null;
var rectangle = { x: 0, y: 0, hauteur: 0, largeur: 0, couleur: "", vecX: 0, vecY: 0, speed: 20/60 };
var obstacles = [];
var clic = { x: 0, y: 0 };    
var lastUpdate = 0;
var mur = [];
var nbMurs = 16;
var leMerdy = new Image();
leMerdy.src = "OVNI.png";
var alien = new Image();
alien.src = "merdix.png"
var clemerdy = false;
var shadow = new Image();
shadow.src = "shadow.png";
var message = false;

var exit = {x: 7*50+16,
    y: 14*50+16,
    largeur: 30,
    hauteur: 30};
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

    rectangle.hauteur = rectangle.largeur = 20;
    rectangle.x = 7*50+20;
    rectangle.y = 0;
    rectangle.couleur = "#FF0000";
    //35 c cool pour le gros
    for (var i=0; i < nbMurs; i++) {
        for(var j = 0 ; j<nbMurs ;j++){
            obstacles[i][j] = {
                x: i*50,
                y: j*50,
                largeur: 10,
                hauteur: 10
            };
        }
    }
    getLevel2();
    boucleDeJeu();
}

getLevel2 = function(){
    
    obstacles[14][13] = {
    x: obstacles[14][13].x,
    y: obstacles[14][13].y,
    largeur: 10*5,
    hauteur: 10
  }

  obstacles[14][14] = {
    x: obstacles[14][14].x-50,
    y: obstacles[14][14].y,
    largeur: 10*6,
    hauteur: 10
  }

  obstacles[14][12] = {
    x: obstacles[14][12].x-50,
    y: obstacles[14][12].y,
    largeur: 10*6,
    hauteur: 10
  }

  obstacles[13][12] = {
    x: obstacles[13][12].x,
    y: obstacles[13][12].y,
    largeur: 10,
    hauteur: 50*2+10
  }

  obstacles[14][10] = {
    x: obstacles[14][10].x,
    y: obstacles[14][10].y,
    largeur: 10,
    hauteur: 50*2+10
  }

  obstacles[13][10] = {
    x: obstacles[13][10].x,
    y: obstacles[13][10].y,
    largeur: 10*6,
    hauteur: 10
  }

  obstacles[14][9] = {
    x: obstacles[14][9].x,
    y: obstacles[14][9].y,
    largeur: 10*6,
    hauteur: 10
  }

  obstacles[13][8] = {
    x: obstacles[13][8].x,
    y: obstacles[13][8].y,
    largeur: 10*6,
    hauteur: 10
  }

  obstacles[14][8] = {
    x: obstacles[14][8].x,
    y: obstacles[14][8].y,
    largeur: 10,
    hauteur: 10*6
  }

   obstacles[14][7] = {
    x: obstacles[14][7].x,
    y: obstacles[14][7].y,
    largeur: 10*6,
    hauteur: 10
  }

  obstacles[14][5] = {
    x: obstacles[14][5].x,
    y: obstacles[14][5].y,
    largeur: 10,
    hauteur: 10*6
  }

  obstacles[14][6] = {
    x: obstacles[14][6].x-50,
    y: obstacles[14][6].y,
    largeur: 10*6,
    hauteur: 10
  }
  
  obstacles[13][6] = {
    x: obstacles[13][6].x,
    y: obstacles[13][6].y,
    largeur: 10,
    hauteur: 10*6
  }

  obstacles[10][7] = {
    x: obstacles[10][7].x,
    y: obstacles[10][7].y,
    largeur: 50*3+10,
    hauteur: 10
  }

  obstacles[12][7] = {
    x: obstacles[12][7].x,
    y: obstacles[12][7].y,
    largeur: 10,
    hauteur: 50*2+10
  }

  obstacles[12][9] = {
    x: obstacles[12][9].x,
    y: obstacles[12][9].y,
    largeur: 10*6,
    hauteur: 10
  }

  obstacles[13][9] = {
    x: obstacles[13][9].x,
    y: obstacles[13][9].y,
    largeur: 10,
    hauteur: 10*6
  }
  
  obstacles[13][4] = {
    x: obstacles[13][4].x,
    y: obstacles[13][4].y,
    largeur: 50*2+10,
    hauteur: 10
  }

  obstacles[12][14] = {
    x: obstacles[12][14].x,
    y: obstacles[12][14].y,
    largeur: 10,
    hauteur: 10*6
  }

  obstacles[11][14] = {
    x: obstacles[11][14].x,
    y: obstacles[11][14].y-50,
    largeur: 10,
    hauteur: 10*6
  }

  obstacles[11][13] = {
    x: obstacles[11][13].x,
    y: obstacles[11][13].y,
    largeur: 50*2+10,
    hauteur: 10
  }

  obstacles[11][11] = {
    x: obstacles[11][11].x,
    y: obstacles[11][11].y,
    largeur: 50*2+10,
    hauteur: 10
  }

  obstacles[12][11] = {
    x: obstacles[12][11].x,
    y: obstacles[12][11].y,
    largeur: 10,
    hauteur: 50+10
  }

  obstacles[12][12] = {
    x: obstacles[12][12].x-100,
    y: obstacles[12][12].y,
    largeur: 50*2+10,
    hauteur: 10
  }

  obstacles[10][11] = {
    x: obstacles[10][11].x,
    y: obstacles[10][11].y,
    largeur: 10,
    hauteur: 50*4+10
  }

  obstacles[9][11] = {
    x: obstacles[9][11].x,
    y: obstacles[9][11].y,
    largeur: 10,
    hauteur: 50*2+10
  }

  obstacles[9][13] = {
    x: obstacles[9][13].x,
    y: obstacles[9][13].y,
    largeur: 60,
    hauteur: 10
  }

  obstacles[6][14] = {
    x: obstacles[6][14].x,
    y: obstacles[6][14].y,
    largeur: 50*3+10,
    hauteur: 10
  }

  obstacles[8][13] = {
    x: obstacles[8][13].x,
    y: obstacles[8][13].y,
    largeur: 10,
    hauteur: 100+10
  }

  obstacles[8][11] = {
    x: obstacles[8][11].x,
    y: obstacles[8][11].y,
    largeur: 10,
    hauteur: 60
  }
  
  obstacles[8][12] = {
    x: obstacles[8][12].x-50,
    y: obstacles[8][12].y,
    largeur: 60,
    hauteur: 10
  }

  obstacles[7][12] = {
    x: obstacles[7][12].x,
    y: obstacles[7][12].y,
    largeur: 10,
    hauteur: 60
  }

  obstacles[4][13] = {
    x: obstacles[4][13].x,
    y: obstacles[4][13].y,
    largeur: 50*3+10,
    hauteur: 10
  }

  obstacles[4][12] = {
    x: obstacles[4][12].x,
    y: obstacles[4][12].y,
    largeur: 10,
    hauteur: 100
  }

  obstacles[5][14] = {
    x: obstacles[5][14].x,
    y: obstacles[5][14].y,
    largeur: 10,
    hauteur: 60
  }

  obstacles[6][13] = {
    x: obstacles[6][13].x,
    y: obstacles[6][13].y,
    largeur: 10,
    hauteur: 60
  }

  obstacles[7][11] = {
    x: obstacles[7][11].x-50,
    y: obstacles[7][11].y,
    largeur: 60,
    hauteur: 10
  }

  obstacles[6][10] = {
    x: obstacles[6][10].x,
    y: obstacles[6][10].y,
    largeur: 10,
    hauteur: 100
  }

  obstacles[5][10] = {
    x: obstacles[5][10].x,
    y: obstacles[5][10].y,
    largeur: 60,
    hauteur: 10
  }

  obstacles[5][8] = {
    x: obstacles[5][8].x,
    y: obstacles[5][8].y,
    largeur: 10,
    hauteur: 100
  }

  obstacles[3][10] = {
    x: obstacles[3][10].x,
    y: obstacles[3][10].y,
    largeur: 10,
    hauteur: 60
  }

  obstacles[3][11] = {
    x: obstacles[3][11].x,
    y: obstacles[3][11].y,
    largeur: 100,
    hauteur: 10
  }

  obstacles[7][10] = {
    x: obstacles[7][10].x,
    y: obstacles[7][10].y,
    largeur: 50*5+10,
    hauteur: 10
  }

  obstacles[11][9] = {
    x: obstacles[11][9].x,
    y: obstacles[11][9].y,
    largeur: 10,
    hauteur: 60
  }

  obstacles[10][8] = {
    x: obstacles[10][8].x,
    y: obstacles[10][8].y,
    largeur: 10,
    hauteur: 100
  }

  obstacles[5][9] = {
    x: obstacles[5][9].x,
    y: obstacles[5][9].y,
    largeur: 100,
    hauteur: 10
  }

  obstacles[7][9] = {
    x: obstacles[7][9].x,
    y: obstacles[7][9].y,
    largeur: 10,
    hauteur: 60
  }
  
  /******************/
  /***BOX d'ARTHUR***/
  //BORD DU COTE
  obstacles[0][0] = {
    x: obstacles[0][0].x,
    y: obstacles[0][0].y,
    largeur: 10,
    hauteur: 50*15
  }

  obstacles[15][0] = {
    x: obstacles[15][0].x,
    y: obstacles[15][0].y,
    largeur: 10,
    hauteur: 50*15
  }

  //BORD DU HAUT

  obstacles[1][0]={
    x: obstacles[0][0].x,
    y: obstacles[0][0].y,
    largeur: 50*7,
    hauteur: 10
  }

  obstacles[14][0]={
    x: obstacles[8][0].x,
    y: obstacles[8][0].y,
    largeur: 50*7,
    hauteur: 10
  }

  obstacles[8][0]={
    x: obstacles[8][0].x,
    y: obstacles[8][0].y,
    largeur: 10,
    hauteur: 50
  }

  obstacles[6][1]={
    x: obstacles[6][1].x,
    y: obstacles[6][1].y,
    largeur: 50,
    hauteur: 10
  }
  
  obstacles[7][1]={
    x: obstacles[7][1].x,
    y: obstacles[7][1].y,
    largeur: 10,
    hauteur: 50*2
  }

  obstacles[7][2]={
    x: obstacles[7][2].x,
    y: obstacles[7][2].y,
    largeur: 50*2,
    hauteur: 10
  }
  
  obstacles[5][0]={
    x: obstacles[5][0].x,
    y: obstacles[5][0].y,
    largeur: 10,
    hauteur: 50*2
  }

  obstacles[5][2]={
    x: obstacles[5][2].x,
    y: obstacles[5][2].y,
    largeur: 50,
    hauteur: 10
  }

  obstacles[9][1]={
    x: obstacles[9][1].x,
    y: obstacles[9][1].y,
    largeur: 10,
    hauteur: 50*2
  }
  
  obstacles[9][3]={
    x: obstacles[9][3].x,
    y: obstacles[9][3].y,
    largeur: 50,
    hauteur: 10
  }

  obstacles[10][0]={
    x: obstacles[10][0].x,
    y: obstacles[10][0].y,
    largeur: 10,
    hauteur: 50*2
  }

  obstacles[10][2]={
    x: obstacles[10][2].x,
    y: obstacles[10][2].y,
    largeur: 50,
    hauteur: 10
  }

  obstacles[6][3]={
    x: obstacles[6][3].x,
    y: obstacles[6][3].y,
    largeur: 50+10,
    hauteur: 10
  }

  obstacles[7][3]={
    x: obstacles[6][3].x,
    y: obstacles[6][3].y,
    largeur: 10,
    hauteur: 50
  }
  
  obstacles[4][4]={
    x: obstacles[4][4].x,
    y: obstacles[4][4].y,
    largeur: 50*2,
    hauteur: 10
  }
  
  obstacles[5][4]={
    x: obstacles[4][4].x,
    y: obstacles[4][4].y,
    largeur: 10,
    hauteur: 50*6
  }

  obstacles[11][0]={
    x: obstacles[11][0].x,
    y: obstacles[11][0].y,
    largeur: 10,
    hauteur: 50
  }

  obstacles[13][0]={
    x: obstacles[13][0].x,
    y: obstacles[13][0].y,
    largeur: 10,
    hauteur: 50*2
  }

  obstacles[12][2]={
    x: obstacles[12][2].x,
    y: obstacles[12][2].y,
    largeur: 50*2,
    hauteur: 10
  }
  
  obstacles[14][1]={
    x: obstacles[14][1].x,
    y: obstacles[14][1].y,
    largeur: 50,
    hauteur: 10
  }

  obstacles[12][1]={
    x: obstacles[12][1].x,
    y: obstacles[12][1].y,
    largeur: 10,
    hauteur: 50*3
  }

  obstacles[11][3]={
    x: obstacles[11][3].x,
    y: obstacles[11][3].y,
    largeur: 50,
    hauteur: 10
  }

  obstacles[14][2]={
    x: obstacles[14][2].x,
    y: obstacles[14][2].y,
    largeur: 10,
    hauteur: 50
  }
  
  obstacles[13][3]={
    x: obstacles[13][3].x,
    y: obstacles[13][3].y,
    largeur: 10,
    hauteur: 50*2
  }
  
  obstacles[12][5]={
    x: obstacles[12][5].x,
    y: obstacles[12][5].y,
    largeur: 50,
    hauteur: 10
  }

  obstacles[12][6]={
    x: obstacles[12][5].x,
    y: obstacles[12][5].y,
    largeur: 10,
    hauteur: 50+10
  }
  
  obstacles[7][4]={
    x: obstacles[7][4].x,
    y: obstacles[7][4].y,
    largeur: 50*4,
    hauteur: 10
  }

  obstacles[8][3]={
    x: obstacles[8][3].x,
    y: obstacles[8][3].y,
    largeur: 10,
    hauteur: 50
  }
  
  obstacles[11][4]={
    x: obstacles[11][4].x,
    y: obstacles[11][4].y,
    largeur: 10,
    hauteur: 50*3
  }

  obstacles[7][5]={
    x: obstacles[7][4].x,
    y: obstacles[7][4].y,
    largeur: 10,
    hauteur: 50*3
  }
  
  obstacles[5][6]={
    x: obstacles[5][6].x,
    y: obstacles[5][6].y,
    largeur: 50*2,
    hauteur: 10
  }

  obstacles[5][5]={
    x: obstacles[5][5].x,
    y: obstacles[5][5].y,
    largeur: 10,
    hauteur: 50
  }
  
  obstacles[6][5]={
    x: obstacles[5][5].x,
    y: obstacles[5][5].y,
    largeur: 50+10,
    hauteur: 10
  }

  obstacles[7][6]={
    x: obstacles[7][5].x,
    y: obstacles[7][5].y+50,
    largeur: 50*2,
    hauteur: 10
  }

  obstacles[9][5]={
    x: obstacles[9][5].x,
    y: obstacles[9][5].y,
    largeur: 10,
    hauteur: 50*3
  }

  obstacles[9][6]={
    x: obstacles[9][6].x,
    y: obstacles[6][6].y,
    largeur: 50,
    hauteur: 10
  }

  obstacles[10][5]={
    x: obstacles[10][5].x,
    y: obstacles[10][5].y,
    largeur: 10,
    hauteur: 50
  }

  obstacles[8][6]={
    x: obstacles[8][6].x,
    y: obstacles[8][6].y,
    largeur: 10,
    hauteur: 50*3
  }

  obstacles[9][8]={
    x: obstacles[9][8].x,
    y: obstacles[9][8].y,
    largeur: 50*2,
    hauteur: 10
  }

  obstacles[10][8]={
    x: obstacles[10][8].x,
    y: obstacles[10][8].y,
    largeur: 10,
    hauteur: 50*2
  }

  obstacles[8][9]={
    x: obstacles[8][9].x,
    y: obstacles[8][9].y,
    largeur: 50,
    hauteur: 10
  }

  obstacles[4][7]={
    x: obstacles[4][7].x,
    y: obstacles[4][7].y,
    largeur: 50*2,
    hauteur: 10
  }

  obstacles[6][7]={
    x: obstacles[6][7].x,
    y: obstacles[6][7].y,
    largeur: 10,
    hauteur: 50
  }

  obstacles[6][8]={
    x: obstacles[6][8].x,
    y: obstacles[6][8].y,
    largeur: 50*2,
    hauteur: 10
  }


  
  /******************/

  /***BOX de TAYEB***/
  // Bord bas
  obstacles[0][15] = {
    x: obstacles[0][15].x,
    y: obstacles[0][15].y,
    largeur: 50*7,
    hauteur: 10
  }
  obstacles[8][15] = {
    x: obstacles[8][15].x,
    y: obstacles[8][15].y,
    largeur: 50*7,
    hauteur: 10
  }
    //coin haut gauche
  obstacles[0][1] = {
    x: obstacles[0][1].x,
    y: obstacles[0][1].y,
    largeur: 50*2,
    hauteur: 10
  }
  
  obstacles[2][1] = {
    x: obstacles[2][1].x,
    y: obstacles[2][1].y,
    largeur: 10,
    hauteur: 50*2
  }

obstacles[1][3] = {
    x: obstacles[1][3].x,
    y: obstacles[1][3].y,
    largeur: 50,
    hauteur: 10
  }

  obstacles[1][2] = {
    x: obstacles[1][2].x,
    y: obstacles[1][2].y,
    largeur: 10,
    hauteur: 50
  }

  obstacles[0][4] = {
    x: obstacles[0][4].x,
    y: obstacles[0][4].y,
    largeur: 50*3,
    hauteur: 10
  }

  obstacles[3][0] = {
    x: obstacles[3][0].x,
    y: obstacles[3][0].y,
    largeur: 10,
    hauteur: 50*2
  }

  obstacles[4][1] = {
    x: obstacles[4][1].x,
    y: obstacles[4][1].y,
    largeur: 10,
    hauteur: 50
  }
  
  obstacles[3][2] = {
    x: obstacles[3][2].x,
    y: obstacles[3][2].y,
    largeur: 50,
    hauteur: 10
  }
  
  obstacles[3][3] = {
    x: obstacles[3][3].x,
    y: obstacles[3][3].y,
    largeur: 10,
    hauteur: 50*2
  }

  obstacles[4][3] = {
    x: obstacles[3][3].x,
    y: obstacles[3][3].y,
    largeur: 50*2,
    hauteur: 10
  }

  obstacles[8][15] = {
    x: obstacles[8][15].x,
    y: obstacles[8][15].y,
    largeur: 50*7,
    hauteur: 10
  }

  obstacles[1][4] = {
    x: obstacles[1][4].x,
    y: obstacles[1][4].y,
    largeur: 10,
    hauteur: 50
  }

  obstacles[0][6] = {
    x: obstacles[0][6].x,
    y: obstacles[0][6].y,
    largeur: 50*2,
    hauteur: 10
  }

  obstacles[2][5] = {
    x: obstacles[2][5].x,
    y: obstacles[2][5].y,
    largeur: 10,
    hauteur: 50
  }

  obstacles[1][6] = {
    x: obstacles[1][6].x,
    y: obstacles[1][6].y,
    largeur: 10,
    hauteur: 50*2
  }

  obstacles[1][9] = {
    x: obstacles[1][9].x,
    y: obstacles[1][9].y,
    largeur: 10,
    hauteur: 50*4
  }

  obstacles[1][14] = {
    x: obstacles[1][14].x,
    y: obstacles[1][14].y,
    largeur: 10,
    hauteur:50
  }

  obstacles[1][13] = {
    x: obstacles[1][13].x,
    y: obstacles[1][13].y,
    largeur: 50*2,
    hauteur: 10
}

obstacles[3][13] = {
    x: obstacles[3][13].x,
    y: obstacles[3][13].y,
    largeur: 10,
    hauteur: 50*2
  }

  obstacles[2][13] = {
    x: obstacles[2][13].x,
    y: obstacles[2][13].y,
    largeur: 10,
    hauteur: 50
  }

  obstacles[3][6] = {
    x: obstacles[3][6].x,
    y: obstacles[3][6].y,
    largeur: 10,
    hauteur: 50
  }

  obstacles[2][7] = {
    x: obstacles[2][7].x,
    y: obstacles[2][7].y,
    largeur: 50,
    hauteur: 10
  }

  obstacles[2][8] = {
    x: obstacles[2][7].x,
    y: obstacles[2][7].y,
    largeur: 10,
    hauteur: 50*2
  }

  obstacles[2][9] = {
    x: obstacles[1][9].x,
    y: obstacles[1][9].y,
    largeur: 50+10,
    hauteur: 10
  }

  obstacles[1][10] = {
    x: obstacles[1][10].x,
    y: obstacles[1][10].y,
    largeur: 50*3,
    hauteur: 10
  }

obstacles[3][8] = {
    x: obstacles[3][8].x,
    y: obstacles[3][8].y,
    largeur: 10,
    hauteur: 50
  }

  obstacles[4][8] = {
    x: obstacles[3][8].x,
    y: obstacles[3][8].y,
    largeur: 50,
    hauteur: 10
  }

  obstacles[2][11] = {
    x: obstacles[2][11].x,
    y: obstacles[2][11].y,
    largeur: 10,
    hauteur: 50
  }

  obstacles[2][12] = {
    x: obstacles[2][12].x,
    y: obstacles[2][12].y,
    largeur: 50*4,
    hauteur: 10
  }

  obstacles[7][10] = {
    x: obstacles[7][10].x,
    y: obstacles[7][10].y,
    largeur: 50*5,
    hauteur: 10
  }
  /******************/
}

boucleDeJeu = function() {
    update(Date.now());
    render();
    requestAnimationFrame(boucleDeJeu);
}

update = function(d) {
    var delta = d - lastUpdate;
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
     context.arc(rectangle.x+rectangle.largeur/2,rectangle.y+rectangle.hauteur/2,5,0,Math.PI*2);
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
    context.fillText('Exit', 7*50+16+2, 14*50+16+25,28);
    if(!(victory)){
      context.drawImage(shadow, rectangle.x-1920/2+rectangle.largeur/2, rectangle.y-1920/2+rectangle.hauteur/2);
    }
    
   
    if(victory){
      context.font = '30px Verdana italic';
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
    for (var i=0; i < obs.length; i++) {
      for(var j = 0; j < obs.length; j++)
        if (collision(rect, obs[i][j])) {
            return obs[i][j];
        }
    }
    return null;
}

collisionGraine = function(rect, obs) {
  for (var i=0; i < obs.length; i++) {
      if (collision(rect, obs[i])) {
          return obs[i];
      }
  }
  return null;
}
