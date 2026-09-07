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


// ==========================================
// BUSCA (filtra os cards de área profissional)
// ==========================================
document.addEventListener('DOMContentLoaded', function () {

  const searchBox = document.querySelector('.search-box');
  const searchToggleBtn = document.getElementById('searchToggleBtn');
  const searchInput = document.getElementById('searchInput');
  const cards = document.querySelectorAll('.cards-grid .card');
  const noResultsMessage = document.getElementById('noResultsMessage');
  const searchTermDisplay = document.getElementById('searchTermDisplay');

  if (!searchBox || !searchToggleBtn || !searchInput) {
    return;
  }

  function abrirBusca() {
    searchBox.classList.add('is-open');
    searchToggleBtn.setAttribute('aria-expanded', 'true');
    searchInput.focus();   // já deixa o cursor piscando dentro do campo
  }

  function fecharBusca() {
    searchBox.classList.remove('is-open');
    searchToggleBtn.setAttribute('aria-expanded', 'false');
    searchInput.value = '';
    filtrarCards('');   // ao fechar, volta a mostrar todos os cards
  }

  // Clique no ícone de lupa: alterna entre abrir e fechar
  searchToggleBtn.addEventListener('click', function (event) {
    event.stopPropagation();
    const jaEstaAberta = searchBox.classList.contains('is-open');
    if (jaEstaAberta) {
      fecharBusca();
    } else {
      abrirBusca();
    }
  });

  // Impede que clicar DENTRO do campo de texto feche a busca
  // (sem isso, o listener de "clique fora" logo abaixo fecharia ela sozinha)
  searchInput.addEventListener('click', function (event) {
    event.stopPropagation();
  });

  // Clique fora do search-box: fecha
  document.addEventListener('click', function (event) {
    if (!searchBox.contains(event.target)) {
      fecharBusca();
    }
  });

  // Tecla Esc: fecha
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      fecharBusca();
    }
  });

  // O coração da busca: roda a cada letra digitada
  function filtrarCards(termo) {
    const termoBusca = termo.trim().toLowerCase();
    let algumCardVisivel = false;

    cards.forEach(function (card) {
      const titulo = card.querySelector('h4').textContent.toLowerCase();
      const descricao = card.querySelector('p').textContent.toLowerCase();
      const combina = titulo.includes(termoBusca) || descricao.includes(termoBusca);

      // Atributo "hidden" nativo do HTML: o navegador já sabe esconder o elemento sozinho
      card.hidden = termoBusca !== '' && !combina;

      if (!card.hidden) {
        algumCardVisivel = true;
      }
    });

    const semResultado = termoBusca !== '' && !algumCardVisivel;
    if (noResultsMessage) {
      noResultsMessage.hidden = !semResultado;
    }
    if (searchTermDisplay) {
      searchTermDisplay.textContent = termo;
    }
  }

  // "input" dispara a cada tecla digitada (diferente de "change", que só dispara ao sair do campo)
  searchInput.addEventListener('input', function (event) {
    filtrarCards(event.target.value);
  });

});


// ==========================================
// MENU LATERAL RETRÁTIL
// ==========================================
document.addEventListener('DOMContentLoaded', function () {

  const sidebar = document.getElementById('sidebar');
  const sidebarToggleBtn = document.getElementById('sidebarToggleBtn');

  if (!sidebar || !sidebarToggleBtn) {
    return;
  }

  sidebarToggleBtn.addEventListener('click', function () {
    const estaEncolhida = sidebar.classList.toggle('is-collapsed');
    // classList.toggle() já adiciona OU remove a classe, e devolve true/false
    // dizendo o resultado — economiza escrever um if/else aqui.

    sidebarToggleBtn.setAttribute('aria-expanded', String(!estaEncolhida));
    sidebarToggleBtn.setAttribute(
      'aria-label',
      estaEncolhida ? 'Expandir menu lateral' : 'Recolher menu lateral'
    );
  });

});


// ==========================================
// ITEM ATIVO DO MENU LATERAL
// ==========================================
// Como as próximas páginas ainda não existem, os links são só "#" por enquanto.
// Aqui a gente simula visualmente a navegação: ao clicar, aquele item fica
// verde (como o "Início" já ficava por padrão), e os outros voltam ao normal.
document.addEventListener('DOMContentLoaded', function () {

  const linksDoMenu = document.querySelectorAll('.main-nav a');

  linksDoMenu.forEach(function (link) {
    link.addEventListener('click', function (event) {
      // Impede o navegador de "pular" pro topo da página (comportamento padrão de href="#")
      event.preventDefault();

      // Tira o destaque de QUALQUER link que estava ativo antes...
      linksDoMenu.forEach(function (outroLink) {
        outroLink.classList.remove('is-active');
      });

      // ...e coloca só no que acabou de ser clicado
      link.classList.add('is-active');
    });
  });

});


