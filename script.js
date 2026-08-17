document.addEventListener("DOMContentLoaded", () => {
    const botaoMenu = document.querySelector("#botao-menu");
    const menu = document.querySelector("#menu");
    const linksMenu = document.querySelectorAll(".menu a");
    const botaoMensagem = document.querySelector("#botao-mensagem");
    const mensagem = document.querySelector("#mensagem");
    const ano = document.querySelector("#ano");

    // Atualiza automaticamente o ano do rodapé.
    ano.textContent = new Date().getFullYear();

    // Abre e fecha o menu em dispositivos móveis.
    botaoMenu.addEventListener("click", () => {
        const menuAberto = menu.classList.toggle("ativo");

        botaoMenu.setAttribute("aria-expanded", menuAberto);
        botaoMenu.setAttribute(
            "aria-label",
            menuAberto ? "Fechar menu" : "Abrir menu"
        );
    });

    // Fecha o menu depois que um link é selecionado.
    linksMenu.forEach((link) => {
        link.addEventListener("click", () => {
            menu.classList.remove("ativo");
            botaoMenu.setAttribute("aria-expanded", "false");
            botaoMenu.setAttribute("aria-label", "Abrir menu");
        });
    });

    // Exibe uma mensagem interativa.
    botaoMensagem.addEventListener("click", () => {
        mensagem.textContent =
            "🌱 Cada escolha sustentável ajuda a construir um campo mais forte hoje e um futuro melhor amanhã.";

        botaoMensagem.textContent = "Mensagem exibida";
    });
});
