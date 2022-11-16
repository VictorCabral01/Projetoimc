const button = document.getElementById('button');
document.getElementById('criarP');

button.addEventListener("click", myFunction);

function myFunction(evento) {
  

    evento.preventDefault();


    const colocarPeso = document.querySelector('#peso');
    const colocarAltura = document.querySelector('#altura');
  
    const peso = Number(colocarPeso.value);
    const altura = Number(colocarAltura.value);

    const resultado = peso/altura**2;
     
    let nivel = resultado;
    

    if(nivel >=39.9){
        nivel ="Obesidade grau 3"
    }else if(nivel >= 34.9){
        nivel = "Obesidade grau 2"
    }else if(nivel >= 29.9){
        nivel = "Obesidade grau 1"
    }else if(nivel >= 24.9){
        nivel = "Sobre peso"
    }else if(nivel >= 18.5){
        nivel = "Peso normal"
    }else if(nivel <= 18.5){
        nivel = "Abaixo do peso"
    }


    if(resultado >= 18.5 <= 23.9 ){ criarP.classList.add('alerta')}
     if(resultado >= 24.9 <= 29.9 ){ criarP.classList.add('normal')}
      if(resultado >= 24.8 ){ criarP.classList.add('foraDoPeso')}
    

    
   
    document.getElementById('criarP').innerHTML = `<strong>Seu IMC é: ${resultado.toFixed(1)}  Você está: ${nivel}</strong>`;
  
}










 
