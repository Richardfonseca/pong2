//Variaveis Bolinha
var xBolinha = 300;
var yBolinha = 200;
var diametro = 15;
var raio = diametro / 2;

//Variaveis da Velocidade
var velocidadeXbolinha = 6;
var velocidadeYbolinha = 6;

//Variaveis criação da Raquete
var xRaquete = 5;
var yRaquete = 150;
var raqueteComprimento = 10;
var raqueteAltura = 70;

//Variaveis do Oponente.
var xRaqueteOponente = 585;
var yRaqueteOponente = 150;

var velocidadeYoponente;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);

  mostraBolinha();
  movimentaBolinha();
  verificaColisao();
  mostraRaquete(xRaquete, yRaquete);
  movimentaRaquete();
  verificaColisaoRaquete();
  mostraRaqueteOponente(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaqueteOponente();

}

function bolinhaNaoFicaPresa(){
    if (XBola - raio < 0){
    XBola = 23
    }
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXbolinha;
  yBolinha += velocidadeYbolinha;
}

function verificaColisao(){

  if (xBolinha + raio> width || xBolinha - raio <0){
    velocidadeXbolinha *= -1;    
  }

  if (yBolinha + raio > height || yBolinha - raio<0){
    velocidadeYbolinha *= -1;

  }
}

function mostraRaquete(x, y){
   rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
}
function mostraRaqueteOponente(x, y){
   rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaRaquete(){
  if(keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }

  if(keyIsDown(DOWN_ARROW)){
    yRaquete += + 10;
  }
}

function verificaColisaoRaquete(){
  if(xBolinha < xRaquete + raqueteComprimento 
     && yBolinha - raio < 
       yRaquete + raqueteAltura
         && yBolinha + raio > yRaquete){

    velocidadeXbolinha *= -1;
  }
}

function verificaColisaoRaqueteOponente(){
  if (xBolinha + raio > xRaqueteOponente 
      && yBolinha + raio <
        yRaqueteOponente + raqueteAltura 
          && yBolinha + raio > yRaquete) {

    velocidadeXbolinha *= -1;
  } 
}


function movimentaRaqueteOponente(){

  velocidadeYoponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 -30;
  yRaqueteOponente += velocidadeYoponente;
}
