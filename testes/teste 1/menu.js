// Seleciona o botão de menu e o menu de navegação
const menuButton = document.querySelector('.menu-button');
const navMenu = document.querySelector('nav ul');

// Adiciona um evento de clique ao botão de menu
menuButton.addEventListener('click', function() {
  // Alterna a classe 'active' no botão de menu e no menu de navegação
  menuButton.classList.toggle('active');
  navMenu.classList.toggle('active');
});
