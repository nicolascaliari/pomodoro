
let minutos = document.querySelector('.minutos');
let segundos = document.querySelector('.segundos');
let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
let restart = document.querySelector('#restart');
let pause;


let botonPomodoro = document.querySelector('#boton-pomodoro');


botonPomodoro.addEventListener('click', function(){
let body = document.querySelector('body');
body.style.backgroundColor="rgb(52, 76, 214)";
reloj.innerHTML = "26:00";

});


var min;
var seg;

min = 26;
seg= 0;
// funcion principal de fildelitydoro
function temporizador(){
    
    

    var intervalo = setInterval(function(){ 
        let reloj = document.getElementById("reloj");
        if(pause === false && seg==0 && min==0){
              clearInterval(intervalo);
            reloj.innerHTML = "00:00";
            reloj.style.backgroundColor="rgba(255, 42, 42, 0.466)";
            reloj.style.borderRadius="15px";
            alert("Se termino tu tiempo \n Tomate un descanso :D");
            start.style.display="block";
            stop.style.display="none";
        }else if(pause === false && seg ==0){
            min = min -1;
            seg = 59;
            reloj.innerHTML = min + ":" + seg;
        }else if(pause === false && seg > 0){
            seg = seg -1;
            reloj.innerHTML = min + ":" + seg;
            reloj.style.backgroundColor="transparent";
        } else {
            clearInterval(intervalo);
        }
    },
    1000);

    mostrarBoton()
    
}


function mostrarBoton() {
    start.style.display="none";
    stop.style.display="block";
    pause = false;
}


function pausarReloj() {
    pause = true;
    start.style.display="block";
    stop.style.display="none";
};

function restartReloj(){
        min = 26;
        seg = 0;
        reloj.innerHTML="26:00"
        pausarReloj();
};

restart.addEventListener('click', restartReloj);
start.addEventListener('click', temporizador, mostrarBoton);
stop.addEventListener('click',pausarReloj);




//descanso corto


let botonCorto = document.querySelector('#boton-corto');


function activarBotonCorto() {
let body = document.querySelector('body');
body.style.backgroundColor="#2F86B8";
reloj.innerHTML = "05:00";


}



botonCorto.addEventListener('click', activarBotonCorto, mostrarBoton);















//descanso largo


let botonLargo = document.querySelector('#boton-largo');


function activarBotonLargo() {
    let body = document.querySelector('body');
    body.style.backgroundColor="#0E79F3";
    reloj.innerHTML = "15:00";
    
}



botonLargo.addEventListener('click', activarBotonLargo);