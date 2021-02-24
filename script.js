const calcular = document.getElementById('calcula');

function valida(){
    const nome = document.getElementById('name').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;

    if (nome !== '' && peso !== '' && altura !== ''){
        imc(peso, altura, nome);
    }else{
        document.querySelector('.resultado').innerHTML=`Por favor preencha todos os campos!`
    }
}
function imc(peso, altura, nome){
        const valorIMC = (peso / (altura * altura)).toFixed(1);
        document.querySelector('.resultado').innerHTML=`Resultado: <br> O IMC de ${nome} é de: ${valorIMC}` 
}

calcular.addEventListener('click', valida)