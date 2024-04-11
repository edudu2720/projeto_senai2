let num1 = parseInt(prompt('Informe um número'));
let num2 = parseInt(prompt('Informe outro número'));
let maior;

function maiorNumero(parNum1, parNum2){
    if (parNum1 > parNum2){
        return parNum1;
    }
    else{
        return parNum2;
    }
}


maior = maiorNumero(num1, num2);
alert (`O maior número é: ${maior}`);