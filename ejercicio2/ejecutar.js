var Total_segs;
var Total_mins;
var cronometro;
//tablero
var tablero=new Array(3);
function SeleccionaCelda(x,y){
    tablero[x][y]=1; //podra ser 2 por otro jugador
    //pintamos la celda
    PintarCelda(x,y,"blue");
}
function RevisarCelda(x,y){
    SeleccionaCelda(x,y);
}
function ejecutar(){
    //array tablero
    for(i=0;i<3;i++){
        tablero[i]=new Array(3);
    }
    LimpiaReloj();
    IniciaReloj();
    //pulsar casilla al azar
    x=Math.round(Math.random()*2);
    y=Math.round(Math.random()*2);
    SeleccionaCelda(x,y);   
}
ejecutar();