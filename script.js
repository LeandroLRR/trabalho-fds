const meuBotao = document.getElementById('meuBotao');
const mensagemDiv = document.getElementById('mensagemDiv');
const mensagem = 'Olá, seja bem vindo,';
meuBotao.addEventListener('click', function(){
    mensagemDiv.textContent=mensagem
    mensagemDiv. style.color = 'green';
    mensagemDiv. style.marginTop = '10px';
    mensagemDiv. style. fontWeight = 'bold';
});