// ==========================================
// CARROSSEL DO HERO
// ==========================================
document.addEventListener('DOMContentLoaded', function () {

  const heroCarousel = document.getElementById('heroCarousel');
  if (!heroCarousel) {
    return;
  }

  const slides = Array.from(heroCarousel.querySelectorAll('.hero-slide'));
  const indicadores = Array.from(heroCarousel.querySelectorAll('.hero-indicator'));
  const botaoAnterior = document.getElementById('heroPrevBtn');
  const botaoProximo = document.getElementById('heroNextBtn');

  const TOTAL_SLIDES = slides.length;
  const INTERVALO_AUTOPLAY_MS = 9000;   // troca sozinho a cada 9 segundos (era 6s — rápido demais)

  let indiceAtual = 0;
  let temporizadorAutoplay = null;

  function irParaSlide(indiceDesejado) {
    // Esse cálculo com "%" (resto da divisão) faz o índice sempre "dar a volta":
    // se passar do último slide, volta pro primeiro; se for antes do primeiro, vai pro último.
    const novoIndice = (indiceDesejado + TOTAL_SLIDES) % TOTAL_SLIDES;

    slides[indiceAtual].classList.remove('is-active');
    if (indicadores[indiceAtual]) {
      indicadores[indiceAtual].classList.remove('is-active');
    }

    indiceAtual = novoIndice;

    slides[indiceAtual].classList.add('is-active');
    if (indicadores[indiceAtual]) {
      indicadores[indiceAtual].classList.add('is-active');
    }
  }

  function irParaProximoSlide() {
    irParaSlide(indiceAtual + 1);
  }

  function irParaSlideAnterior() {
    irParaSlide(indiceAtual - 1);
  }

  function iniciarAutoplay() {
    temporizadorAutoplay = setInterval(irParaProximoSlide, INTERVALO_AUTOPLAY_MS);
  }

  function reiniciarAutoplay() {
    // Toda vez que a pessoa navega manualmente, reinicia a contagem —
    // assim o carrossel não troca de novo "sem querer" logo em seguida.
    clearInterval(temporizadorAutoplay);
    iniciarAutoplay();
  }

  if (botaoProximo) {
    botaoProximo.addEventListener('click', function () {
      irParaProximoSlide();
      reiniciarAutoplay();
    });
  }

  if (botaoAnterior) {
    botaoAnterior.addEventListener('click', function () {
      irParaSlideAnterior();
      reiniciarAutoplay();
    });
  }

  indicadores.forEach(function (indicador, indice) {
    indicador.addEventListener('click', function () {
      irParaSlide(indice);
      reiniciarAutoplay();
    });
  });

  // Pausa o autoplay enquanto o mouse está em cima do hero (boa prática:
  // ninguém gosta de tentar ler um texto que troca sozinho embaixo do cursor)
  heroCarousel.addEventListener('mouseenter', function () {
    clearInterval(temporizadorAutoplay);
  });

  heroCarousel.addEventListener('mouseleave', function () {
    iniciarAutoplay();
  });

  iniciarAutoplay();

});


// ==========================================
// AÇÕES DOS BOTÕES DO HERO
// ==========================================
document.addEventListener('DOMContentLoaded', function () {

  const cardsGrid = document.querySelector('.cards-grid');
  const botoesDoHero = document.querySelectorAll('.hero-cta');

  botoesDoHero.forEach(function (botao) {
    botao.addEventListener('click', function () {
      const acao = botao.getAttribute('data-action');

      if (acao === 'scroll-cards' && cardsGrid) {
        cardsGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      if (acao === 'teste-vocacional') {
        // Essa página ainda não existe no projeto — em vez de não fazer nada
        // (o que pareceria um botão quebrado), avisamos a pessoa com um toast.
        mostrarToast('🚧 Teste vocacional em construção — em breve por aqui!');
      }
    });
  });

  function mostrarToast(mensagem) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = mensagem;
    document.body.appendChild(toast);

    // Espera 3 segundos, começa a animação de saída, e só then remove do HTML de vez
    setTimeout(function () {
      toast.classList.add('toast--saindo');
      setTimeout(function () {
        toast.remove();
      }, 300);   // 300ms = tempo da transição definida no CSS (.toast--saindo)
    }, 3000);
  }

});