// ==========================================
// FUNÇÃO COMPARTILHADA: mostrarToast()
// ==========================================
// Fica aqui (fora de qualquer bloco) porque mais de uma funcionalidade
// usa ela: os botões do hero E os cards de área profissional.
// Mostra um aviso temporário no canto da tela, útil pra ações que ainda
// não têm uma página de verdade por trás.
function mostrarToast(mensagem) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = mensagem;
  document.body.appendChild(toast);

  // Espera 3 segundos, começa a animação de saída, e só então remove do HTML de vez
  setTimeout(function () {
    toast.classList.add('toast--saindo');
    setTimeout(function () {
      toast.remove();
    }, 300);   // 300ms = tempo da transição definida no CSS (.toast--saindo)
  }, 3000);
}


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

  const CHAVE_LOCALSTORAGE = 'norteia:sidebarEncolhida';

  function aplicarEstado(estaEncolhida) {
    sidebar.classList.toggle('is-collapsed', estaEncolhida);
    sidebarToggleBtn.setAttribute('aria-expanded', String(!estaEncolhida));
    sidebarToggleBtn.setAttribute(
      'aria-label',
      estaEncolhida ? 'Expandir menu lateral' : 'Recolher menu lateral'
    );
  }

  // Ao carregar a página: verifica se tem uma preferência salva de uma visita anterior.
  // localStorage guarda os dados só nesse navegador/computador (não é um "banco de dados"
  // de verdade, não sincroniza entre dispositivos nem precisa de servidor).
  const estadoSalvo = localStorage.getItem(CHAVE_LOCALSTORAGE);
  if (estadoSalvo === 'true') {
    // Desliga a transição só nesse primeiro ajuste, pra não "animar" um encolhimento
    // logo que a página abre — o efeito de slide deve aparecer só em cliques manuais.
    sidebar.style.transition = 'none';
    aplicarEstado(true);
    sidebar.offsetHeight;   // força o navegador a "recalcular" o layout antes de religar a transição
    sidebar.style.transition = '';
  }

  sidebarToggleBtn.addEventListener('click', function () {
    const estaEncolhida = !sidebar.classList.contains('is-collapsed');
    aplicarEstado(estaEncolhida);

    // Guarda a escolha pra lembrar na próxima vez que a página for aberta
    localStorage.setItem(CHAVE_LOCALSTORAGE, String(estaEncolhida));
  });

});


// ==========================================
// ITEM ATIVO DO MENU LATERAL
// ==========================================
// Como nem toda página existe ainda, alguns links continuam sendo só "#" —
// pra esses, a gente simula visualmente a navegação (o item fica verde).
// Mas se o link já tem um destino real (como "Testes" agora tem), a gente
// deixa o navegador seguir o link normalmente, sem interceptar.
document.addEventListener('DOMContentLoaded', function () {

  const linksDoMenu = document.querySelectorAll('.main-nav a');

  linksDoMenu.forEach(function (link) {
    link.addEventListener('click', function (event) {
      const ehLinkPlaceholder = link.getAttribute('href') === '#';

      if (!ehLinkPlaceholder) {
        // Link de verdade (ex: "teste-intro.html") — deixa o navegador navegar.
        // Não precisamos mexer na classe "is-active" aqui: a página vai mudar
        // de qualquer forma, então esse estado visual deixa de importar.
        return;
      }

      // A partir daqui, só roda pra links que ainda são "#" (placeholder)
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
        // A página já existe agora — navega de verdade em vez de mostrar o aviso
        window.location.href = 'teste-intro.html';
      }
    });
  });

});


