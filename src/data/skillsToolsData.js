import {
    IoLogoHtml5,
    IoLogoCss3,
    IoLogoJavascript,
    IoLogoNodejs,
    IoLogoReact,
    IoLogoGithub
} from "react-icons/io5"

import {
    SiStyledcomponents,
    SiVite,
} from "react-icons/si";

import { FaGitAlt } from "react-icons/fa6";


export const tools = [
    {
        id: 1,
        name: 'HTML',
        icon: IoLogoHtml5,
        description: 'Sigla para HyperText Markup Language (Linguagem de Marcação de Hipertexto), é a linguagem padrão para criar e estruturar páginas web. Ela define a organização e apresentação do conteúdo em um site, como textos, imagens e outros elementos, utilizando tags para marcar e formatar o conteúdo. ',
        iconColor: '#EC6231 ',
        category: 'front-end'
    },
    {
        id: 2,
        name: 'CSS',
        icon: IoLogoCss3,
        description: 'Linguagem de estilo utilizada para definir a apresentação visual de documentos HTML ou XML, como páginas web. Em resumo, o CSS controla a aparência, layout, cores, fontes e outros aspectos visuais de um site, separando a estrutura do conteúdo (HTML) da sua apresentação. ',
        iconColor: '#2965f1 ',
        category: 'front-end'
    },
    {
        id: 3,
        name: 'JavaScript',
        icon: IoLogoJavascript,
        description: 'Linguagem de programação de alto nível, interpretada e com foco no desenvolvimento web. É amplamente utilizada para adicionar interatividade e dinamismo a páginas web, tornando-as mais interativas e responsivas. Além do desenvolvimento front-end, o JavaScript também é utilizado no back-end com o Node.js e em outras áreas como desenvolvimento de aplicativos móveis e jogos. ',
        iconColor: '#F0DB4F',
        category: 'full-stack'
    },
    {
        id: 4,
        name: 'React.Js',
        icon: IoLogoReact,
        description: 'Biblioteca JavaScript de código aberto focada no desenvolvimento de interfaces de usuário (UI) interativas e dinâmicas para aplicações web e mobile. Ele permite a criação de componentes reutilizáveis e gerenciamento eficiente do estado da interface, facilitando a construção de aplicações complexas e escaláveis. ',
        iconColor: '#61DBFB',
        category: 'front-end'
    },
    {
        id: 5,
        name: 'Node.Js',
        icon: IoLogoNodejs,
        description: 'Ambiente de execução JavaScript de código aberto e multiplataforma que permite executar código JavaScript fora do navegador, ou seja, no lado do servidor. Ele é baseado no motor V8 do Google Chrome e é frequentemente utilizado para construir aplicações web, APIs, ferramentas de linha de comando e muito mais. ',
        iconColor: '#68A063  ',
        category: 'back-end'
    },
    {
        id: 6,
        name: 'Git',
        icon: FaGitAlt,
        description: 'Sistema de controle de versão distribuído, gratuito e de código aberto, usado para rastrear alterações em arquivos e coordenar o trabalho de vários desenvolvedores em projetos de software. Ele permite que você capture diferentes versões do seu projeto, volte para versões anteriores, compare alterações e trabalhe em conjunto com outras pessoas de forma eficiente. ',
        iconColor: '#F14E32   ',
        category: 'other'
    },
    {
        id: 7,
        name: 'GitHub',
        icon: IoLogoGithub,
        description: 'Plataforma baseada em nuvem em que é possível armazenar, compartilhar e trabalhar com outras pessoas para escrever códigos. ',
        iconColor: '#4183C4  ',
        category: 'other'
    },

    {
        id: 8,
        name: 'Styled Components',
        icon: SiStyledcomponents,
        description: 'Biblioteca para React e React Native que permite escrever CSS diretamente nos seus componentes JavaScript, utilizando template literals. Essa abordagem, conhecida como CSS-in-JS, ajuda a criar estilos com escopo, evitando colisões de classes e facilitando a manutenção do código.  ',
        iconColor: '#DB7093  ',
        category: 'other'
    },

    {
        id: 9,
        name: 'Vite',
        icon: SiVite,
        description: 'Ferramenta de construção de frontend, criada por Evan You, o mesmo criador do Vue.js, que visa proporcionar um ambiente de desenvolvimento rápido e eficiente para projetos web modernos. Ele se destaca por sua velocidade, utilizando o conceito de "carregamento rápido" (fast refresh) e um servidor de desenvolvimento sem empacotamento, impulsionado pelo esbuild e módulos ES nativos.',
        iconColor: '#646cff  ',
        category: 'other'
    },

]