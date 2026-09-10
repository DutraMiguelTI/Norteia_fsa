// ===================================================================
// TESTE VOCACIONAL - NORTEIA (v3)
// Novidades desta versão:
// - A legenda de cada nota (1 a 5) fica sempre visível, não só no hover
// - A ordem das perguntas da etapa 1 é embaralhada entre as áreas,
//   pra não parecer um bloco de perguntas do mesmo tema
// ===================================================================

const perguntasPorArea = {};
BANCO_PERGUNTAS.perguntas_escala.forEach((q) => {
  if (!perguntasPorArea[q.area]) perguntasPorArea[q.area] = [];
  perguntasPorArea[q.area].push(q);
});

// Embaralha um array (algoritmo Fisher-Yates) sem alterar o original
function embaralhar(lista) {
  const copia = [...lista];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

// ETAPA 1 = 2 primeiras perguntas de cada área, depois embaralhadas
// pra intercalar os temas em vez de vir tudo em blocos por área.
const perguntasEtapa1Ordenadas = [];
const restanteDaEtapaPorArea = {};

Object.keys(perguntasPorArea).forEach((areaId) => {
  const perguntas = perguntasPorArea[areaId];
  perguntasEtapa1Ordenadas.push(...perguntas.slice(0, 2));
  restanteDaEtapaPorArea[areaId] = perguntas.slice(2);
});

const perguntasEtapa1 = embaralhar(perguntasEtapa1Ordenadas);

let listaAtual = perguntasEtapa1;
let etapa = 1;
const respostas = {};
let indiceAtual = 0;

const elPergunta = document.getElementById("texto-pergunta");
const elOpcoes = document.getElementById("area-opcoes");
const elProgresso = document.getElementById("progresso");
const elContainerTeste = document.getElementById("container-teste");
const elContainerResultado = document.getElementById("container-resultado");
const elBtnVoltar = document.getElementById("btn-voltar");

// ------------------------------------------------------------------
function renderizarPergunta() {
  const pergunta = listaAtual[indiceAtual];
  elPergunta.textContent = pergunta.texto;
  elOpcoes.innerHTML = "";

  const rotuloEtapa = etapa === 1 ? "Parte 1 de 2" : "Parte 2 de 2 (aprofundando)";
  elProgresso.textContent = `${rotuloEtapa} — pergunta ${indiceAtual + 1} de ${listaAtual.length}`;
  elBtnVoltar.style.visibility = indiceAtual === 0 ? "hidden" : "visible";

  // cada opção agora é uma LINHA inteira clicável: número + legenda
  for (let nota = 1; nota <= 5; nota++) {
    const linha = document.createElement("button");
    linha.className = "opcao-linha";
    if (respostas[pergunta.id] === nota) linha.classList.add("selecionada");

    linha.innerHTML = `
      <span class="opcao-numero">${nota}</span>
      <span class="opcao-legenda">${BANCO_PERGUNTAS.escala_resposta[nota]}</span>
    `;

    linha.addEventListener("click", () => {
      respostas[pergunta.id] = nota;
      avancar();
    });
    elOpcoes.appendChild(linha);
  }
}

function avancar() {
  if (indiceAtual < listaAtual.length - 1) {
    indiceAtual++;
    renderizarPergunta();
    return;
  }
  if (etapa === 1) {
    iniciarEtapa2();
  } else {
    calcularEExibirResultado();
  }
}

function voltar() {
  if (indiceAtual > 0) {
    indiceAtual--;
    renderizarPergunta();
  }
}
elBtnVoltar.addEventListener("click", voltar);

// ------------------------------------------------------------------
function iniciarEtapa2() {
  const areasOrdenadas = calcularPontuacaoDasAreas(perguntasEtapa1);
  const areaVencedora = areasOrdenadas[0].id;

  listaAtual = restanteDaEtapaPorArea[areaVencedora];
  etapa = 2;
  indiceAtual = 0;
  renderizarPergunta();
}

function calcularPontuacaoDasAreas(perguntasConsideradas) {
  const pontos = {};
  const maximo = {};
  BANCO_PERGUNTAS.areas.forEach((a) => {
    pontos[a.id] = 0;
    maximo[a.id] = 0;
  });

  perguntasConsideradas.forEach((q) => {
    const nota = respostas[q.id] || 0;
    pontos[q.area] += nota * q.peso;
    maximo[q.area] += 5 * q.peso;
  });

  const resultado = BANCO_PERGUNTAS.areas.map((a) => ({
    id: a.id,
    nome: a.nome,
    afinidade: maximo[a.id] > 0 ? Math.round((pontos[a.id] / maximo[a.id]) * 100) : 0,
  }));

  resultado.sort((a, b) => b.afinidade - a.afinidade);
  return resultado;
}

function calcularSubareas(areaId) {
  const grupo = BANCO_PERGUNTAS.subareas.find((g) => g.area_pai === areaId);
  if (!grupo) return [];

  const perguntasDaArea = perguntasPorArea[areaId];

  return grupo.subareas
    .map((sub) => {
      const relacionadas = perguntasDaArea.filter((q) =>
        q.tags.some((tag) => sub.caracteristicas.includes(tag))
      );
      const soma = relacionadas.reduce((acc, q) => acc + (respostas[q.id] || 0), 0);
      const max = relacionadas.length * 5;

      return {
        nome: sub.nome,
        afinidade: max > 0 ? Math.round((soma / max) * 100) : 0,
      };
    })
    .sort((a, b) => b.afinidade - a.afinidade);
}

function calcularEExibirResultado() {
  const areasOrdenadas = calcularPontuacaoDasAreas(perguntasEtapa1);
  const top3Areas = areasOrdenadas.slice(0, 3);
  const areaPrincipal = areasOrdenadas[0];
  const subareasDaPrincipal = calcularSubareas(areaPrincipal.id).slice(0, 4);

  elContainerTeste.style.display = "none";
  elContainerResultado.style.display = "block";

  elContainerResultado.innerHTML = `
    <h2>Seu perfil profissional</h2>
    <p class="area-principal">${areaPrincipal.nome} — ${areaPrincipal.afinidade}% de afinidade</p>

    <h3>Suas 3 áreas com maior afinidade</h3>
    <ul class="lista-resultado">
      ${top3Areas.map((a) => `<li>${a.nome} — <strong>${a.afinidade}%</strong></li>`).join("")}
    </ul>

    <h3>Dentro de ${areaPrincipal.nome}, seus caminhos com maior afinidade</h3>
    <ul class="lista-resultado">
      ${subareasDaPrincipal.map((s) => `<li>${s.nome} — <strong>${s.afinidade}%</strong></li>`).join("")}
    </ul>

    <p class="aviso-metodologico">
      Este resultado é uma ferramenta de triagem e autoconhecimento,
      não um diagnóstico definitivo da sua profissão ideal.
    </p>
  `;
}   
renderizarPergunta();
