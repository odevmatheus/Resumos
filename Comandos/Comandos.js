function Show() {
    let Responsivo = document.querySelector('.Anexo');
    if (Responsivo.classList.contains('Aberto')) {
        Responsivo.classList.remove('Aberto');
        document.querySelector('.Icone').src = "Imagens/Open.svg";
    } else {
        Responsivo.classList.add('Aberto');
        document.querySelector('.Icone').src = "Imagens/Close.svg";
    }
}
function Mostrar(el) {
    var Modo = document.getElementById(el).style.display;
    if(Modo == 'block'){
        document.getElementById(el).style.display = 'none';       
    }   else{                 
        document.getElementById(el).style.display = 'block';
    }
}
function Chave(){
    const Texto = "07e0a017-3ad3-4c09-989a-eea1695c1a69";
    const Resposta = document.getElementById('Chave');
    let InputTest = document.createElement("input");
    InputTest.value = Texto;
    document.body.appendChild(InputTest);
    InputTest.select();
    document.execCommand('copy');
    document.body.removeChild(InputTest); 
    Resposta.innerHTML = 'Copiado Com Sucesso';
}
