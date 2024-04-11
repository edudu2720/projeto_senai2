function exibirtextonatela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}
exibirtextonatela('h1', 'Hora do desafio');
 
function validarclick1(){
    console.log('O botão foi clicado');
}
function validarclick2(){
    console.log('O botão foi clicado');
    alert('Eu amo java Script')
}
function validarclick3(){
    console.log('O botão foi clicado');
    let cidade = prompt ('Fale uma cidade do Brasil');
    alert(`quando fui em ${cidade} eu lembrei de você`)
}
function validarclick4(){
    console.log('O botão foi clicado');
    let numero1 = parseInt(prompt ('digite um numero para que eu possa soma-lo'));
    let numero2 = parseInt(prompt ('peça um segundo numero para somalos'));
    let resultado = numero1 + numero2;
    alert (`O resultado é de ${resultado}`)
}
