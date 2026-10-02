const parametros = new URLSearchParams(window.location.search);
const areaId = parametros.get("area");
const origemCatalogo = parametros.get("origem") === "catalogo";
const area = BANCO_PERGUNTAS.areas.find((item) => item.id === areaId);
const grupoSubareas = BANCO_PERGUNTAS.subareas.find((item) => item.area_pai === areaId);
const containerTeste = document.getElementById("container-teste-area");
const resultadoArea = document.getElementById("resultado-area");
const erroArea = document.getElementById("erro-area");
const tituloArea = document.getElementById("titulo-area");
const textoAtividade = document.getElementById("texto-atividade");
const opcoesArea = document.getElementById("opcoes-area");
const progressoArea = document.getElementById("progresso-area");
const barraProgressoArea = document.getElementById("barra-progresso-area");
const barraPreenchidaArea = document.getElementById("barra-preenchida-area");
const botaoVoltarArea = document.getElementById("btn-voltar-area");
const botaoConfirmarArea = document.getElementById("btn-confirmar-area");
const estadoRespostas = new URLSearchParams(window.location.hash.slice(1)).get("r");
const linkVoltarResultado = document.getElementById("link-voltar-resultado");
const destinoRetorno = origemCatalogo
  ? "testes-areas.html"
  : estadoRespostas
    ? `testes.html#r=${encodeURIComponent(estadoRespostas)}`
    : "testes.html";

linkVoltarResultado.href = destinoRetorno;
linkVoltarResultado.textContent = origemCatalogo ? "Voltar às áreas" : "Voltar ao resultado";

if (!area || !grupoSubareas) {
  containerTeste.hidden = true;
  erroArea.hidden = false;
} else {
  iniciarTesteDaArea();
}

function embaralhar(lista) {
  const copia = [...lista];
  for (let indice = copia.length - 1; indice > 0; indice--) {
    const outroIndice = Math.floor(Math.random() * (indice + 1));
    [copia[indice], copia[outroIndice]] = [copia[outroIndice], copia[indice]];
  }
  return copia;
}

