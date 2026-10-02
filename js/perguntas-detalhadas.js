// Atividades para explorar as subáreas com maior identificação do usuário.
// Cada subárea tem três itens; a aplicação distribui as perguntas em ordem aleatória.
const BANCO_PERGUNTAS_DETALHADAS = {
  enfermagem_cuidado: [
    "Acompanhar uma pessoa durante um tratamento e observar mudanças em seu bem-estar.",
    "Orientar pacientes e familiares sobre cuidados no dia a dia.",
    "Participar de uma equipe que presta assistência direta em situações de saúde."
  ],
  nutricao_prevencao: [
    "Investigar como alimentação e hábitos influenciam a saúde ao longo do tempo.",
    "Ajudar alguém a planejar mudanças alimentares adequadas à sua rotina.",
    "Criar ações de prevenção para promover saúde em grupos ou comunidades."
  ],
  pesquisa_saude: [
    "Investigar dados para compreender causas, prevenção ou evolução de doenças.",
    "Participar de estudos que avaliam tratamentos ou serviços de saúde.",
    "Analisar evidências científicas para responder perguntas sobre saúde."
  ],
  gestao_saude: [
    "Organizar escalas, equipes e recursos de um serviço de saúde.",
    "Analisar indicadores para melhorar o acesso e a qualidade do atendimento.",
    "Planejar processos para reduzir esperas e falhas em uma unidade de saúde."
  ],
  desenvolvimento: [
    "Planejar e programar uma funcionalidade para um aplicativo ou sistema.",
    "Investigar um erro no código e testar correções até resolvê-lo.",
    "Transformar necessidades de pessoas usuárias em recursos de software."
  ],
  dados: [
    "Organizar conjuntos de dados e procurar padrões que ajudem numa decisão.",
    "Criar relatórios ou visualizações para explicar o que os dados revelam.",
    "Verificar a qualidade de dados antes de usá-los numa análise."
  ],
  ia: [
    "Preparar dados para treinar um modelo que reconheça padrões.",
    "Testar como um sistema inteligente responde a diferentes exemplos.",
    "Investigar aplicações e limites de modelos de inteligência artificial."
  ],
  cyber_security: [
    "Investigar sinais de acesso indevido a sistemas e compreender o que ocorreu.",
    "Testar a segurança de uma aplicação para encontrar vulnerabilidades.",
    "Planejar medidas para proteger informações e reduzir riscos digitais."
  ],
  ux_ui: [
    "Entrevistar pessoas para descobrir dificuldades ao usar um produto digital.",
    "Desenhar e testar telas para tornar uma tarefa mais simples.",
    "Analisar comentários de usuários e propor melhorias na experiência."
  ],
  redes: [
    "Planejar como computadores e serviços se conectam numa rede.",
    "Investigar falhas de conexão e restaurar o funcionamento dos sistemas.",
    "Monitorar o desempenho e a disponibilidade de uma infraestrutura de rede."
  ],
  iot: [
    "Conectar sensores e dispositivos físicos para coletar ou trocar informações.",
    "Montar e testar um protótipo de dispositivo conectado à internet.",
    "Investigar como sensores, circuitos e programas podem trabalhar juntos."
  ],
  administracao: [
    "Mapear etapas de um processo e propor uma forma mais eficiente de realizá-lo.",
    "Coordenar prazos, recursos e pessoas para cumprir um plano de trabalho.",
    "Acompanhar indicadores operacionais e organizar ações de melhoria."
  ],
  empreendedorismo: [
    "Identificar uma necessidade e desenhar uma solução que possa virar negócio.",
    "Conversar com potenciais clientes para testar uma ideia de produto ou serviço.",
    "Planejar como lançar, divulgar e desenvolver uma nova iniciativa."
  ],
  financas: [
    "Analisar receitas, custos e projeções para apoiar decisões financeiras.",
    "Montar orçamentos e comparar cenários de investimento ou gasto.",
    "Organizar informações contábeis para avaliar a situação de uma organização."
  ],
  rh: [
    "Apoiar processos de recrutamento e integração de novas pessoas na equipe.",
    "Planejar ações de desenvolvimento e aprendizagem para profissionais.",
    "Ajudar a mediar conversas e melhorar relações no ambiente de trabalho."
  ],
  direito_publico: [
    "Pesquisar leis e políticas públicas que afetam direitos da população.",
    "Analisar como decisões do governo impactam diferentes comunidades.",
    "Contribuir para iniciativas de acesso à justiça e garantia de direitos."
  ],
  advocacia_litigio: [
    "Preparar argumentos e documentos para defender uma pessoa ou organização.",
    "Analisar versões e evidências antes de construir uma estratégia para um caso.",
    "Apresentar uma argumentação oral diante de uma situação de conflito jurídico."
  ],
  direito_corporativo: [
    "Revisar contratos e identificar pontos que precisam de atenção jurídica.",
    "Orientar uma empresa sobre regras e responsabilidades legais.",
    "Analisar riscos jurídicos antes de uma organização tomar uma decisão."
  ],
  ciencias_criminais: [
    "Examinar documentos e evidências para reconstruir os fatos de um caso.",
    "Pesquisar normas e estudos sobre investigação e sistema de justiça criminal.",
    "Analisar diferentes explicações para um acontecimento antes de tirar conclusões."
  ],
  civil: [
    "Projetar espaços, edifícios ou infraestrutura considerando segurança e uso.",
    "Calcular materiais e dimensões para uma obra ou estrutura.",
    "Acompanhar etapas de uma construção e resolver desafios do projeto."
  ],
  mecanica: [
    "Projetar ou analisar máquinas, motores e mecanismos em funcionamento.",
    "Investigar por que uma peça ou equipamento falhou e como melhorá-lo.",
    "Desenhar componentes e testar seu desempenho em condições diferentes."
  ],
  producao_processos: [
    "Organizar etapas de produção para reduzir atrasos e desperdícios.",
    "Analisar a qualidade de um produto e propor ajustes no processo.",
    "Planejar o uso de pessoas, equipamentos e materiais numa operação."
  ],
  eletrica_eletronica: [
    "Projetar circuitos ou sistemas que usam energia elétrica e eletrônica.",
    "Montar e testar componentes para descobrir por que um circuito não funciona.",
    "Analisar como controlar energia e sinais em equipamentos ou instalações."
  ],
  design_grafico: [
    "Criar peças visuais que comuniquem uma ideia com clareza.",
    "Escolher cores, tipografia e composição para uma identidade visual.",
    "Adaptar uma linguagem visual a diferentes formatos e públicos."
  ],
  artes_visuais: [
    "Criar desenhos, pinturas ou imagens para expressar uma ideia.",
    "Experimentar técnicas e materiais para desenvolver uma obra autoral.",
    "Pesquisar referências visuais e transformá-las numa produção artística."
  ],
  moda: [
    "Pesquisar referências e tendências para criar uma coleção de roupas.",
    "Escolher materiais, cores e formas para desenvolver peças de vestuário.",
    "Desenhar roupas ou acessórios considerando expressão e possibilidade de uso."
  ],
  design_produto: [
    "Desenhar um objeto considerando como as pessoas vão utilizá-lo.",
    "Criar protótipos e testar formas diferentes de resolver uma necessidade.",
    "Escolher materiais e processos para transformar uma ideia num produto."
  ],
  publicidade: [
    "Criar uma campanha que apresente uma ideia ou produto de forma atraente.",
    "Pesquisar o público para decidir a mensagem e o tom de uma campanha.",
    "Desenvolver conceitos e peças para divulgar uma marca ou serviço."
  ],
  jornalismo: [
    "Investigar um assunto, consultar fontes e verificar informações.",
    "Entrevistar pessoas para contar uma história de interesse público.",
    "Escrever ou produzir conteúdo informativo para diferentes canais."
  ],
  marketing_digital: [
    "Planejar conteúdo digital para alcançar um público específico.",
    "Analisar resultados de campanhas e ajustar mensagens ou canais.",
    "Pesquisar tendências e comportamento do público em plataformas digitais."
  ],
  relacoes_publicas: [
    "Planejar como uma organização se comunica com diferentes públicos.",
    "Organizar eventos e ações para construir relações com uma comunidade.",
    "Preparar comunicados e respostas para preservar a confiança numa organização."
  ],
  docencia: [
    "Planejar uma aula para explicar um tema de maneira acessível.",
    "Criar atividades e exemplos para apoiar a aprendizagem de uma turma.",
    "Acompanhar dúvidas e adaptar a explicação ao ritmo dos estudantes."
  ],
  educacao_infantil: [
    "Planejar brincadeiras que apoiem o desenvolvimento e a aprendizagem infantil.",
    "Observar como crianças se comunicam, exploram e aprendem no cotidiano.",
    "Criar uma rotina segura e acolhedora para crianças pequenas."
  ],
  gestao_educacional: [
    "Organizar projetos, equipes e recursos de uma instituição de ensino.",
    "Analisar informações sobre aprendizagem para planejar melhorias na escola.",
    "Coordenar ações entre professores, estudantes e famílias."
  ],
  educacao_especial: [
    "Adaptar materiais e atividades para diferentes necessidades de aprendizagem.",
    "Planejar recursos de acessibilidade para ampliar a participação dos estudantes.",
    "Trabalhar em parceria com estudantes, famílias e educadores de apoio."
  ],
  clinica: [
    "Acolher uma pessoa e ajudá-la a compreender questões emocionais.",
    "Conduzir conversas para apoiar alguém diante de dificuldades pessoais.",
    "Estudar métodos de avaliação e intervenção em saúde mental."
  ],
  organizacional: [
    "Investigar como relações e práticas de trabalho influenciam as equipes.",
    "Desenvolver ações para melhorar bem-estar e colaboração numa organização.",
    "Apoiar seleção, desenvolvimento ou avaliação de profissionais no trabalho."
  ],
  pesquisa_comportamento: [
    "Planejar um estudo para investigar como as pessoas pensam ou agem.",
    "Coletar e analisar dados de entrevistas, observações ou experimentos.",
    "Comparar resultados de pesquisas para compreender padrões de comportamento."
  ],
  coaching_orientacao: [
    "Ajudar alguém a esclarecer objetivos e planejar próximos passos.",
    "Conduzir conversas de orientação sobre escolhas de estudo ou carreira.",
    "Acompanhar metas e apoiar uma pessoa na avaliação do próprio progresso."
  ],
  gestao_ambiental: [
    "Planejar ações para uma organização reduzir seu impacto ambiental.",
    "Acompanhar indicadores de consumo, resíduos e cumprimento de normas ambientais.",
    "Coordenar projetos de sustentabilidade com diferentes equipes."
  ],
  ecologia: [
    "Observar relações entre espécies e condições de um ecossistema.",
    "Realizar levantamentos de campo para acompanhar ambientes naturais.",
    "Analisar como mudanças ambientais afetam populações e habitats."
  ],
  engenharia_ambiental: [
    "Projetar soluções para tratar água, resíduos ou poluentes.",
    "Analisar dados técnicos para reduzir impactos de obras e atividades humanas.",
    "Desenvolver sistemas que usem recursos naturais de forma mais eficiente."
  ],
  educacao_ambiental: [
    "Criar atividades para explicar questões ambientais a diferentes públicos.",
    "Organizar ações comunitárias de conservação e cuidado com o ambiente.",
    "Produzir materiais educativos sobre sustentabilidade e natureza."
  ],
  matematica_estatistica: [
    "Construir modelos matemáticos ou estatísticos para responder uma pergunta.",
    "Analisar dados para estimar tendências e explicar incertezas.",
    "Resolver problemas quantitativos e verificar se os resultados fazem sentido."
  ],
  fisica: [
    "Investigar fenômenos como movimento, energia, luz ou eletricidade.",
    "Planejar experimentos para testar explicações sobre o mundo físico.",
    "Usar modelos e cálculos para prever o comportamento de um sistema."
  ],
  computacao_cientifica: [
    "Escrever programas para simular fenômenos ou resolver problemas científicos.",
    "Processar grandes conjuntos de dados com ferramentas computacionais.",
    "Desenvolver algoritmos para realizar cálculos científicos com eficiência."
  ],
  economia_quantitativa: [
    "Analisar dados econômicos para entender mudanças em preços ou emprego.",
    "Construir modelos para comparar cenários de políticas ou investimentos.",
    "Estudar relações entre indicadores econômicos usando métodos estatísticos."
  ],
  biologia_zoologia: [
    "Observar características e comportamentos de animais em diferentes ambientes.",
    "Registrar informações sobre espécies para responder perguntas biológicas.",
    "Investigar relações entre organismos e as condições em que vivem."
  ],
  biotecnologia: [
    "Realizar experimentos com células ou microrganismos em laboratório.",
    "Testar aplicações de processos biológicos em saúde, alimentos ou indústria.",
    "Analisar amostras e registrar resultados de procedimentos laboratoriais."
  ],
  ecologia_biologicas: [
    "Estudar como organismos interagem entre si e com o ambiente.",
    "Coletar dados de campo para acompanhar mudanças num ecossistema.",
    "Investigar efeitos de alterações ambientais sobre a biodiversidade."
  ],
  biomedicina: [
    "Analisar amostras biológicas para investigar condições de saúde.",
    "Estudar mecanismos de doenças por meio de exames e pesquisa laboratorial.",
    "Interpretar resultados de análises para apoiar investigações em saúde."
  ],
  diplomacia: [
    "Preparar análises sobre relações políticas entre países.",
    "Participar de conversas para construir acordos entre governos ou instituições.",
    "Acompanhar acontecimentos internacionais e seus possíveis impactos."
  ],
  comercio_exterior: [
    "Organizar etapas de compra e venda de produtos entre diferentes países.",
    "Pesquisar regras, custos e documentos de uma operação internacional.",
    "Negociar prazos e condições com fornecedores ou clientes de outros mercados."
  ],
  cooperacao_ongs: [
    "Planejar projetos que conectem organizações de países ou comunidades diferentes.",
    "Acompanhar resultados de iniciativas de desenvolvimento e impacto social.",
    "Articular parcerias para apoiar ações humanitárias ou de cooperação."
  ],
  estudos_culturais: [
    "Aprender idiomas e investigar como a língua expressa uma cultura.",
    "Pesquisar hábitos, histórias e produções culturais de diferentes sociedades.",
    "Traduzir ou mediar conteúdos para aproximar públicos de culturas diferentes."
  ],
  turismo_eventos: [
    "Planejar roteiros ou eventos considerando logística e experiência dos participantes.",
    "Coordenar fornecedores, horários e espaços durante um evento.",
    "Criar experiências para visitantes conhecerem lugares e culturas."
  ],
  hotelaria: [
    "Organizar serviços e rotinas para receber hóspedes com qualidade.",
    "Resolver pedidos e imprevistos durante a estadia de uma pessoa.",
    "Coordenar equipes para manter o funcionamento de um hotel ou hospedagem."
  ],
  gastronomia: [
    "Criar pratos combinando ingredientes, técnicas e apresentação.",
    "Planejar um cardápio considerando sabor, custos e necessidades do público.",
    "Testar receitas e organizar etapas de preparo numa cozinha."
  ],
  atendimento_cliente: [
    "Ouvir uma solicitação e orientar a pessoa até encontrar uma solução.",
    "Acompanhar dúvidas ou reclamações até que sejam resolvidas.",
    "Explicar produtos ou serviços de forma clara para diferentes clientes."
  ],
  educacao_fisica: [
    "Planejar sessões de exercício de acordo com objetivos e condições físicas.",
    "Acompanhar a evolução de pessoas que praticam atividades físicas.",
    "Ensinar movimentos e regras de práticas esportivas individuais ou coletivas."
  ],
  fisioterapia: [
    "Planejar exercícios para apoiar a recuperação de movimentos e funções.",
    "Acompanhar a evolução de uma pessoa durante um processo de reabilitação.",
    "Investigar limitações de movimento para escolher estratégias de cuidado."
  ],
  nutricao_esportiva: [
    "Planejar estratégias alimentares para apoiar treino e recuperação física.",
    "Analisar hábitos e necessidades nutricionais de pessoas que praticam esportes.",
    "Acompanhar como alimentação e hidratação se relacionam com a atividade física."
  ],
  gestao_esportiva: [
    "Organizar equipes, espaços e recursos para realizar atividades esportivas.",
    "Planejar eventos, projetos ou serviços ligados ao esporte.",
    "Acompanhar metas e resultados de uma organização ou iniciativa esportiva."
  ]
};
