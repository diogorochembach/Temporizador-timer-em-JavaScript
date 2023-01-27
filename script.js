// Capturando o botão start quando for clicado vai realizar algum evento//
const btnStart = document.getElementById('btn-start');

// Criando uma função pro botão para a hora que ele for clicado//
// btnStart.addEventListener()//

//Adicionando dois parametros para o escutador do evento//
// tipo do primeiro evento 'click'//
// o segundo evento é uma função () => {} o que vai acontecer quando for clicado no botão start?//
// vai dentro do .addEventListener//

//preciso além de capturar o evento do botão preciso capturar o valor dos 3 inputs//
//essas três variaveis 'const' cada uma recebem o valor da tag input do html//
//Essa função fou criada para capturar os valores adicionados nos inputs através do parametro "value"//
//após capturar os valores do inputs, temos que converter os campos em segundos que é 1000 ms//
// na variável let vamos capturar o valor que foi passado no input horas//
//sempre que pegamos um 'value' de um elemento vem sempre como uma string, não sendo possivel fazer um calculo//
//precisamos pegar essa string e converter para número inteiro//
//para realizar essa conversão se string para numero inteiro usa o 'parseInt' após o sinal de = (parseInt(hours.value) * 60 * 60)
//usa-se o 'parseInt' nas horas, minutos e segundos//

//agora precisamos capturar o elemento que tem o dado 'timer' para poder alterar o valor deste elemento//
// sempre este elemento do get.elementById('timer') vai entre aspas dentro dos parenteses.//
//desta forma capturamos o elemento e deixamos na variavel display como esta//

//agora do lado de fora do add.Eventlistener vamos criar uma função//
//uma das funcçoes vai ser o display//

//agora dentro do add.EventListener vamso colocar a chamada da função timer//
//com os parametros (duration, display)//
//a função timer é que vai fazer todos os calculos que precisamos fazer//

//exiete um metodo em JS chamado 'setInterval()' ele vai fazer alguma coisa a cada x tempo//
//este tempo ele é passado em milisegundos//
//para isso criamos uma função que vai ser executado a cada 1000 ms//

//agora precisamos converter de volta as horas dentro so 'setInterval'//
//pois anteriormente convertemos para milisegundos//

//no setInterval quando convertermos de volta para horas, vai gerar hora com virgula, quebrada//
//para resolver essa situação temos que arredondar para baixo utilizando o 'Math.floor'//

//apos a configuração das horas, minutos e segundos temos que configurar para que nos campos do display//
//não desconfigure quando estiver somente com um digito//

//hours recebe "=" hours | hours < menor que 10 ? se sim, então vou pegar o caracter '0' e concatenar com hours//
// se não ':' só mostra minutes//

//agora precisamos mostrar os valores no display//
//através do inner.HTML alteramos o valor do HTML desse elemento e vai aparecer horas `${hours} : ${minutes} : ${seconds}`//

//o setInterval executa tudo a cada 1000ms//
//a cada execução temos que diminuir o timer = duration;
//timer -= 1;//

//importante colocar o clearInterval no setInterval para para a execução//






btnStart.addEventListener('click', () => {
    const hours = document.getElementById('hour');
    const minutes = document.getElementById('minute');
    const seconds = document.getElementById('second');

    let duration = (parseInt(hours.value) * 60 * 60) + (parseInt(minutes.value) * 60) + parseInt(seconds.value);

    display = document.getElementById('timer');
    timer(duration, display);
    
})

const timer = (duration, display) => {
    let timer = duration;
    let hours, minutes, seconds;

    let interval = setInterval(() => {
        hours = Math.floor((timer / 60) / 60);
        minutes = Math.floor(timer / 60 - (hours * 60));
        seconds = Math.floor(timer % 60);

        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        display.innerHTML = `${hours}:${minutes}:${seconds}`;

        timer -= 1;

        if(timer < 0){
            display.innerHTML = 'FIM';
            clearInterval(interval);
        }


    }, 1000);
}
