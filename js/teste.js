// ===================================================================
// TESTE DE INTERESSES PROFISSIONAIS - NORTEIA
// ===================================================================

const perguntasPorArea = {};
BANCO_PERGUNTAS.perguntas_escala.forEach((q) => {
  if (!perguntasPorArea[q.area]) perguntasPorArea[q.area] = [];
  perguntasPorArea[q.area].push(q);
});

function embaralhar(lista) {
  const copia = [...lista];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

// Embaralha a lista, mas NUNCA deixa duas perguntas da mesma área
// seguidas uma da outra. A cada passo, sorteia entre as perguntas
// que restam e que NÃO são da mesma área da última escolhida.
function embaralharSemRepetirArea(lista) {
  const restante = embaralhar(lista);
  const resultado = [];

  while (restante.length > 0) {
    const ultimaArea = resultado.length > 0 ? resultado[resultado.length - 1].area : null;

    // índices das perguntas que podem entrar agora (área diferente da última)
    const candidatos = restante
      .map((pergunta, indice) => indice)
      .filter((indice) => restante[indice].area !== ultimaArea);

    // se só restarem perguntas da mesma área da última (acontece só no finalzinho),
    // não tem jeito: usa qualquer uma mesmo
    const opcoes = candidatos.length > 0 ? candidatos : restante.map((_, indice) => indice);

    const indiceEscolhido = opcoes[Math.floor(Math.random() * opcoes.length)];
    resultado.push(restante[indiceEscolhido]);
    restante.splice(indiceEscolhido, 1);
  }

  return resultado;
}

const perguntasTeste = embaralharSemRepetirArea(BANCO_PERGUNTAS.perguntas_escala);
let listaAtual = perguntasTeste;
const respostas = {}; // respostas JÁ CONFIRMADAS: { Q01: 4, Q05: 2, ... }
let selecaoAtual = null; // resposta escolhida na tela, mas ainda NÃO confirmada
let indiceAtual = 0;
const chaveRespostasSalvas = "norteia-respostas-gerais";

// Elementos da página
const elPergunta = document.getElementById("texto-pergunta");
const elOpcoes = document.getElementById("area-opcoes");
const elProgresso = document.getElementById("progresso");
const elBarraProgresso = document.getElementById("barra-progresso");
const elBarraPreenchida = document.getElementById("barra-preenchida");
const elContainerTeste = document.getElementById("container-teste");
const elContainerResultado = document.getElementById("container-resultado");
const elBtnVoltar = document.getElementById("btn-voltar");
const elBtnConfirmar = document.getElementById("btn-confirmar");

// ------------------------------------------------------------------
// RENDERIZA A PERGUNTA ATUAL
// ------------------------------------------------------------------
function renderizarPergunta() {
  const pergunta = listaAtual[indiceAtual];

  // se essa pergunta já tinha sido respondida antes (usuário voltou),
  // carrega a resposta anterior como seleção atual
  selecaoAtual = respostas[pergunta.id] ?? null;

  elPergunta.textContent = pergunta.texto;
  elOpcoes.innerHTML = "";

  elProgresso.textContent = `Pergunta ${indiceAtual + 1} de ${listaAtual.length} · 15 áreas avaliadas`;
  elBarraPreenchida.style.width = `${((indiceAtual + 1) / listaAtual.length) * 100}%`;
  elBarraProgresso.setAttribute("aria-valuenow", indiceAtual + 1);

  elBtnVoltar.style.visibility = indiceAtual === 0 ? "hidden" : "visible";

  // texto do botão muda na última pergunta de cada parte
  const ultimaPerguntaDaLista = indiceAtual === listaAtual.length - 1;
  if (ultimaPerguntaDaLista) {
    elBtnConfirmar.textContent = "Ver resultado →";
  } else {
    elBtnConfirmar.textContent = "Confirmar e avançar →";
  }

  // o botão de confirmar só é liberado se já existir uma seleção
  elBtnConfirmar.disabled = selecaoAtual === null;

  for (let nota = 1; nota <= 5; nota++) {
    const linha = document.createElement("button");
    linha.type = "button";
    linha.className = "opcao-linha";
    if (selecaoAtual === nota) linha.classList.add("selecionada");
    linha.setAttribute("aria-pressed", String(selecaoAtual === nota));

    linha.innerHTML = `
      <span class="opcao-numero">${nota}</span>
      <span class="opcao-legenda">${BANCO_PERGUNTAS.escala_resposta[nota]}</span>
    `;

    // clicar numa opção só MARCA a escolha, não avança sozinho
    linha.addEventListener("click", () => {
      selecaoAtual = nota;
      elBtnConfirmar.disabled = false;
      // atualiza o destaque visual sem redesenhar tudo de novo
      document.querySelectorAll(".opcao-linha").forEach((el) => {
        el.classList.remove("selecionada");
        el.setAttribute("aria-pressed", "false");
      });
      linha.classList.add("selecionada");
      linha.setAttribute("aria-pressed", "true");
    });

    elOpcoes.appendChild(linha);
  }
}

// ------------------------------------------------------------------
// BOTÃO "CONFIRMAR E AVANÇAR"
// ------------------------------------------------------------------
elBtnConfirmar.addEventListener("click", () => {
  if (selecaoAtual === null) return; // segurança extra, não deveria acontecer (botão fica desabilitado)

  const pergunta = listaAtual[indiceAtual];
  respostas[pergunta.id] = selecaoAtual;
  salvarRespostasDaSessao();

  if (indiceAtual < listaAtual.length - 1) {
    indiceAtual++;
    renderizarPergunta();
  } else {
    calcularEExibirResultado();
  }
});

function voltar() {
  if (indiceAtual > 0) {
    indiceAtual--;
    renderizarPergunta();
  }
}
elBtnVoltar.addEventListener("click", voltar);

// ------------------------------------------------------------------
// CÁLCULO DO ÍNDICE DE AFINIDADE (escala 1-5 convertida para 0-100)
// ------------------------------------------------------------------
function calcularPontuacaoDasAreas(perguntasConsideradas) {
  const pontos = {};
  const maximo = {};
  const minimo = {};
  BANCO_PERGUNTAS.areas.forEach((a) => {
    pontos[a.id] = 0;
    maximo[a.id] = 0;
    minimo[a.id] = 0;
  });

  perguntasConsideradas.forEach((q) => {
    const nota = respostas[q.id] || 0;
    pontos[q.area] += nota * q.peso;
    maximo[q.area] += 5 * q.peso;
    minimo[q.area] += q.peso;
  });

  const resultado = BANCO_PERGUNTAS.areas.map((a) => ({
    id: a.id,
    nome: a.nome,
    indiceAfinidade: maximo[a.id] > minimo[a.id]
      ? Math.round(((pontos[a.id] - minimo[a.id]) / (maximo[a.id] - minimo[a.id])) * 100)
      : 0,
  }));

  resultado.sort((a, b) => b.indiceAfinidade - a.indiceAfinidade);
  return resultado;
}

function calcularSubareas(areaId) {
  const grupo = BANCO_PERGUNTAS.subareas.find((g) => g.area_pai === areaId);
  if (!grupo) return [];

  const perguntasDaArea = perguntasPorArea[areaId]; // as 6 perguntas dessa área

  return grupo.subareas
    .map((sub) => {
      const relacionadas = perguntasDaArea.filter((q) =>
        q.tags.some((tag) => sub.caracteristicas.includes(tag))
      );
      const soma = relacionadas.reduce((acc, q) => acc + (respostas[q.id] || 0), 0);
      const max = relacionadas.length * 5;
      const min = relacionadas.length;

      return {
        nome: sub.nome,
        indiceAfinidade: max > min
          ? Math.round(((soma - min) / (max - min)) * 100)
          : 0,
      };
    })
    .sort((a, b) => b.indiceAfinidade - a.indiceAfinidade);
}

function calcularEExibirResultado() {
  salvarRespostasDaSessao();
  const areasOrdenadas = calcularPontuacaoDasAreas(perguntasTeste);
  const top3Areas = areasOrdenadas.slice(0, 3);
  const areaPrincipal = areasOrdenadas[0];
  const subareasDaPrincipal = calcularSubareas(areaPrincipal.id).slice(0, 4);
  const estadoRespostas = BANCO_PERGUNTAS.perguntas_escala
    .map((pergunta) => respostas[pergunta.id])
    .join(",");

  elContainerTeste.hidden = true;
  elContainerResultado.hidden = false;

  elContainerResultado.innerHTML = `
    <h2>Seu perfil profissional</h2>
    <p class="area-principal">${areaPrincipal.nome} — ${areaPrincipal.indiceAfinidade}% de afinidade indicada</p>

    <h3>Áreas com maior afinidade</h3>
    <ul class="lista-resultado">
      ${top3Areas.map((a) => `<li class="resultado-item"><div><span>${a.nome}</span><strong>${a.indiceAfinidade}%</strong></div><span class="resultado-trilho"><span style="width: ${a.indiceAfinidade}%"></span></span><a class="btn-detalhar" href="teste-area.html?area=${encodeURIComponent(a.id)}#r=${estadoRespostas}">Fazer teste detalhado <span aria-hidden="true">→</span></a></li>`).join("")}
    </ul>

    <h3>Dentro de ${areaPrincipal.nome}, seus caminhos com maior afinidade</h3>
    <ul class="lista-resultado">
      ${subareasDaPrincipal.map((s) => `<li class="resultado-item"><div><span>${s.nome}</span><strong>${s.indiceAfinidade}%</strong></div><span class="resultado-trilho"><span style="width: ${s.indiceAfinidade}%"></span></span></li>`).join("")}
    </ul>

    <p class="aviso-metodologico">
      Este resultado é um indicador exploratório de afinidade autorrelatada para autoconhecimento.
      Não é um teste psicométrico validado nem substitui orientação profissional.
    </p>

    <div class="acoes-resultado">
      <a href="index.html" class="link-inicio">Voltar ao início</a>
      <a href="testes.html?refazer=1" class="btn-confirmar">Refazer questionário</a>
    </div>
  `;
}

function salvarRespostasDaSessao() {
  try {
    sessionStorage.setItem(chaveRespostasSalvas, JSON.stringify(respostas));
  } catch {
    // O questionário continua funcionando mesmo se o navegador bloquear armazenamento.
  }
}

function restaurarResultadoDaSessao() {
  const parametros = new URLSearchParams(window.location.search);
  if (parametros.get("refazer") === "1") {
    try {
      sessionStorage.removeItem(chaveRespostasSalvas);
    } catch {
      // O questionário pode ser refeito mesmo sem armazenamento disponível.
    }
    return false;
  }

  const estadoNaUrl = new URLSearchParams(window.location.hash.slice(1)).get("r");
  if (estadoNaUrl) {
    const notas = estadoNaUrl.split(",").map(Number);
    if (notas.length === perguntasTeste.length && notas.every((nota) => nota >= 1 && nota <= 5)) {
      BANCO_PERGUNTAS.perguntas_escala.forEach((pergunta, indice) => {
        respostas[pergunta.id] = notas[indice];
      });
      salvarRespostasDaSessao();
      return true;
    }
  }

  try {
    const respostasSalvas = JSON.parse(sessionStorage.getItem(chaveRespostasSalvas) || "null");
    if (!respostasSalvas || Object.keys(respostasSalvas).length !== perguntasTeste.length) return false;
    Object.assign(respostas, respostasSalvas);
    return true;
  } catch {
    return false;
  }
}

if (restaurarResultadoDaSessao()) {
  calcularEExibirResultado();
} else {
  renderizarPergunta();
}
