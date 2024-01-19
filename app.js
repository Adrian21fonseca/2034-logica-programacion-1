let numeroSecreto = 6;
let numeroUsuario = prompt("intruduzca un numero del 1 al 10 por favor");

console.log(numeroUsuario)

if (numeroUsuario == numeroSecreto){
    alert (`BIEN!!! Has acertado,  el numero es: ${numeroUsuario}`)
} else{
    alert('Lo siento no has adivinado el numero')
}; 