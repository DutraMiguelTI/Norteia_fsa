const INFORMACOES_AREAS = {
  saude: {
    resumo: "Saúde e bem-estar reúne atividades voltadas à prevenção, ao cuidado e à promoção da qualidade de vida ao longo das diferentes fases da vida.",
    contexto: "O trabalho pode acontecer em hospitais, clínicas, unidades de saúde, laboratórios, escolas, empresas e projetos comunitários. Muitas funções envolvem colaboração entre diferentes profissionais.",
    frentes: ["Cuidado e acompanhamento de pessoas", "Promoção da saúde e prevenção", "Pesquisa e organização de serviços de saúde"]
  },
  tecnologia: {
    resumo: "Tecnologia e inovação envolve criar, manter e melhorar sistemas digitais, dispositivos e serviços que ajudam pessoas e organizações a resolver problemas.",
    contexto: "Há oportunidades em empresas de tecnologia e em praticamente todos os setores. O trabalho pode envolver programação, análise de dados, segurança, pesquisa com usuários e infraestrutura.",
    frentes: ["Desenvolvimento de sistemas e produtos digitais", "Dados, automação e inteligência artificial", "Segurança, redes e dispositivos conectados"]
  },
  negocios: {
    resumo: "Negócios e gestão se dedica a organizar recursos, entender mercados e apoiar decisões que mantêm projetos, empresas e organizações funcionando e evoluindo.",
    contexto: "As atividades podem envolver planejamento, operações, finanças, empreendedorismo, relacionamento com clientes e desenvolvimento de equipes em organizações de diferentes portes.",
    frentes: ["Planejamento e operações", "Finanças e análise de resultados", "Empreendedorismo e desenvolvimento de equipes"]
  },
  direito: {
    resumo: "Direito e justiça estuda regras, direitos e formas de lidar com conflitos, orientar decisões e ampliar o acesso à justiça.",
    contexto: "O campo inclui atuação em escritórios, empresas, órgãos públicos, tribunais, organizações sociais e pesquisa. As rotinas variam entre análise de documentos, orientação, negociação e argumentação.",
    frentes: ["Orientação jurídica e contratos", "Defesa de direitos e políticas públicas", "Análise de casos, evidências e conflitos"]
  },
  engenharia: {
    resumo: "Engenharia e construção aplica ciência, matemática e projeto para planejar, construir e aperfeiçoar estruturas, máquinas, sistemas e processos.",
    contexto: "O trabalho pode alternar entre escritório, laboratório, indústria e campo. Segurança, precisão, colaboração e avaliação de impactos fazem parte de muitos projetos.",
    frentes: ["Projetos de estruturas e equipamentos", "Produção, qualidade e processos", "Sistemas elétricos, eletrônicos e mecânicos"]
  },
  artes: {
    resumo: "Artes e design explora linguagens visuais e materiais para comunicar ideias, criar experiências e desenvolver trabalhos autorais ou soluções visuais.",
    contexto: "As atividades podem envolver pesquisa de referências, criação, experimentação, apresentação de propostas e revisão de trabalhos para diferentes públicos e contextos.",
    frentes: ["Comunicação visual e design gráfico", "Criação artística e ilustração", "Moda e desenvolvimento de produtos"]
  },
  comunicacao: {
    resumo: "Comunicação e marketing estuda como ideias, informações e marcas se relacionam com diferentes públicos em meios digitais e tradicionais.",
    contexto: "O cotidiano pode combinar pesquisa, produção de conteúdo, campanhas, análise de resultados, relacionamento com públicos e apuração de informações.",
    frentes: ["Campanhas e publicidade", "Jornalismo e produção de conteúdo", "Marketing digital e relações públicas"]
  },
  educacao: {
    resumo: "Educação envolve criar condições para que pessoas aprendam, desenvolvam autonomia e compartilhem conhecimentos em diferentes etapas da vida.",
    contexto: "Além da docência, há atuação em planejamento, gestão, apoio à inclusão, produção de materiais e projetos de aprendizagem em escolas e outros espaços educativos.",
    frentes: ["Ensino e planejamento de aulas", "Desenvolvimento e aprendizagem infantil", "Gestão educacional e acessibilidade"]
  },
  psicologia: {
    resumo: "Psicologia e comportamento investiga como as pessoas pensam, sentem e agem, e como relações e contextos influenciam suas experiências.",
    contexto: "As possibilidades incluem atendimento psicológico, pesquisa, organizações e ações de orientação. A atuação profissional exige formação específica e segue princípios éticos próprios.",
    frentes: ["Atenção psicológica e escuta", "Comportamento em organizações", "Pesquisa e orientação"]
  },
  meio_ambiente: {
    resumo: "Meio ambiente reúne ações de conservação, sustentabilidade e busca por soluções para impactos das atividades humanas sobre os ecossistemas.",
    contexto: "O trabalho pode combinar estudos de campo, análise de dados, planejamento, educação, avaliação de impactos e projetos em organizações públicas, privadas ou comunitárias.",
    frentes: ["Conservação e ecologia", "Gestão e educação ambiental", "Soluções de engenharia ambiental"]
  },
  exatas: {
    resumo: "Ciências exatas usa matemática, modelos e métodos quantitativos para explicar fenômenos, testar hipóteses e apoiar decisões baseadas em evidências.",
    contexto: "As habilidades podem ser aplicadas em pesquisa, educação, tecnologia, indústria, finanças e análise de dados. Algumas rotinas têm foco teórico; outras, em aplicações práticas.",
    frentes: ["Matemática, estatística e dados", "Física e investigação de fenômenos", "Modelagem e computação científica"]
  },
  biologicas: {
    resumo: "Ciências biológicas estuda os seres vivos, suas estruturas, processos e relações com o ambiente, do nível celular aos ecossistemas.",
    contexto: "As atividades podem ocorrer em campo, laboratórios, instituições de pesquisa, empresas e projetos de conservação, dependendo da formação e da especialização.",
    frentes: ["Estudo de organismos e biodiversidade", "Pesquisa laboratorial e biotecnologia", "Ecologia e ciências da saúde"]
  },
  relacoes_internacionais: {
    resumo: "Relações internacionais analisa conexões entre países, organizações e sociedades, incluindo cooperação, diplomacia, comércio e questões globais.",
    contexto: "O trabalho pode envolver pesquisa e análise, negociação, projetos de cooperação, comércio exterior e comunicação entre pessoas e instituições de diferentes contextos.",
    frentes: ["Diplomacia e análise internacional", "Comércio exterior e negociação", "Cooperação e estudos culturais"]
  },
  servicos_hospitalidade: {
    resumo: "Serviços e hospitalidade planeja e oferece experiências de atendimento em que organização, acolhimento e atenção às necessidades das pessoas são centrais.",
    contexto: "As rotinas podem acontecer em hotéis, restaurantes, eventos, turismo e atendimento ao cliente. É comum coordenar equipes, resolver imprevistos e cuidar da qualidade do serviço.",
    frentes: ["Turismo e organização de eventos", "Hotelaria e experiência de hóspedes", "Gastronomia e atendimento"]
  },
  esportes: {
    resumo: "Esportes e bem-estar relaciona movimento, atividade física e saúde por meio de treinamento, reabilitação, orientação e gestão de iniciativas esportivas.",
    contexto: "As possibilidades incluem academias, clubes, clínicas, escolas, equipes e projetos esportivos. Cada atuação tem formação e responsabilidades próprias, especialmente em cuidados de saúde.",
    frentes: ["Treinamento e educação física", "Reabilitação e nutrição esportiva", "Gestão de atividades e organizações esportivas"]
  }
};
