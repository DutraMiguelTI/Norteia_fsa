// ==========================================
// MENU DO PERFIL (dropdown do header)
// ==========================================
//
// A ideia é simples: o CSS já sabe como mostrar/esconder o menu
// (usando a classe "is-open"). Aqui a gente só decide QUANDO
// adicionar ou remover essa classe.

// Espera o HTML inteiro carregar antes de tentar encontrar os elementos.
// Sem isso, se o <script> rodasse antes do <body> terminar de carregar,
// document.getElementById poderia não encontrar nada ainda.
document.addEventListener('DOMContentLoaded', function () {

  const profileMenu = document.querySelector('.profile-menu');
  const profileBtn = document.getElementById('profileMenuBtn');

  // Proteção: se por algum motivo esses elementos não existirem na página,
  // o script simplesmente para aqui, em vez de quebrar com um erro no console.
  if (!profileMenu || !profileBtn) {
    return;
  }

  function abrirMenu() {
    profileMenu.classList.add('is-open');
    profileBtn.setAttribute('aria-expanded', 'true');
  }

  function fecharMenu() {
    profileMenu.classList.remove('is-open');
    profileBtn.setAttribute('aria-expanded', 'false');
  }

  // Clique no botão do perfil: alterna entre abrir e fechar
  profileBtn.addEventListener('click', function (event) {
    // Impede que esse clique "vaze" pro listener do document logo abaixo
    // (senão o menu abriria e fecharia no mesmo clique)
    event.stopPropagation();

    const jaEstaAberto = profileMenu.classList.contains('is-open');
    if (jaEstaAberto) {
      fecharMenu();
    } else {
      abrirMenu();
    }
  });

  // Clique em qualquer lugar FORA do menu: fecha
  document.addEventListener('click', function (event) {
    const cliqueFoiDentroDoMenu = profileMenu.contains(event.target);
    if (!cliqueFoiDentroDoMenu) {
      fecharMenu();
    }
  });

  // Tecla Esc: fecha (boa prática de acessibilidade)
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      fecharMenu();
    }
  });

});