function iniciarTesteDaArea() {
  tituloArea.textContent = area.nome;
  const perguntas = grupoSubareas.subareas.flatMap((subarea) => {
    const atividades = BANCO_PERGUNTAS_DETALHADAS[subarea.id] || [];
    return atividades.map((atividade, indice) => ({
      id: `${subarea.id}-${indice + 1}`,
      subareaId: subarea.id,
      texto: `Tenho interesse em ${atividade.charAt(0).toLowerCase()}${atividade.slice(1)}`,
    }));
  });

  if (perguntas.length !== grupoSubareas.subareas.length * 3) {
    containerTeste.hidden = true;
    erroArea.hidden = false;
    return;
  }

  const listaPerguntas = embaralhar(perguntas);
  const respostas = {};
  let indiceAtual = 0;
  let selecaoAtual = null;

  function renderizarPergunta() {
    const pergunta = listaPerguntas[indiceAtual];
    selecaoAtual = respostas[pergunta.id] ?? null;
    textoAtividade.textContent = pergunta.texto;
    opcoesArea.innerHTML = "";
    progressoArea.textContent = `Atividade ${indiceAtual + 1} de ${listaPerguntas.length} · ${area.nome}`;
    barraPreenchidaArea.style.width = `${((indiceAtual + 1) / listaPerguntas.length) * 100}%`;
    barraProgressoArea.setAttribute("aria-valuemax", listaPerguntas.length);
    barraProgressoArea.setAttribute("aria-valuenow", indiceAtual + 1);
    botaoVoltarArea.style.visibility = indiceAtual === 0 ? "hidden" : "visible";
    botaoConfirmarArea.textContent = indiceAtual === listaPerguntas.length - 1
      ? "Ver resultado →"
      : "Confirmar e avançar →";
    botaoConfirmarArea.disabled = selecaoAtual === null;

    for (let nota = 1; nota <= 5; nota++) {
      const opcao = document.createElement("button");
      opcao.type = "button";
      opcao.className = "opcao-linha";
      opcao.setAttribute("aria-pressed", String(selecaoAtual === nota));
      if (selecaoAtual === nota) opcao.classList.add("selecionada");
      opcao.innerHTML = `
        <span class="opcao-numero">${nota}</span>
        <span class="opcao-legenda">${BANCO_PERGUNTAS.escala_resposta[nota]}</span>
      `;
      opcao.addEventListener("click", () => {
        selecaoAtual = nota;
        botaoConfirmarArea.disabled = false;
        opcoesArea.querySelectorAll(".opcao-linha").forEach((item) => {
          item.classList.remove("selecionada");
          item.setAttribute("aria-pressed", "false");
        });
        opcao.classList.add("selecionada");
        opcao.setAttribute("aria-pressed", "true");
      });
      opcoesArea.appendChild(opcao);
    }
  }

  botaoConfirmarArea.addEventListener("click", () => {
    if (selecaoAtual === null) return;
    respostas[listaPerguntas[indiceAtual].id] = selecaoAtual;
    if (indiceAtual < listaPerguntas.length - 1) {
      indiceAtual++;
      renderizarPergunta();
      return;
    }
    exibirResultado(listaPerguntas, respostas);
  });

  botaoVoltarArea.addEventListener("click", () => {
    if (indiceAtual === 0) return;
    indiceAtual--;
    renderizarPergunta();
  });

  function exibirResultado(perguntasRespondidas, respostasSalvas) {
    const pontuacoes = grupoSubareas.subareas.map((subarea) => {
      const itens = perguntasRespondidas.filter((pergunta) => pergunta.subareaId === subarea.id);
      const soma = itens.reduce((total, pergunta) => total + respostasSalvas[pergunta.id], 0);
      const afinidade = Math.round(((soma - itens.length) / (itens.length * 4)) * 100);
      return { ...subarea, afinidade };
    }).sort((a, b) => b.afinidade - a.afinidade);

    const maiorPontuacao = pontuacoes[0].afinidade;
    const destaques = pontuacoes.filter((subarea) => subarea.afinidade === maiorPontuacao);
    containerTeste.hidden = true;
    resultadoArea.hidden = false;
    resultadoArea.innerHTML = `
      <p class="intro-etiqueta">Seu aprofundamento</p>
      <h1>Atividades de ${area.nome}</h1>
      <p class="area-principal">${destaques.length === 1
        ? `Suas respostas se aproximam mais de ${destaques[0].nome}.`
        : `Suas respostas indicam interesses próximos em ${destaques.map((subarea) => subarea.nome).join(" e ")}.`}</p>
      <h2 class="titulo-ranking">Afinidade com atividades de cada subárea</h2>
      <ul class="lista-resultado">
        ${pontuacoes.map((subarea) => `
          <li class="resultado-item">
            <div><span>${subarea.nome}</span><strong>${subarea.afinidade}%</strong></div>
            <span class="resultado-trilho"><span style="width: ${subarea.afinidade}%"></span></span>
          </li>
        `).join("")}
      </ul>
      <p class="aviso-metodologico">
        Este comparativo resume seu interesse declarado pelas atividades apresentadas nesta área.
        As atividades podem aparecer em várias profissões; use o resultado como ponto de partida para explorar cursos e ocupações.
        Não é um teste psicométrico validado nem uma recomendação profissional definitiva.
      </p>
      <div class="acoes-resultado">
        <a id="link-retorno-area" class="link-inicio" href="${destinoRetorno}">${origemCatalogo ? "Voltar ao catálogo" : "Voltar ao resultado geral"}</a>
        <a class="btn-confirmar link-botao" href="teste-area.html?area=${encodeURIComponent(area.id)}${origemCatalogo ? "&origem=catalogo" : ""}">Refazer este aprofundamento</a>
      </div>
    `;
  }

  renderizarPergunta();
}
