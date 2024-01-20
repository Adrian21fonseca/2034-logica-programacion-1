let numeroSecreto = Math.floor(Math.random()*50)+1;
let numeroUsuario = 0;
let numeroIntento = 1;
let palabraVez = "vez";
let intentosMaximos = 10;

console.log(numeroSecreto);

while(numeroUsuario != numeroSecreto){
    numeroUsuario = prompt("intruduzca un numero del 1 al 50 por favor");

console.log(numeroUsuario)

    if (numeroUsuario == numeroSecreto){
        alert (`BIEN!!! Has acertado,  el numero es: ${numeroUsuario}. Lo hicistes en ${numeroIntento} ${palabraVez}`)
    } else{
        if(numeroUsuario >numeroSecreto){
            alert("el numero secreto es menor")
        }else{
            alert("el numero secreto es mayor")
        }
        numeroIntento++;
        palabraVez = "veces";

        if(numeroIntento > intentosMaximos){
            alert(`has llegado al numero maximo de ${intentosMaximos} intentos`)
            break;
        }
       //alert('Lo siento no has adivinado el numero')
    };
};