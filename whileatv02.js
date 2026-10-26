//2 - faça um laço que imprima o calculo da tabuada que foi escolhido pelo usuario


//qual tabuada quer saber ?

contador = 1
var numeroUsuario = 7

while ( contador <= 10){

    var resultado = (contador * numeroUsuario)
    console.log(numeroUsuario + " x " + contador + " = " + resultado)

    contador = contador + 1
}