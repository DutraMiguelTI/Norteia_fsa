// Banco de perguntas, subáreas e áreas do teste vocacional Norteia
// Textos revisados para variar frases e reduzir repetição
const BANCO_PERGUNTAS = {
  "areas": [
    {
      "id": "saude",
      "nome": "Saúde e Bem-estar"
    },
    {
      "id": "tecnologia",
      "nome": "Tecnologia e Inovação"
    },
    {
      "id": "negocios",
      "nome": "Negócios e Gestão"
    },
    {
      "id": "direito",
      "nome": "Direito e Justiça"
    },
    {
      "id": "engenharia",
      "nome": "Engenharia e Construção"
    },
    {
      "id": "artes",
      "nome": "Artes e Design"
    },
    {
      "id": "comunicacao",
      "nome": "Comunicação e Marketing"
    },
    {
      "id": "educacao",
      "nome": "Educação"
    },
    {
      "id": "psicologia",
      "nome": "Psicologia e Comportamento"
    },
    {
      "id": "meio_ambiente",
      "nome": "Meio Ambiente"
    },
    {
      "id": "exatas",
      "nome": "Ciências Exatas"
    },
    {
      "id": "biologicas",
      "nome": "Ciências Biológicas"
    },
    {
      "id": "relacoes_internacionais",
      "nome": "Relações Internacionais"
    },
    {
      "id": "servicos_hospitalidade",
      "nome": "Serviços e Hospitalidade"
    },
    {
      "id": "esportes",
      "nome": "Esportes e Bem-estar"
    }
  ],
  "perguntas_escala": [
    {
      "id": "Q01",
      "area": "saude",
      "texto": "Presto atenção em como o corpo humano funciona e no que pode ser feito para mantê-lo saudável.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "corpo_humano",
        "conhecimento_saude"
      ]
    },
    {
      "id": "Q02",
      "area": "saude",
      "texto": "Sinto satisfação genuína em contribuir para o bem-estar físico ou emocional de outra pessoa.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "cuidado",
        "empatia"
      ]
    },
    {
      "id": "Q03",
      "area": "saude",
      "texto": "Em situações de emergência, consigo manter a calma e agir com responsabilidade.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "emergencia",
        "responsabilidade"
      ]
    },
    {
      "id": "Q04",
      "area": "tecnologia",
      "texto": "Tenho curiosidade genuína em entender o funcionamento interno de sistemas, aplicativos ou dispositivos.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "tecnologia",
        "curiosidade_tecnica"
      ]
    },
    {
      "id": "Q05",
      "area": "tecnologia",
      "texto": "Prefiro criar uma solução usando tecnologia a resolver o problema manualmente.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "criacao",
        "programacao"
      ]
    },
    {
      "id": "Q06",
      "area": "tecnologia",
      "texto": "Quando uma abordagem não funciona, testo outras até encontrar a que resolve o problema.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "experimentacao",
        "resolucao_problemas"
      ]
    },
    {
      "id": "Q07",
      "area": "negocios",
      "texto": "Gosto de coordenar pessoas, prazos e recursos para que um objetivo seja alcançado.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "organizacao",
        "gestao"
      ]
    },
    {
      "id": "Q08",
      "area": "negocios",
      "texto": "Tenho interesse em entender como uma empresa gera resultado e onde pode melhorar.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "estrategia",
        "negocios"
      ]
    },
    {
      "id": "Q09",
      "area": "negocios",
      "texto": "Não hesito muito na hora de escolher entre alternativas diferentes.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "tomada_decisao"
      ]
    },
    {
      "id": "Q10",
      "area": "direito",
      "texto": "Tenho interesse genuíno em entender regras, leis e os direitos das pessoas.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "leis",
        "justica"
      ]
    },
    {
      "id": "Q11",
      "area": "direito",
      "texto": "Antes de formar uma opinião, procuro entender os diferentes lados de uma situação.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "analise",
        "imparcialidade"
      ]
    },
    {
      "id": "Q12",
      "area": "direito",
      "texto": "Tenho facilidade para defender um ponto de vista com argumentos consistentes.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "argumentacao",
        "persuasao"
      ]
    },
    {
      "id": "Q13",
      "area": "engenharia",
      "texto": "Tenho curiosidade sobre como máquinas, estruturas ou sistemas são projetados.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "mecanica",
        "projeto"
      ]
    },
    {
      "id": "Q14",
      "area": "engenharia",
      "texto": "Gosto de transformar uma ideia em algo concreto e funcional.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "aplicacao",
        "criacao"
      ]
    },
    {
      "id": "Q15",
      "area": "engenharia",
      "texto": "Resolver problemas envolvendo medidas, materiais ou processos me interessa.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "calculo",
        "resolucao_problemas"
      ]
    },
    {
      "id": "Q16",
      "area": "artes",
      "texto": "Gosto de criar imagens, desenhos ou outras formas de expressão visual.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "criatividade",
        "expressao"
      ]
    },
    {
      "id": "Q17",
      "area": "artes",
      "texto": "Presto bastante atenção a detalhes estéticos: cores, formas, composição.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "estetica",
        "percepcao_visual"
      ]
    },
    {
      "id": "Q18",
      "area": "artes",
      "texto": "Tenho facilidade em transformar uma ideia abstrata em algo visual.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "abstracao",
        "criatividade"
      ]
    },
    {
      "id": "Q19",
      "area": "comunicacao",
      "texto": "Converso com facilidade com pessoas bem diferentes de mim.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "comunicacao",
        "sociabilidade"
      ]
    },
    {
      "id": "Q20",
      "area": "comunicacao",
      "texto": "Gosto de encontrar formas criativas de apresentar uma ideia ou convencer alguém.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "persuasao",
        "criatividade"
      ]
    },
    {
      "id": "Q21",
      "area": "comunicacao",
      "texto": "Tenho interesse em entender por que as pessoas escolhem certas marcas ou produtos.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "comportamento_consumidor",
        "tendencias"
      ]
    },
    {
      "id": "Q22",
      "area": "educacao",
      "texto": "Tenho paciência para explicar algo de formas diferentes até a pessoa entender.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "didatica",
        "comunicacao"
      ]
    },
    {
      "id": "Q23",
      "area": "educacao",
      "texto": "Gosto de acompanhar o progresso de alguém que estou ajudando a aprender.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "paciencia",
        "acompanhamento"
      ]
    },
    {
      "id": "Q24",
      "area": "educacao",
      "texto": "Sinto que contribuir para a formação de outra pessoa é algo realmente significativo para mim.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "desenvolvimento",
        "motivacao"
      ]
    },
    {
      "id": "Q25",
      "area": "psicologia",
      "texto": "Tenho curiosidade genuína sobre por que as pessoas pensam e agem do jeito que agem.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "curiosidade",
        "comportamento_humano"
      ]
    },
    {
      "id": "Q26",
      "area": "psicologia",
      "texto": "Percebo mudanças sutis de comportamento ou humor nas pessoas ao redor.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "percepcao_emocional",
        "observacao"
      ]
    },
    {
      "id": "Q27",
      "area": "psicologia",
      "texto": "Consigo ouvir alguém e entender sua perspectiva antes de julgar.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "escuta_ativa",
        "empatia"
      ]
    },
    {
      "id": "Q28",
      "area": "meio_ambiente",
      "texto": "Questões de sustentabilidade e preservação ambiental me interessam de verdade.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "consciencia_ambiental",
        "sustentabilidade"
      ]
    },
    {
      "id": "Q29",
      "area": "meio_ambiente",
      "texto": "Penso em formas de reduzir desperdício no meu dia a dia.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "otimizacao",
        "sustentabilidade"
      ]
    },
    {
      "id": "Q30",
      "area": "meio_ambiente",
      "texto": "Gostaria de trabalhar em algo ligado à preservação ou recuperação do meio ambiente.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "acao_ambiental",
        "sustentabilidade"
      ]
    },
    {
      "id": "Q31",
      "area": "exatas",
      "texto": "Gosto de resolver problemas usando lógica, cálculo ou raciocínio matemático.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "logica",
        "matematica"
      ]
    },
    {
      "id": "Q32",
      "area": "exatas",
      "texto": "Tenho curiosidade em identificar padrões em números ou informações.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "padroes",
        "dados"
      ]
    },
    {
      "id": "Q33",
      "area": "exatas",
      "texto": "Sinto satisfação genuína ao chegar numa solução lógica para um problema complexo.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "raciocinio_logico",
        "resolucao_problemas"
      ]
    },
    {
      "id": "Q34",
      "area": "biologicas",
      "texto": "Tenho curiosidade sobre animais, plantas e os processos da vida em geral.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "curiosidade",
        "biologia"
      ]
    },
    {
      "id": "Q35",
      "area": "biologicas",
      "texto": "Gosto de entender como organismos vivos funcionam e interagem com o ambiente.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "biologia",
        "observacao"
      ]
    },
    {
      "id": "Q36",
      "area": "biologicas",
      "texto": "Investigar ou observar fenômenos naturais me atrai bastante.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "investigacao",
        "experimentacao"
      ]
    },
    {
      "id": "Q37",
      "area": "relacoes_internacionais",
      "texto": "Tenho interesse genuíno em outros países, culturas e formas de organização social.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "cultura",
        "geopolitica"
      ]
    },
    {
      "id": "Q38",
      "area": "relacoes_internacionais",
      "texto": "Acompanho acontecimentos políticos ou econômicos de diferentes partes do mundo.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "geopolitica",
        "atualidades"
      ]
    },
    {
      "id": "Q39",
      "area": "relacoes_internacionais",
      "texto": "Gostaria de trabalhar com pessoas ou organizações de culturas diferentes da minha.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "cultura",
        "cooperacao"
      ]
    },
    {
      "id": "Q40",
      "area": "servicos_hospitalidade",
      "texto": "Gosto de proporcionar uma boa experiência para quem está sendo atendido.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "atencao_cliente",
        "organizacao_servico"
      ]
    },
    {
      "id": "Q41",
      "area": "servicos_hospitalidade",
      "texto": "Mantenho a postura profissional mesmo lidando com pessoas difíceis.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "profissionalismo",
        "resolucao_conflito"
      ]
    },
    {
      "id": "Q42",
      "area": "servicos_hospitalidade",
      "texto": "Trabalhar em ambientes movimentados, com contato direto com o público, não me incomoda.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "proatividade",
        "atendimento"
      ]
    },
    {
      "id": "Q43",
      "area": "esportes",
      "texto": "Atividades físicas, esportes e desempenho corporal me interessam de verdade.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "fisico",
        "esporte"
      ]
    },
    {
      "id": "Q44",
      "area": "esportes",
      "texto": "Gosto de acompanhar ou participar de atividades esportivas.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "esporte",
        "engajamento"
      ]
    },
    {
      "id": "Q45",
      "area": "esportes",
      "texto": "Sinto vontade de ajudar pessoas a melhorar seu condicionamento físico ou hábitos saudáveis.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "coaching",
        "saude_fisica"
      ]
    },
    {
      "id": "Q51",
      "area": "saude",
      "texto": "Costumo notar quando algo parece errado com a saúde de alguém antes que a pessoa mencione.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "cuidado",
        "observacao",
        "empatia"
      ]
    },
    {
      "id": "Q52",
      "area": "saude",
      "texto": "Pesquiso por conta própria sobre hábitos, prevenção ou cuidados com o corpo.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "prevencao",
        "conhecimento_saude"
      ]
    },
    {
      "id": "Q53",
      "area": "saude",
      "texto": "Trabalhar sob pressão para ajudar alguém em um momento crítico não me assusta.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "emergencia",
        "resiliencia"
      ]
    },
    {
      "id": "Q54",
      "area": "tecnologia",
      "texto": "Aprendo novas ferramentas ou linguagens por iniciativa própria, sem esperar alguém me ensinar.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "autoaprendizagem",
        "tecnologia"
      ]
    },
    {
      "id": "Q55",
      "area": "tecnologia",
      "texto": "Fico incomodado com tarefas repetitivas e penso em formas de automatizá-las.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "automacao",
        "logica"
      ]
    },
    {
      "id": "Q56",
      "area": "tecnologia",
      "texto": "Acho interessante como dados podem revelar padrões de comportamento ou prever tendências.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "dados",
        "padroes"
      ]
    },
    {
      "id": "Q57",
      "area": "negocios",
      "texto": "Percebo com facilidade onde um processo pode ser otimizado.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "estrategia",
        "otimizacao"
      ]
    },
    {
      "id": "Q58",
      "area": "negocios",
      "texto": "Sinto-me confortável negociando condições ou defendendo uma proposta.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "negociacao",
        "persuasao"
      ]
    },
    {
      "id": "Q59",
      "area": "negocios",
      "texto": "Gosto de acompanhar números e indicadores para saber se algo está indo bem.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "analise",
        "gestao"
      ]
    },
    {
      "id": "Q60",
      "area": "direito",
      "texto": "Percebo detalhes e inconsistências em textos ou documentos que outras pessoas deixam passar.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "atencao_detalhe",
        "analise"
      ]
    },
    {
      "id": "Q61",
      "area": "direito",
      "texto": "Debater ideias, mesmo discordando de alguém, não me incomoda.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "debate",
        "argumentacao"
      ]
    },
    {
      "id": "Q62",
      "area": "direito",
      "texto": "Penso bastante em como decisões legais afetam a vida real das pessoas.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "justica",
        "impacto_social"
      ]
    },
    {
      "id": "Q63",
      "area": "engenharia",
      "texto": "Gosto de entender como um objeto ou sistema funciona por dentro.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "curiosidade_tecnica",
        "mecanica"
      ]
    },
    {
      "id": "Q64",
      "area": "engenharia",
      "texto": "Não me incomodo em testar e ajustar um projeto várias vezes até ele funcionar direito.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "iteracao",
        "precisao"
      ]
    },
    {
      "id": "Q65",
      "area": "engenharia",
      "texto": "Calcular ou dimensionar algo com precisão é algo que me atrai.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "calculo",
        "projeto"
      ]
    },
    {
      "id": "Q66",
      "area": "artes",
      "texto": "Percebo detalhes visuais que a maioria das pessoas passa batido.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "percepcao_visual",
        "estetica"
      ]
    },
    {
      "id": "Q67",
      "area": "artes",
      "texto": "Gosto de experimentar estilos e materiais diferentes até achar o que combina.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "experimentacao",
        "criatividade"
      ]
    },
    {
      "id": "Q68",
      "area": "artes",
      "texto": "Sinto realização ao criar algo original que reflete minhas próprias ideias.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "originalidade",
        "expressao"
      ]
    },
    {
      "id": "Q69",
      "area": "comunicacao",
      "texto": "Ajusto naturalmente meu jeito de falar dependendo de quem está do outro lado.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "adaptabilidade",
        "comunicacao"
      ]
    },
    {
      "id": "Q70",
      "area": "comunicacao",
      "texto": "Tenho facilidade para prender a atenção de um grupo ao apresentar algo.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "apresentacao",
        "persuasao"
      ]
    },
    {
      "id": "Q71",
      "area": "comunicacao",
      "texto": "Acompanho tendências e comportamento do público em redes sociais com interesse genuíno.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "tendencias",
        "publico"
      ]
    },
    {
      "id": "Q72",
      "area": "educacao",
      "texto": "Repito uma explicação de jeitos diferentes sem perder a paciência.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "paciencia",
        "didatica"
      ]
    },
    {
      "id": "Q73",
      "area": "educacao",
      "texto": "Fico motivado quando vejo alguém evoluir depois que eu ajudei.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "motivacao",
        "desenvolvimento"
      ]
    },
    {
      "id": "Q74",
      "area": "educacao",
      "texto": "Gosto de planejar um conteúdo ou atividade de forma organizada antes de ensinar algo.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "planejamento",
        "didatica"
      ]
    },
    {
      "id": "Q75",
      "area": "psicologia",
      "texto": "Noto quando alguém está escondendo o que realmente sente.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "percepcao_emocional",
        "empatia"
      ]
    },
    {
      "id": "Q76",
      "area": "psicologia",
      "texto": "Tenho interesse em entender as causas por trás de um comportamento, não só o resultado.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "analise_comportamental",
        "curiosidade"
      ]
    },
    {
      "id": "Q77",
      "area": "psicologia",
      "texto": "Sinto-me confortável ouvindo os problemas pessoais de alguém sem julgamento.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "escuta_ativa",
        "empatia"
      ]
    },
    {
      "id": "Q78",
      "area": "meio_ambiente",
      "texto": "Fico incomodado ao ver desperdício de recursos naturais ou poluição.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "consciencia_ambiental",
        "valores"
      ]
    },
    {
      "id": "Q79",
      "area": "meio_ambiente",
      "texto": "Tenho curiosidade em entender como ecossistemas funcionam.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "ecologia",
        "conhecimento_natural"
      ]
    },
    {
      "id": "Q80",
      "area": "meio_ambiente",
      "texto": "Participaria de um projeto voltado a reduzir impacto ambiental se tivesse a chance.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "sustentabilidade",
        "acao"
      ]
    },
    {
      "id": "Q81",
      "area": "exatas",
      "texto": "Gosto de quebra-cabeças e desafios de lógica ou matemática.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "logica",
        "matematica"
      ]
    },
    {
      "id": "Q82",
      "area": "exatas",
      "texto": "Prefiro uma resposta exata e comprovável a uma opinião subjetiva.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "precisao",
        "racionalidade"
      ]
    },
    {
      "id": "Q83",
      "area": "exatas",
      "texto": "Consigo identificar erros de cálculo ou raciocínio com facilidade.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "atencao_detalhe",
        "calculo"
      ]
    },
    {
      "id": "Q84",
      "area": "biologicas",
      "texto": "Gosto de observar e registrar comportamentos de seres vivos ou fenômenos naturais.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "observacao",
        "pesquisa"
      ]
    },
    {
      "id": "Q85",
      "area": "biologicas",
      "texto": "Tenho interesse em entender como o corpo reage a diferentes condições.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "biologia",
        "investigacao"
      ]
    },
    {
      "id": "Q86",
      "area": "biologicas",
      "texto": "Participaria de uma pesquisa de campo ou experimento científico com interesse genuíno.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "pesquisa_campo",
        "experimentacao"
      ]
    },
    {
      "id": "Q87",
      "area": "relacoes_internacionais",
      "texto": "Tenho vontade de aprender outros idiomas ou costumes de culturas diferentes.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "cultura",
        "idiomas"
      ]
    },
    {
      "id": "Q88",
      "area": "relacoes_internacionais",
      "texto": "Entender conflitos e negociações entre países me interessa.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "geopolitica",
        "negociacao"
      ]
    },
    {
      "id": "Q89",
      "area": "relacoes_internacionais",
      "texto": "Me adapto bem a ambientes ou grupos culturalmente diferentes do meu.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "adaptabilidade_cultural",
        "abertura"
      ]
    },
    {
      "id": "Q90",
      "area": "servicos_hospitalidade",
      "texto": "Consigo antecipar o que alguém precisa antes mesmo de ser pedido.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "atencao_cliente",
        "proatividade"
      ]
    },
    {
      "id": "Q91",
      "area": "servicos_hospitalidade",
      "texto": "Gosto de trabalhar em equipe para garantir que tudo funcione durante um evento ou atendimento.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "trabalho_equipe",
        "organizacao_servico"
      ]
    },
    {
      "id": "Q92",
      "area": "servicos_hospitalidade",
      "texto": "Tenho paciência para lidar com reclamações ou imprevistos no atendimento.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "paciencia",
        "resolucao_conflito"
      ]
    },
    {
      "id": "Q93",
      "area": "esportes",
      "texto": "Gosto de estabelecer metas físicas e acompanhar minha própria evolução.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "disciplina",
        "meta"
      ]
    },
    {
      "id": "Q94",
      "area": "esportes",
      "texto": "Tenho curiosidade em entender como o corpo responde ao treinamento físico.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "fisiologia",
        "treino"
      ]
    },
    {
      "id": "Q95",
      "area": "esportes",
      "texto": "Fico motivado a incentivar outras pessoas a se exercitarem ou cuidarem da saúde.",
      "tipo": "escala",
      "peso": 1.0,
      "tags": [
        "motivacao",
        "coaching"
      ]
    }
  ],
  "perguntas_situacionais": [
    {
      "id": "Q46",
      "texto": "Você recebe um problema que nunca encontrou antes. Qual atitude mais se aproxima de você?",
      "opcoes": [
        {
          "letra": "A",
          "texto": "Pesquiso e tento entender tecnicamente o problema.",
          "areas": [
            "tecnologia",
            "exatas"
          ]
        },
        {
          "letra": "B",
          "texto": "Converso com alguém para compreender melhor a situação.",
          "areas": [
            "psicologia",
            "comunicacao"
          ]
        },
        {
          "letra": "C",
          "texto": "Divido o problema em partes menores e organizo uma estratégia.",
          "areas": [
            "negocios",
            "engenharia"
          ]
        },
        {
          "letra": "D",
          "texto": "Experimento soluções diferentes até encontrar uma resposta.",
          "areas": [
            "tecnologia",
            "biologicas"
          ]
        },
        {
          "letra": "E",
          "texto": "Procuro uma abordagem criativa que ninguém tenha tentado.",
          "areas": [
            "artes",
            "tecnologia"
          ]
        }
      ]
    },
    {
      "id": "Q47",
      "texto": "Você precisa trabalhar durante seis meses em um projeto. Qual atividade provavelmente seria mais interessante?",
      "opcoes": [
        {
          "letra": "A",
          "texto": "Analisar dados e encontrar padrões.",
          "areas": [
            "exatas",
            "negocios"
          ]
        },
        {
          "letra": "B",
          "texto": "Criar algo visual e desenvolver sua aparência.",
          "areas": [
            "artes"
          ]
        },
        {
          "letra": "C",
          "texto": "Coordenar pessoas e acompanhar resultados.",
          "areas": [
            "negocios",
            "educacao"
          ]
        },
        {
          "letra": "D",
          "texto": "Pesquisar e descobrir novas informações.",
          "areas": [
            "biologicas",
            "exatas"
          ]
        },
        {
          "letra": "E",
          "texto": "Interagir constantemente com clientes e usuários.",
          "areas": [
            "comunicacao",
            "servicos_hospitalidade"
          ]
        }
      ]
    },
    {
      "id": "Q48",
      "texto": "Uma pessoa procura você para resolver um problema pessoal. Qual seria sua reação mais natural?",
      "opcoes": [
        {
          "letra": "A",
          "texto": "Ouvir cuidadosamente e tentar compreender o que ela está sentindo.",
          "areas": [
            "psicologia"
          ]
        },
        {
          "letra": "B",
          "texto": "Procurar uma solução prática para o problema.",
          "areas": [
            "engenharia",
            "negocios"
          ]
        },
        {
          "letra": "C",
          "texto": "Fazer perguntas para entender todos os fatos.",
          "areas": [
            "direito",
            "exatas"
          ]
        },
        {
          "letra": "D",
          "texto": "Orientá-la com base nas regras e informações disponíveis.",
          "areas": [
            "direito",
            "educacao"
          ]
        },
        {
          "letra": "E",
          "texto": "Tentar motivá-la e ajudá-la a tomar uma decisão.",
          "areas": [
            "psicologia",
            "educacao"
          ]
        }
      ]
    },
    {
      "id": "Q49",
      "texto": "Você recebe um projeto com poucas instruções. O que mais provavelmente faria?",
      "opcoes": [
        {
          "letra": "A",
          "texto": "Começaria a pesquisar e entender o problema.",
          "areas": [
            "exatas",
            "tecnologia"
          ]
        },
        {
          "letra": "B",
          "texto": "Criaria um planejamento antes de começar.",
          "areas": [
            "negocios",
            "engenharia"
          ]
        },
        {
          "letra": "C",
          "texto": "Conversaria com as pessoas responsáveis pelo projeto.",
          "areas": [
            "comunicacao",
            "negocios"
          ]
        },
        {
          "letra": "D",
          "texto": "Começaria a experimentar possibilidades.",
          "areas": [
            "tecnologia",
            "artes"
          ]
        },
        {
          "letra": "E",
          "texto": "Tentaria criar algo original.",
          "areas": [
            "artes",
            "comunicacao"
          ]
        }
      ]
    },
    {
      "id": "Q50",
      "texto": "Qual situação provavelmente deixaria você mais satisfeito?",
      "opcoes": [
        {
          "letra": "A",
          "texto": "Resolver um problema extremamente difícil.",
          "areas": [
            "exatas",
            "engenharia"
          ]
        },
        {
          "letra": "B",
          "texto": "Ajudar uma pessoa a superar uma dificuldade.",
          "areas": [
            "saude",
            "psicologia",
            "educacao"
          ]
        },
        {
          "letra": "C",
          "texto": "Criar algo que outras pessoas considerassem interessante.",
          "areas": [
            "artes",
            "comunicacao"
          ]
        },
        {
          "letra": "D",
          "texto": "Fazer um projeto funcionar perfeitamente.",
          "areas": [
            "engenharia",
            "tecnologia"
          ]
        },
        {
          "letra": "E",
          "texto": "Conseguir atingir uma meta importante.",
          "areas": [
            "negocios",
            "esportes"
          ]
        }
      ]
    }
  ],
  "subareas": [
    {
      "area_pai": "saude",
      "subareas": [
        {
          "id": "enfermagem_cuidado",
          "nome": "Enfermagem / Cuidado direto",
          "caracteristicas": [
            "cuidado",
            "empatia",
            "emergencia"
          ]
        },
        {
          "id": "nutricao_prevencao",
          "nome": "Nutrição e Prevenção",
          "caracteristicas": [
            "prevencao",
            "conhecimento_saude"
          ]
        },
        {
          "id": "pesquisa_saude",
          "nome": "Pesquisa em Saúde",
          "caracteristicas": [
            "pesquisa",
            "investigacao"
          ]
        },
        {
          "id": "gestao_saude",
          "nome": "Gestão em Saúde",
          "caracteristicas": [
            "gestao",
            "organizacao_servico"
          ]
        }
      ]
    },
    {
      "area_pai": "tecnologia",
      "subareas": [
        {
          "id": "desenvolvimento",
          "nome": "Desenvolvimento de Software",
          "caracteristicas": [
            "logica",
            "programacao",
            "criacao"
          ]
        },
        {
          "id": "dados",
          "nome": "Dados",
          "caracteristicas": [
            "matematica",
            "analise",
            "padroes"
          ]
        },
        {
          "id": "ia",
          "nome": "Inteligência Artificial",
          "caracteristicas": [
            "matematica",
            "tecnologia",
            "investigacao"
          ]
        },
        {
          "id": "cyber_security",
          "nome": "Cyber Security",
          "caracteristicas": [
            "investigacao",
            "logica",
            "atencao_detalhe"
          ]
        },
        {
          "id": "ux_ui",
          "nome": "UX/UI",
          "caracteristicas": [
            "tecnologia",
            "criatividade",
            "percepcao_visual"
          ]
        },
        {
          "id": "redes",
          "nome": "Redes",
          "caracteristicas": [
            "tecnologia",
            "resolucao_problemas"
          ]
        },
        {
          "id": "iot",
          "nome": "IoT",
          "caracteristicas": [
            "tecnologia",
            "mecanica"
          ]
        }
      ]
    },
    {
      "area_pai": "negocios",
      "subareas": [
        {
          "id": "administracao",
          "nome": "Administração / Operações",
          "caracteristicas": [
            "gestao",
            "otimizacao"
          ]
        },
        {
          "id": "empreendedorismo",
          "nome": "Empreendedorismo",
          "caracteristicas": [
            "estrategia",
            "autoaprendizagem"
          ]
        },
        {
          "id": "financas",
          "nome": "Finanças",
          "caracteristicas": [
            "calculo",
            "racionalidade"
          ]
        },
        {
          "id": "rh",
          "nome": "Recursos Humanos",
          "caracteristicas": [
            "comunicacao",
            "negociacao"
          ]
        }
      ]
    },
    {
      "area_pai": "direito",
      "subareas": [
        {
          "id": "direito_publico",
          "nome": "Direito Público",
          "caracteristicas": [
            "justica",
            "impacto_social"
          ]
        },
        {
          "id": "advocacia_litigio",
          "nome": "Advocacia / Litígio",
          "caracteristicas": [
            "debate",
            "argumentacao"
          ]
        },
        {
          "id": "direito_corporativo",
          "nome": "Direito Corporativo",
          "caracteristicas": [
            "analise",
            "precisao"
          ]
        },
        {
          "id": "ciencias_criminais",
          "nome": "Ciências Criminais",
          "caracteristicas": [
            "investigacao",
            "atencao_detalhe"
          ]
        }
      ]
    },
    {
      "area_pai": "engenharia",
      "subareas": [
        {
          "id": "civil",
          "nome": "Engenharia Civil",
          "caracteristicas": [
            "calculo",
            "projeto"
          ]
        },
        {
          "id": "mecanica",
          "nome": "Engenharia Mecânica",
          "caracteristicas": [
            "mecanica",
            "curiosidade_tecnica"
          ]
        },
        {
          "id": "producao_processos",
          "nome": "Produção / Processos",
          "caracteristicas": [
            "iteracao",
            "precisao"
          ]
        },
        {
          "id": "eletrica_eletronica",
          "nome": "Elétrica / Eletrônica",
          "caracteristicas": [
            "tecnologia",
            "mecanica"
          ]
        }
      ]
    },
    {
      "area_pai": "artes",
      "subareas": [
        {
          "id": "design_grafico",
          "nome": "Design Gráfico",
          "caracteristicas": [
            "estetica",
            "percepcao_visual"
          ]
        },
        {
          "id": "artes_visuais",
          "nome": "Artes Visuais / Ilustração",
          "caracteristicas": [
            "criatividade",
            "expressao"
          ]
        },
        {
          "id": "moda",
          "nome": "Moda",
          "caracteristicas": [
            "estetica",
            "originalidade"
          ]
        },
        {
          "id": "design_produto",
          "nome": "Design de Produto",
          "caracteristicas": [
            "experimentacao",
            "criatividade"
          ]
        }
      ]
    },
    {
      "area_pai": "comunicacao",
      "subareas": [
        {
          "id": "publicidade",
          "nome": "Publicidade",
          "caracteristicas": [
            "persuasao",
            "criatividade"
          ]
        },
        {
          "id": "jornalismo",
          "nome": "Jornalismo",
          "caracteristicas": [
            "pesquisa",
            "comunicacao"
          ]
        },
        {
          "id": "marketing_digital",
          "nome": "Marketing Digital",
          "caracteristicas": [
            "tendencias",
            "publico"
          ]
        },
        {
          "id": "relacoes_publicas",
          "nome": "Relações Públicas",
          "caracteristicas": [
            "comunicacao",
            "adaptabilidade"
          ]
        }
      ]
    },
    {
      "area_pai": "educacao",
      "subareas": [
        {
          "id": "docencia",
          "nome": "Docência",
          "caracteristicas": [
            "didatica",
            "paciencia"
          ]
        },
        {
          "id": "educacao_infantil",
          "nome": "Pedagogia / Educação Infantil",
          "caracteristicas": [
            "paciencia",
            "desenvolvimento"
          ]
        },
        {
          "id": "gestao_educacional",
          "nome": "Gestão Educacional",
          "caracteristicas": [
            "planejamento",
            "organizacao_servico"
          ]
        },
        {
          "id": "educacao_especial",
          "nome": "Educação Especial",
          "caracteristicas": [
            "empatia",
            "paciencia"
          ]
        }
      ]
    },
    {
      "area_pai": "psicologia",
      "subareas": [
        {
          "id": "clinica",
          "nome": "Psicologia Clínica",
          "caracteristicas": [
            "escuta_ativa",
            "empatia"
          ]
        },
        {
          "id": "organizacional",
          "nome": "Psicologia Organizacional",
          "caracteristicas": [
            "analise_comportamental",
            "gestao"
          ]
        },
        {
          "id": "pesquisa_comportamento",
          "nome": "Pesquisa em Comportamento",
          "caracteristicas": [
            "pesquisa",
            "curiosidade"
          ]
        },
        {
          "id": "coaching_orientacao",
          "nome": "Orientação / Coaching",
          "caracteristicas": [
            "motivacao",
            "escuta_ativa"
          ]
        }
      ]
    },
    {
      "area_pai": "meio_ambiente",
      "subareas": [
        {
          "id": "gestao_ambiental",
          "nome": "Gestão Ambiental",
          "caracteristicas": [
            "sustentabilidade",
            "gestao"
          ]
        },
        {
          "id": "ecologia",
          "nome": "Biologia Ambiental / Ecologia",
          "caracteristicas": [
            "ecologia",
            "conhecimento_natural"
          ]
        },
        {
          "id": "engenharia_ambiental",
          "nome": "Engenharia Ambiental",
          "caracteristicas": [
            "tecnologia",
            "sustentabilidade"
          ]
        },
        {
          "id": "educacao_ambiental",
          "nome": "Educação Ambiental",
          "caracteristicas": [
            "consciencia_ambiental",
            "didatica"
          ]
        }
      ]
    },
    {
      "area_pai": "exatas",
      "subareas": [
        {
          "id": "matematica_estatistica",
          "nome": "Matemática / Estatística",
          "caracteristicas": [
            "matematica",
            "logica"
          ]
        },
        {
          "id": "fisica",
          "nome": "Física",
          "caracteristicas": [
            "logica",
            "calculo"
          ]
        },
        {
          "id": "computacao_cientifica",
          "nome": "Computação Científica",
          "caracteristicas": [
            "matematica",
            "tecnologia"
          ]
        },
        {
          "id": "economia_quantitativa",
          "nome": "Economia Quantitativa",
          "caracteristicas": [
            "calculo",
            "analise"
          ]
        }
      ]
    },
    {
      "area_pai": "biologicas",
      "subareas": [
        {
          "id": "biologia_zoologia",
          "nome": "Biologia / Zoologia",
          "caracteristicas": [
            "biologia",
            "observacao"
          ]
        },
        {
          "id": "biotecnologia",
          "nome": "Biotecnologia",
          "caracteristicas": [
            "pesquisa_campo",
            "experimentacao"
          ]
        },
        {
          "id": "ecologia_biologicas",
          "nome": "Ecologia",
          "caracteristicas": [
            "ecologia",
            "observacao"
          ]
        },
        {
          "id": "biomedicina",
          "nome": "Ciências da Saúde / Biomedicina",
          "caracteristicas": [
            "biologia",
            "investigacao"
          ]
        }
      ]
    },
    {
      "area_pai": "relacoes_internacionais",
      "subareas": [
        {
          "id": "diplomacia",
          "nome": "Diplomacia",
          "caracteristicas": [
            "geopolitica",
            "negociacao"
          ]
        },
        {
          "id": "comercio_exterior",
          "nome": "Comércio Exterior",
          "caracteristicas": [
            "negociacao",
            "gestao"
          ]
        },
        {
          "id": "cooperacao_ongs",
          "nome": "Cooperação Internacional / ONGs",
          "caracteristicas": [
            "cultura",
            "impacto_social"
          ]
        },
        {
          "id": "estudos_culturais",
          "nome": "Estudos Culturais / Idiomas",
          "caracteristicas": [
            "idiomas",
            "cultura"
          ]
        }
      ]
    },
    {
      "area_pai": "servicos_hospitalidade",
      "subareas": [
        {
          "id": "turismo_eventos",
          "nome": "Turismo / Eventos",
          "caracteristicas": [
            "organizacao_servico",
            "atencao_cliente"
          ]
        },
        {
          "id": "hotelaria",
          "nome": "Hotelaria",
          "caracteristicas": [
            "atencao_cliente",
            "proatividade"
          ]
        },
        {
          "id": "gastronomia",
          "nome": "Gastronomia",
          "caracteristicas": [
            "criatividade",
            "organizacao_servico"
          ]
        },
        {
          "id": "atendimento_cliente",
          "nome": "Atendimento ao Cliente",
          "caracteristicas": [
            "paciencia",
            "resolucao_conflito"
          ]
        }
      ]
    },
    {
      "area_pai": "esportes",
      "subareas": [
        {
          "id": "educacao_fisica",
          "nome": "Educação Física / Treinamento",
          "caracteristicas": [
            "disciplina",
            "treino"
          ]
        },
        {
          "id": "fisioterapia",
          "nome": "Fisioterapia / Reabilitação",
          "caracteristicas": [
            "fisiologia",
            "cuidado"
          ]
        },
        {
          "id": "nutricao_esportiva",
          "nome": "Nutrição Esportiva",
          "caracteristicas": [
            "fisiologia",
            "prevencao"
          ]
        },
        {
          "id": "gestao_esportiva",
          "nome": "Gestão Esportiva",
          "caracteristicas": [
            "gestao",
            "meta"
          ]
        }
      ]
    }
  ],
  "escala_resposta": {
    "1": "Discordo totalmente / Não me identifico",
    "2": "Discordo parcialmente",
    "3": "Neutro / Não sei",
    "4": "Concordo parcialmente",
    "5": "Concordo totalmente / Muito me identifico"
  }
};
