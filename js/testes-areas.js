const coresCartoes = {
  saude: "#1e9c6e",
  tecnologia: "#3b82f6",
  negocios: "#8b5cf6",
  direito: "#f97316",
  engenharia: "#14b8a6",
  artes: "#ef4444",
  comunicacao: "#eab308",
  educacao: "#0ea5e9",
  psicologia: "#ec4899",
  meio_ambiente: "#22c55e",
  exatas: "#d97706",
  biologicas: "#0d9488",
  relacoes_internacionais: "#2563eb",
  servicos_hospitalidade: "#78350f",
  esportes: "#7c3aed",
};

const listaAreas = document.getElementById("lista-areas-teste");

BANCO_PERGUNTAS.areas.forEach((area, indice) => {
  const grupoSubareas = BANCO_PERGUNTAS.subareas.find((grupo) => grupo.area_pai === area.id);
  const informacao = INFORMACOES_AREAS[area.id];
  const item = document.createElement("li");
  const artigo = document.createElement("article");
  const conteudo = document.createElement("div");
  const cabecalho = document.createElement("div");
  const numero = document.createElement("span");
  const titulo = document.createElement("h2");
  const resumo = document.createElement("p");
  const quantidade = document.createElement("p");
  const acoes = document.createElement("div");
  const linkApresentacao = document.createElement("a");
  const linkTeste = document.createElement("a");

  artigo.className = "catalogo-area";
  artigo.style.setProperty("--area-color", coresCartoes[area.id]);
  conteudo.className = "catalogo-area-conteudo";
  cabecalho.className = "catalogo-area-cabecalho";
  numero.className = "catalogo-area-numero";
  numero.textContent = String(indice + 1).padStart(2, "0");
  titulo.textContent = area.nome;
  resumo.textContent = informacao.resumo;
  quantidade.className = "catalogo-area-quantidade";
  quantidade.textContent = `${grupoSubareas.subareas.length} subáreas para explorar`;
  acoes.className = "catalogo-area-acoes";
  linkApresentacao.className = "catalogo-link-secundario";
  linkApresentacao.href = `area.html?area=${encodeURIComponent(area.id)}`;
  linkApresentacao.textContent = "Conhecer área";
  linkTeste.className = "catalogo-link-primario";
  linkTeste.href = `teste-area.html?area=${encodeURIComponent(area.id)}&origem=catalogo`;
  linkTeste.textContent = "Iniciar teste";

  cabecalho.append(numero, titulo);
  conteudo.append(cabecalho, resumo, quantidade);
  acoes.append(linkApresentacao, linkTeste);
  artigo.append(conteudo, acoes);
  item.appendChild(artigo);
  listaAreas.appendChild(item);
});