// ==========================================
// CARDS DE ÁREA PROFISSIONAL (clicáveis)
// ==========================================
// Cada card, ao ser clicado, abre um modal com uma descrição detalhada
// daquela área. O modal é um só (fica no fim do <main>, no HTML) — aqui a
// gente só troca o conteúdo dele de acordo com o card clicado.
document.addEventListener('DOMContentLoaded', function () {

  const cards = document.querySelectorAll('.cards-grid .card');

  const overlay = document.getElementById('areaModalOverlay');
  const modalIcon = document.getElementById('areaModalIcon');
  const modalTitulo = document.getElementById('areaModalTitulo');
  const modalTexto = document.getElementById('areaModalTexto');
  const botaoFechar = document.getElementById('areaModalFechar');

  // Descrição detalhada de cada área, pelo mesmo "slug" usado no atributo
  // data-area do card. Pra mudar o texto de uma área específica, é só
  // editar a string correspondente aqui.
  const DESCRICOES_DETALHADAS = {
    'saude-bem-estar': 'A área de Saúde e Bem-estar reúne profissões dedicadas a cuidar da vida e da qualidade de vida das pessoas, física e mentalmente. Inclui cursos como Medicina, Enfermagem, Fisioterapia e Nutrição. Combina muito com quem gosta de cuidar de outras pessoas, tem empatia e curiosidade pelo funcionamento do corpo humano, e se sente bem trabalhando em contato direto com o público.',
    'tecnologia-inovacao': 'Tecnologia e Inovação reúne quem gosta de resolver problemas com lógica, criatividade e ferramentas digitais. Inclui cursos como Ciência da Computação, Sistemas de Informação, Engenharia de Software e Análise de Dados. Combina com quem curte quebrar a cabeça com desafios lógicos, aprender coisas novas o tempo todo e criar soluções que impactam o dia a dia de muita gente.',
    'negocios-gestao': 'Negócios e Gestão reúne quem gosta de organizar processos, liderar pessoas e pensar estrategicamente sobre como uma empresa ou projeto funciona. Inclui cursos como Administração, Economia e Ciências Contábeis. Combina com quem se sente confortável tomando decisões, gosta de números e enxerga oportunidades onde outros veem só problemas.',
    'direito-justica': 'Direito e Justiça reúne quem se interessa por leis, ética e pela defesa de direitos, seja de pessoas, seja de instituições. O curso de Direito é a porta de entrada mais direta, com atuação possível em áreas como advocacia, magistratura e ministério público. Combina com quem gosta de argumentar, tem senso crítico apurado e se preocupa com justiça e cidadania.',
    'engenharia-construcao': 'Engenharia e Construção reúne quem gosta de projetar, calcular e transformar ideias em estruturas reais, de prédios a máquinas. Inclui cursos como Engenharia Civil, Mecânica e de Produção. Combina com quem tem raciocínio lógico-matemático forte, gosta de resolver problemas práticos e se interessa por como as coisas são construídas e funcionam.',
    'artes-design': 'Artes e Design reúne quem tem sensibilidade estética e gosta de se expressar visualmente. Inclui cursos como Design Gráfico, Design de Moda e Artes Visuais. Combina com quem enxerga o mundo de um jeito criativo, gosta de experimentar formas, cores e estilos, e busca transformar ideias abstratas em algo visual e concreto.',
    'comunicacao-marketing': 'Comunicação e Marketing reúne quem gosta de se conectar com pessoas, contar histórias e transmitir ideias de forma clara e persuasiva. Inclui cursos como Publicidade e Propaganda, Jornalismo e Marketing. Combina com quem tem facilidade de se expressar, é curioso sobre comportamento humano e gosta de criar conteúdo que engaje outras pessoas.',
    'educacao': 'Educação reúne quem tem vocação para ensinar, formar e inspirar outras pessoas. Inclui licenciaturas como Pedagogia, Letras e Matemática. Combina com quem tem paciência, gosta de explicar as coisas de formas diferentes até fazerem sentido, e se realiza vendo o progresso de quem está aprendendo.',
    'psicologia-comportamento': 'Psicologia e Comportamento reúne quem se interessa por entender como as pessoas pensam, sentem e se relacionam. O curso de Psicologia é o principal caminho, com atuação em clínicas, empresas, escolas e hospitais. Combina com quem é bom ouvinte, tem empatia e curiosidade genuína pelo funcionamento da mente humana.',
    'meio-ambiente': 'Meio Ambiente reúne quem se preocupa com sustentabilidade e com o futuro dos recursos naturais do planeta. Inclui cursos como Engenharia Ambiental e Gestão Ambiental. Combina com quem tem consciência ecológica, gosta de ciências naturais e quer atuar em soluções para problemas ambientais reais.',
    'ciencias-exatas': 'Ciências Exatas reúne quem gosta de números, lógica e resolução de problemas complexos e abstratos. Inclui cursos como Matemática, Física e Estatística. Combina com quem tem raciocínio analítico apurado, gosta de desafios que exigem concentração e se interessa por entender os padrões por trás dos fenômenos.',
    'ciencias-biologicas': 'Ciências Biológicas reúne quem se interessa pela vida, pelos seres vivos e pela investigação científica. Inclui cursos como Biologia, Biomedicina e Farmácia. Combina com quem gosta de observar, experimentar e entender processos naturais, com atenção a detalhes e curiosidade científica.',
    'relacoes-internacionais': 'Relações Internacionais reúne quem se interessa por política global, diplomacia e diversidade cultural. O curso de Relações Internacionais é o principal caminho, com atuação em organismos internacionais, diplomacia e comércio exterior. Combina com quem gosta de acompanhar notícias do mundo, é curioso sobre outras culturas e tem facilidade com idiomas.',
    'servicos-hospitalidade': 'Serviços e Hospitalidade reúne quem gosta de atender pessoas e proporcionar boas experiências. Inclui cursos como Hotelaria, Turismo e Gastronomia. Combina com quem é comunicativo, tem atenção aos detalhes e se realiza fazendo o outro se sentir bem cuidado.',
    'esportes-bem-estar': 'Esportes e Bem-estar reúne quem valoriza o movimento do corpo, a saúde e a qualidade de vida através da atividade física. Inclui cursos como Educação Física e Esporte. Combina com quem gosta de esportes, tem disposição física e quer ajudar outras pessoas a criar hábitos mais saudáveis e ativos.'
  };

  function abrirModal(card) {
    const tituloEl = card.querySelector('h4');
    const iconeEl = card.querySelector('.card-icon');
    const slug = card.getAttribute('data-area');
    const nomeArea = tituloEl ? tituloEl.textContent : 'esta área';
    const textoDetalhado = DESCRICOES_DETALHADAS[slug] || 'Descrição detalhada em breve.';

    modalTitulo.textContent = nomeArea;
    modalTexto.textContent = textoDetalhado;

    // Copia o mesmo ícone e a mesma cor de fundo do card pro selo do modal,
    // em vez de duplicar todos os SVGs e cores aqui no JS
    if (iconeEl) {
      modalIcon.innerHTML = iconeEl.innerHTML;
    }
    modalIcon.style.backgroundColor = window.getComputedStyle(card).backgroundColor;

    overlay.hidden = false;
    botaoFechar.focus();   // já deixa o foco no botão de fechar, pra quem usa teclado
  }

  function fecharModal() {
    overlay.hidden = true;
  }

  cards.forEach(function (card) {
    const tituloEl = card.querySelector('h4');
    const nomeArea = tituloEl ? tituloEl.textContent : 'esta área';

    // Deixa o card focável e identificável como um "botão" pra quem usa teclado
    // ou leitor de tela (os cards são <article>, que por padrão não recebem foco)
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', 'Ver mais sobre ' + nomeArea);

    card.addEventListener('click', function () {
      abrirModal(card);
    });

    // Acessibilidade: quem navega só com teclado espera que Enter ou Espaço
    // ativem um elemento com role="button", do mesmo jeito que um clique
    card.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();   // evita que Espaço role a página, por exemplo
        abrirModal(card);
      }
    });
  });

  // Fechar o modal: no X, clicando fora dele (no overlay escuro) ou com Esc
  botaoFechar.addEventListener('click', fecharModal);

  overlay.addEventListener('click', function (event) {
    if (event.target === overlay) {
      fecharModal();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !overlay.hidden) {
      fecharModal();
    }
  });

});


// ==========================================
// BOTÃO "COMEÇAR TESTE" (barra inferior)
// ==========================================
document.addEventListener('DOMContentLoaded', function () {

  const startTestBtn = document.getElementById('startTestBtn');

  if (!startTestBtn) {
    return;
  }

  startTestBtn.addEventListener('click', function () {
    window.location.href = 'teste-intro.html';
  });

});