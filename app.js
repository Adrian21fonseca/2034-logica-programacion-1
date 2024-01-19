let numeroSecreto = 6;
let numeroUsuario = 0;
let numeroIntento = 1;
let palabraVez = "vez";

while(numeroUsuario != numeroSecreto){
    numeroUsuario = prompt("intruduzca un numero del 1 al 10 por favor");

console.log(numeroUsuario)

    if (numeroUsuario == numeroSecreto){
        alert (`BIEN!!! Has acertado,  el numero es: ${numeroUsuario}. Lo hicistes en ${numeroIntento} ${palabraVez}`)
    } else{
        if(numeroUsuario >numeroSecreto){
            alert("el numero secreto es menor")
        }else{
            alert("el numero secreto es mayor")
        }
        numeroIntento = numeroIntento + 1;
        palabraVez = "veces";
       //alert('Lo siento no has adivinado el numero')
    };
};