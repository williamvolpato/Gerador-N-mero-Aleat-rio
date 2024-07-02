function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;             
      }
    
    if (quantidade > (ate - de + 1)){
        alert('A quantidade de números sorteados não pode ser maior que o intervalor entre "Do número e "Até o número".');
        return;        
    }   
        
    
    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++){
        numero = numeroAleatorio(de, ate);

        while (sorteados.includes(numero)){
            numero = numeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados.join(' - ')}</label>`
    alterarBotao();
}


function numeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarBotao(){
    let botao = document.getElementById ('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')){ 
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('quantidade').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarBotao();
}
