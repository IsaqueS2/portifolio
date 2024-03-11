// Função para animação responsiva da barra de navegação
function test() {
    // Seleciona o novo item da barra de navegação e calcula sua largura e altura
    var tabsNewAnim = $("#navbarSupportedContent");
    var selectorNewAnim = $("#navbarSupportedContent").find("li").length;
    var activeItemNewAnim = tabsNewAnim.find(".active");
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();

    // Aplica os estilos de animação ao seletor horizontal
    $(".hori-selector").css({
        top: itemPosNewAnimTop.top + "px",
        left: itemPosNewAnimLeft.left + "px",
        height: activeWidthNewAnimHeight + "px",
        width: activeWidthNewAnimWidth + "px",
    });

    // Adiciona ou remove a classe 'active' ao clicar em um item do menu
    $("#navbarSupportedContent").on("click", "li", function (e) {
        $("#navbarSupportedContent ul li").removeClass("active");
        $(this).addClass("active");
        var activeWidthNewAnimHeight = $(this).innerHeight();
        var activeWidthNewAnimWidth = $(this).innerWidth();
        var itemPosNewAnimTop = $(this).position();
        var itemPosNewAnimLeft = $(this).position();
        $(".hori-selector").css({
            top: itemPosNewAnimTop.top + "px",
            left: itemPosNewAnimLeft.left + "px",
            height: activeWidthNewAnimHeight + "px",
            width: activeWidthNewAnimWidth + "px",
        });
    });
}

// Função para executar a animação ao carregar a página
$(document).ready(function () {
    setTimeout(function () {
        test();
    });
});

// Função para executar a animação ao redimensionar a janela
$(window).on("resize", function () {
    setTimeout(function () {
        test();
    }, 500);
});

// Função para alternar a visibilidade da barra de navegação ao clicar no botão de toggler
$(".navbar-toggler").click(function () {
    $(".navbar-collapse").slideToggle(300);
    setTimeout(function () {
        test();
    });
});


// Função para ocultar o preloader, spinner e exibir o conteúdo após o carregamento da página com um atraso
window.addEventListener("load", function () {
    // Seleciona o preloader
    const preloader = document.querySelector(".preloader");

    // Seleciona o corpo da página
    const body = document.body;

    // Remove a classe que oculta o conteúdo
    body.classList.remove("hidden-content");

    // Oculta o preloader após um atraso de 2.5 segundos (2500 milissegundos)
    setTimeout(function () {
        preloader.style.display = "none";
    }, 2000);
});

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const elements = document.querySelectorAll(".hidden");
const elements2 = document.querySelectorAll(".hidden2");
elements.forEach((element) => myObserver.observe(element));
elements2.forEach((element2) => myObserver.observe(element2));
