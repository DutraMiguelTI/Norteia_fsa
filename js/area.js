const areaId = new URLSearchParams(window.location.search).get("area");
const area = BANCO_PERGUNTAS.areas.find((item) => item.id === areaId);
const grupoSubareas = BANCO_PERGUNTAS.subareas.find((item) => item.area_pai === areaId);
const informacaoArea = INFORMACOES_AREAS[areaId];
const apresentacao = document.getElementById("apresentacao-area");
const mensagemErro = document.getElementById("area-nao-encontrada");
const coresArea = {
  saude: "#176a49",
  tecnologia: "#1d4ed8",
  negocios: "#6d28d9",
  direito: "#c2410c",
  engenharia: "#0f766e",
  artes: "#b91c1c",
  comunicacao: "#a16207",
  educacao: "#0369a1",
  psicologia: "#be185d",
  meio_ambiente: "#15803d",
  exatas: "#b45309",
  biologicas: "#0d9488",
  relacoes_internacionais: "#1e40af",
  servicos_hospitalidade: "#78350f",
  esportes: "#6d28d9",
};

if (!area || !grupoSubareas || !informacaoArea) {
  mensagemErro.hidden = false;
} else {
  apresentacao.hidden = false;
  document.title = `Norteia - ${area.nome}`;
  apresentacao.dataset.area = areaId;
  apresentacao.style.setProperty("--area-accent", coresArea[areaId]);
  document.getElementById("nome-area").textContent = area.nome;
  document.getElementById("resumo-area").textContent = informacaoArea.resumo;
  document.getElementById("contexto-area").textContent = informacaoArea.contexto;
  document.getElementById("btn-iniciar-area").href = `teste-area.html?area=${encodeURIComponent(area.id)}&origem=catalogo`;

  const listaFrentes = document.getElementById("lista-frentes");
  informacaoArea.frentes.forEach((frente) => {
    const item = document.createElement("li");
    item.textContent = frente;
    listaFrentes.appendChild(item);
  });

  const listaSubareas = document.getElementById("lista-subareas");
  grupoSubareas.subareas.forEach((subarea) => {
    const item = document.createElement("li");
    const titulo = document.createElement("h3");
    const exemplo = document.createElement("p");
    const atividade = BANCO_PERGUNTAS_DETALHADAS[subarea.id]?.[0];

    titulo.textContent = subarea.nome;
    exemplo.textContent = atividade ? `Exemplo de atividade: ${atividade}` : "Explore as atividades desta possibilidade no teste.";
    item.append(titulo, exemplo);
    listaSubareas.appendChild(item);
  });
}
