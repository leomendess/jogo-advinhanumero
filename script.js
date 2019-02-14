function aleatorio(min, max) {
    return Math.floor(Math.random()*(max - min + 1)) + min;
}
let numeroAleatorio = aleatorio(0, 50);

let numeroUsuario =  Number(prompt('Escolha um numero de 0 a 50...'));


let i= 0; 
while(i < 9){
    if(i == 0){
        aleatorio(0, 50);
    }
    if(numeroAleatorio == numeroUsuario){
        alert("Você Acertou");
        i= 50;
    } 
    else{
        if(numeroAleatorio > numeroUsuario){
            alert("Você Errou, tente novamente, o numero era maior");
        }
       
        else{alert("Você Errou, tente novamente, o numero era menor")};
        alert(`Tente Novamente. Você Tem Mais ${-i+9} chances.`);
        i++;
        numeroUsuario =  Number(prompt('Escolha um numero de 0 a 50...'));

    }
}
if(i==9){
    alert('Suas Vidas Esgotaram');

}