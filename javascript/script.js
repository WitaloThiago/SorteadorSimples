// Pegando os elementos do HTML
let input = document.getElementById('tel')
let resultado = document.querySelector('.resultado')
let btn = document.querySelector('.btn')

// Adicionando um evento click no botão
btn.addEventListener('click', () => {

   // Se o valor do input for menor ou igual a 1
    if(input.value <= 1){

        resultado.innerHTML = "Digite um número maior que 2"

    }
    
    // Se não for, vai gerar um valor aleatório no limite que o usuário colocou
    else{

        const multi = Math.trunc((Math.random() * input.value)) 
        resultado.innerHTML = "O Número Sorteado Foi " + multi
    }
   
})
