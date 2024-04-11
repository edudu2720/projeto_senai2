let n1 = parseInt(prompt('Digite o primeiro número'));
let n2 = parseInt(prompt('Digite o segundo número'));
let n3 = parseInt(prompt('Digite o terceiro número'));
let media;

function calcularMedia(parN1, parN2, parN3){
    return (parN1+parN2+parN3)/3;
}

media = calcularMedia(n1, n2, n3);
alert (`A média entre os números é: ${media.toFixed(2)}`);