


function escrevendoLetra(){
    function ativaLetra (elemento){
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrTexto.forEach((Letra, i)=>{
            setTimeout(()=>{
                elemento.innerHTML += Letra;
            }, 75 * i)
        })
    }
    
    const titulo = document.querySelector('.digitando');
    ativaLetra(titulo); 
}

escrevendoLetra();



function menuMobol(){
    const ativaMenu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('header .navegacao-primaria')


    ativaMenu.addEventListener('click', () => {
        ativaMenu.classList.toggle('fa-x');
        navMenu.classList.toggle('ativado');
    })
}

menuMobol();


function sobreMim(){

    const divExperiencia = document.querySelectorAll('.experience_content div');
    const liExperiencia = document.querySelectorAll('.experience_content ul li');
    const divEducation = document.querySelectorAll('.education_content div');
    const liEducation = document.querySelectorAll('.education_content ul li');

    divExperiencia[0].classList.add('ativo');
    divEducation[0].classList.add('ativo');
    liExperiencia[0].classList.add('ativo');
    liEducation[0].classList.add('ativo');

    function slideShow(index) {
        divExperiencia.forEach((div) => {
            div.classList.remove('ativo');
        });
        liExperiencia.forEach((botao) => {
            botao.classList.remove('ativo');
        });
        divExperiencia[index].classList.add('ativo');
        liExperiencia[index].classList.add('ativo');
    }

    function slideShow2(index) {
        divEducation.forEach((div) => {
            div.classList.remove('ativo');
        });
        liEducation.forEach((botao) => {
            botao.classList.remove('ativo');
        });
        divEducation[index].classList.add('ativo');
        liEducation[index].classList.add('ativo');
    }


    liExperiencia.forEach((event, index) => {
        event.addEventListener('click', () => {
            slideShow(index)
        });
    });

    liEducation.forEach((event, index) => {
        event.addEventListener('click', () => {
            slideShow2(index)
        });
    });

}

sobreMim();


const listaALL = document.querySelectorAll('.projects_armazenamento ul li');
const buttonGeral = document.querySelectorAll('.projects_models ul li');
const buttonALL = document.querySelectorAll('.projects_models .all');

function removeClick(index){
    buttonGeral.forEach((item)=>{
        item.classList.remove('ativo');
    });
    buttonGeral[index].classList.add('ativo');
}

buttonGeral.forEach((item, index)=>{
    item.addEventListener('click', ()=>{
        removeClick(index);
    })
})


function showLista(lista, buttom = "todos"){
    lista.forEach((item)=>{
        item.classList.remove('ativo');
    })
    if(buttom == 'finalizados'){
        lista[1].classList.add('ativo');
        lista[2].classList.add('ativo');
        lista[3].classList.add('ativo');
        lista[4].classList.add('ativo');
        lista[5].classList.add('ativo');
        lista[6].classList.add('ativo');
        lista[7].classList.add('ativo');
    }
    if(buttom == 'andamento'){
        lista[0].classList.add('ativo');
    }
    if(buttom == 'todos'){
        lista[0].classList.add('ativo');
        lista[1].classList.add('ativo');
        lista[2].classList.add('ativo');
        lista[3].classList.add('ativo');
        lista[4].classList.add('ativo');
        lista[5].classList.add('ativo');
        lista[6].classList.add('ativo');
        lista[7].classList.add('ativo');
    }
}

buttonGeral.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        let currentButton = e.target;
        if(currentButton.classList.contains('todos')){
            showLista(listaALL);
        }
        if(currentButton.classList.contains('finalizados')){
            showLista(listaALL, "finalizados");
        }
        if(currentButton.classList.contains('andamento')){
            showLista(listaALL, "andamento");
        }
        if(currentButton.classList.contains('todos')){
            showLista(listaALL, "todos");
        }
    })
});

const btn = document.getElementById("btnTop")

btn.addEventListener('click', function(){
    window.scrollTo(0,0)
});

document.addEventListener('scroll',ocultar);

function ocultar(){
    if(window.scrollY > 10){
        btn.style.display = "flex"
    }else{
        btn.style.display = "none"
    }
}

ocultar();



const urlDonadella = "https://github.com/somentedois/Donnadela-Commerce",
 urlPizzaria = "https://github.com/Wellyngton-Nascimento-Santos/pizzaria-cli",
 urlLogin = "https://github.com/Wellyngton-Nascimento-Santos/login",
 urlCadastro = "https://github.com/Wellyngton-Nascimento-Santos/Cadastro",
 urlDashboard = "https://github.com/Wellyngton-Nascimento-Santos/dashboard",
 urlFormulario = "https://github.com/Wellyngton-Nascimento-Santos/formulario",
 urlFlexbox1 = "https://github.com/Wellyngton-Nascimento-Santos/flexbox1",
 urlFlexbox2 = "https://github.com/Wellyngton-Nascimento-Santos/flexbox2";

const btnDonadella = document.querySelector("#btnDonadella"),
 btnPizzaria = document.querySelector("#btnPizzaria"),
 btnLogin = document.querySelector("#btnLogin"),
 btnCadastro = document.querySelector("#btnCadastro"),
 btnDashboard = document.querySelector("#btnDashboard"),
 btnFormulario = document.querySelector("#btnFormulario"),
 btnFlexbox1 = document.querySelector("#btnFlexbox1"),
 btnFlexbox2 = document.querySelector("#btnFlexbox2");


function openDonadella(urlDonadella) {
    const win = window.open(urlDonadella, '_blank');
    win.focus();
}

btnDonadella.addEventListener('click', function(){
    openDonadella(urlDonadella);
});


function openPizzaria(urlPizzaria) {
    const win = window.open(urlPizzaria, '_blank');
    win.focus();
}

btnPizzaria.addEventListener('click', function(){
    openPizzaria(urlPizzaria);
});


function openLogin(urlLogin) {
    const win = window.open(urlLogin, '_blank');
    win.focus();
}

btnLogin.addEventListener('click', function(){
    openLogin(urlLogin);
});


function openCadastro(urlCadastro) {
    const win = window.open(urlCadastro, '_blank');
    win.focus();
}

btnCadastro.addEventListener('click', function(){
    openCadastro(urlCadastro);
});


function openDashboard(urlDashboard) {
    const win = window.open(urlDashboard, '_blank');
    win.focus();
}

btnDashboard.addEventListener('click', function(){
    openDashboard(urlDashboard);
});


function openFormulario(urlFormulario) {
    const win = window.open(urlFormulario, '_blank');
    win.focus();
}

btnFormulario.addEventListener('click', function(){
    openFormulario(urlFormulario);
});


function openFlexbox1(urlFlexbox1) {
    const win = window.open(urlFlexbox1, '_blank');
    win.focus();
}

btnFlexbox1.addEventListener('click', function(){
    openFlexbox1(urlFlexbox1);
});

function openFlexbox2(urlFlexbox2) {
    const win = window.open(urlFlexbox2, '_blank');
    win.focus();
}

btnFlexbox2.addEventListener('click', function(){
    openFlexbox2(urlFlexbox2);
});