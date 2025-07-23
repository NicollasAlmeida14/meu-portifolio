import AnimationCreatorProject from "../../assets/projeto-criador-de-animacoes.png"
import DonaGeProject from "../../assets/projeto-loja-dona-ge.png"
import UserRegisterProject from "../../assets/projeto-cadastro-de-usuarios.png"
import PassWaveProject from "../../assets/projeto-passwave.png"
import CurrencyConverterProject from "../../assets/projeto-conversor-de-moedas.png"
import JokenpoProject from "../../assets/projeto-jokenpo.png"
import SuperMarioProject from "../../assets/projeto-super-mario.png"
import TeslaProject from "../../assets/projeto-tesla.png"
import DevSorteioProject from "../../assets/projeto-dev-sorteio.png"
import StopwatchProject from "../../assets/projeto-cronometro.png"

import DefaultHeader from '../../components/Header'

import {
    IoLogoHtml5,
    IoLogoCss3,
    IoLogoJavascript,
    IoLogoNodejs,
    IoLogoReact,
    IoMailUnreadOutline,
    IoCodeSlash
} from "react-icons/io5"

import {
    FaMobileAlt,
    FaRegEyeSlash,
    FaRegCopy,
    FaCoins,
    FaRobot,
    FaRegLightbulb,
    FaExchangeAlt,
    FaDatabase,
    FaShoppingCart
} from "react-icons/fa";

import {
    SiPrisma,
    SiVite,
    SiN8N
} from "react-icons/si";

import {
    MdOutlineFindInPage,
    MdOutlineViewCarousel,
    MdAnimation
} from "react-icons/md";

import { DiMongodb } from "react-icons/di";
import { LuExternalLink } from "react-icons/lu";
import { RiLockPasswordFill } from "react-icons/ri";
import { GoGear } from "react-icons/go";
import { ImBlocked } from "react-icons/im"
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import {
    Container,
    FunctionalityTitle,
    ToolsInfoContainer,
    ToolsTitle,
    Li,
    LinksContainer,
    ProjectDescription,
    ProjectDescriptionContainer,
    ProjectFunctionalityContainer,
    ProjectName,
    ProjectsContainer,
    ProjectSection,
    ProjectShowcaseContainer,
    Ul,
} from "./styles"

function MyProjects() {
    const anotherTab = (url) => {
        window.open(url, '_blank')
    }

    const { ref: refAnimationCreator, inView: inViewAnimationCreator } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    const { ref: refDonaGe, inView: inViewDonaGe } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    const { ref: refUserRegister, inView: inViewUserRegister } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    const { ref: refPassWave, inView: inViewPassWave } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    const { ref: refConvertCurrency, inView: inViewConvertCurrency } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    const { ref: refJokenpo, inView: inViewJokenpo } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    const { ref: refSuperMario, inView: inViewSuperMario } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    const { ref: refTesla, inView: inViewTesla } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    const { ref: refDevSorteio, inView: inViewDevSorteio } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    const { ref: refStopwatch, inView: inViewStopwatch } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    return (
        <Container>
            <DefaultHeader />

            <ProjectsContainer>

                <ProjectSection
                    as={motion.div}
                    ref={refAnimationCreator}
                    initial={{ opacity: 0, x: 50 }}
                    animate={inViewAnimationCreator ? { opacity: 1, x: 0 } : {}}
                    transition={{ ease: 'easeIn', duration: 0.8 }}
                >
                    <ProjectDescriptionContainer>
                        <ProjectName>Criador mágico de animações</ProjectName>

                        <ProjectDescription>
                            Este projeto foi desenvolvido em um evento realizado no YouTube do DevClub, chamado 'Progamador do futuro'. Este projeto agregou um conhecimento valioso para mim: A possibilidade de integrar automações com a programação.
                            <br />
                            (Devido a limitações do plano gratuito do N8N, no momento, o deploy do projeto está indisponível, podendo ser disponibilizado em breve!)
                        </ProjectDescription>

                        <ProjectFunctionalityContainer>
                            <FunctionalityTitle>Principais funcionalidades:</FunctionalityTitle>

                            <Ul>
                                <Li>
                                    <FaMobileAlt />
                                    Responsividade
                                </Li>

                                <Li>
                                    <SiN8N />
                                    Integração com N8N para automação
                                </Li>

                                <Li>
                                    <IoCodeSlash />
                                    Disponibiliza o código da animação criada
                                </Li>

                                <Li>
                                    <MdAnimation />
                                    Mostra o resultado da animação criada
                                </Li>
                            </Ul>
                        </ProjectFunctionalityContainer>

                        <LinksContainer>
                            <button
                                onClick={() => anotherTab('https://github.com/NicollasAlmeida14/criador-de-animacoes')}
                            >
                                <LuExternalLink />
                                Repositório
                            </button>
                        </LinksContainer>
                    </ProjectDescriptionContainer>

                    <ProjectShowcaseContainer>
                        <img
                            src={AnimationCreatorProject}
                            alt="Imagem do projeto"
                            loading='lazy'
                        />

                        <ToolsInfoContainer>
                            <ToolsTitle>Principais ferramentas utilizadas</ToolsTitle>

                            <div>
                                <p> <IoLogoHtml5 /> </p>
                                <p> <IoLogoCss3 /> </p>
                                <p> <IoLogoJavascript /> </p>
                                <p> <SiN8N /> </p>
                            </div>
                        </ToolsInfoContainer>
                    </ProjectShowcaseContainer>
                </ProjectSection>

                <ProjectSection
                    as={motion.div}
                    ref={refDonaGe}
                    initial={{ opacity: 0, x: -50 }}
                    animate={inViewDonaGe ? { opacity: 1, x: 0 } : {}}
                    transition={{ ease: 'easeIn', duration: 0.8 }}
                >
                    <ProjectDescriptionContainer>
                        <ProjectName>Loja Dona Ge</ProjectName>

                        <ProjectDescription>
                            Este projeto foi inspirado no antigo negócio da minha avó de vendas de produtos artesanais. Feito com muito carinho, este projeto me permitiu desafiar-me aprendendo conceitos que nunca tinha tentado antes, como o uso useContext, necessário para criar um carrinho de compras funcional.
                        </ProjectDescription>

                        <ProjectFunctionalityContainer>
                            <FunctionalityTitle>Principais funcionalidades:</FunctionalityTitle>

                            <Ul>
                                <Li>
                                    <FaMobileAlt />
                                    Responsividade
                                </Li>

                                <Li>
                                    <FaShoppingCart />
                                    Carrinho de compras funcional
                                </Li>

                                <Li>
                                    <MdOutlineViewCarousel />
                                    Carrossel de produtos com Swiper
                                </Li>

                                <Li>
                                    <MdOutlineFindInPage />
                                    Página de variações de produtos
                                </Li>
                            </Ul>
                        </ProjectFunctionalityContainer>

                        <LinksContainer>
                            <button
                                onClick={() => anotherTab('https://loja-dona-ge.vercel.app/')}
                            >
                                <LuExternalLink />
                                Projeto
                            </button>

                            <button
                                onClick={() => anotherTab('https://github.com/NicollasAlmeida14/loja-dona-ge')}
                            >
                                <LuExternalLink />
                                Repositório
                            </button>
                        </LinksContainer>
                    </ProjectDescriptionContainer>

                    <ProjectShowcaseContainer>
                        <img
                            src={DonaGeProject}
                            alt="Imagem do projeto"
                            loading='lazy'
                        />

                        <ToolsInfoContainer>
                            <ToolsTitle>Principais ferramentas utilizadas</ToolsTitle>

                            <div>
                                <p> <IoLogoReact /> </p>
                                <p> <SiVite /> </p>
                            </div>
                        </ToolsInfoContainer>
                    </ProjectShowcaseContainer>
                </ProjectSection>

                <ProjectSection
                    as={motion.div}
                    ref={refUserRegister}
                    initial={{ opacity: 0, x: 50 }}
                    animate={inViewUserRegister ? { opacity: 1, x: 0 } : {}}
                    transition={{ ease: 'easeIn', duration: 0.8 }}
                >
                    <ProjectDescriptionContainer>
                        <ProjectName>Cadastro de Usuários</ProjectName>

                        <ProjectDescription>
                            Projeto feito na formação do DevClub, este projeto se trata da criação de um cadastro de usuário, desde o Front até o Back. Este projeto foi realizado com o intuito de aprender conceitos do NodeJs, para o Back, e do ReactJs, para o Front.
                        </ProjectDescription>

                        <ProjectFunctionalityContainer>
                            <FunctionalityTitle>Principais funcionalidades:</FunctionalityTitle>

                            <Ul>
                                <Li>
                                    <FaDatabase />
                                    Realacionamento com banco de dados
                                </Li>

                                <Li>
                                    <GoGear />
                                    Uso do CRUD para gerenciamento de dados
                                </Li>

                                <Li>
                                    <GoGear />
                                    Consumo de uma API de avatares
                                </Li>
                            </Ul>
                        </ProjectFunctionalityContainer>

                        <LinksContainer>
                            <button
                                onClick={() => anotherTab('https://cadastro-de-usuarios-front.vercel.app/')}
                            >
                                <LuExternalLink />
                                Projeto
                            </button>

                            <button
                                onClick={() => anotherTab('https://github.com/NicollasAlmeida14/cadastro-de-usuarios-front')}
                            >
                                <LuExternalLink />
                                Repositório Front-End
                            </button>

                            <button
                                onClick={() => anotherTab('https://github.com/NicollasAlmeida14/cadastro-de-usuarios-back')}
                            >
                                <LuExternalLink />
                                Repositório Back-End
                            </button>
                        </LinksContainer>
                    </ProjectDescriptionContainer>

                    <ProjectShowcaseContainer>
                        <img
                            src={UserRegisterProject}
                            alt="Imagem do projeto"
                            loading='lazy'
                        />

                        <ToolsInfoContainer>
                            <ToolsTitle>Principais ferramentas utilizadas</ToolsTitle>

                            <div>
                                <p> <IoLogoReact /> </p>
                                <p> <SiVite /> </p>
                                <p> <IoLogoNodejs /> </p>
                                <p> <SiPrisma /> </p>
                                <p> <DiMongodb /> </p>
                            </div>
                        </ToolsInfoContainer>
                    </ProjectShowcaseContainer>
                </ProjectSection>

                <ProjectSection
                    as={motion.div}
                    ref={refPassWave}
                    initial={{ opacity: 0, x: -50 }}
                    animate={inViewPassWave ? { opacity: 1, x: 0 } : {}}
                    transition={{ ease: 'easeIn', duration: 0.8 }}
                >
                    <ProjectDescriptionContainer>
                        <ProjectName>PassWave</ProjectName>

                        <ProjectDescription>
                            Gerador de senhas simples, mas eficiente. Este projeto foi desenvolvido com o intuito de aprimorar a lógica de programação e alguns conceitos de JavaScript, como o math.random, por exemplo.
                        </ProjectDescription>

                        <ProjectFunctionalityContainer>
                            <FunctionalityTitle>Principais funcionalidades:</FunctionalityTitle>

                            <Ul>
                                <Li>
                                    <FaMobileAlt />
                                    Responsividade
                                </Li>

                                <Li>
                                    <RiLockPasswordFill />
                                    Capacidade de gerar senhas da maneira que desejar
                                </Li>

                                <Li>
                                    <FaRegEyeSlash />
                                    O input com a senha fica escondido até que uma senha aleatória seja solicitada
                                </Li>

                                <Li>
                                    <FaRegCopy />
                                    Copia a senha para a área de transferência
                                </Li>
                            </Ul>
                        </ProjectFunctionalityContainer>

                        <LinksContainer>
                            <button
                                onClick={() => anotherTab('https://nicollasalmeida14.github.io/passwave-gerador-de-senhas/')}
                            >
                                <LuExternalLink />
                                Projeto
                            </button>

                            <button
                                onClick={() => anotherTab('https://github.com/NicollasAlmeida14/passwave-gerador-de-senhas')}
                            >
                                <LuExternalLink />
                                Repositório
                            </button>
                        </LinksContainer>
                    </ProjectDescriptionContainer>

                    <ProjectShowcaseContainer>
                        <img
                            src={PassWaveProject}
                            alt="Imagem do projeto"
                            loading='lazy'
                        />

                        <ToolsInfoContainer>
                            <ToolsTitle>Principais ferramentas utilizadas</ToolsTitle>

                            <div>
                                <p> <IoLogoHtml5 /> </p>
                                <p> <IoLogoCss3 /> </p>
                                <p> <IoLogoJavascript /> </p>
                            </div>
                        </ToolsInfoContainer>
                    </ProjectShowcaseContainer>
                </ProjectSection>

                <ProjectSection
                    as={motion.div}
                    ref={refConvertCurrency}
                    initial={{ opacity: 0, x: 50 }}
                    animate={inViewConvertCurrency ? { opacity: 1, x: 0 } : {}}
                    transition={{ ease: 'easeIn', duration: 0.8 }}
                >
                    <ProjectDescriptionContainer>
                        <ProjectName>Conversor de moedas</ProjectName>

                        <ProjectDescription>
                            Conversor de moedas extremamente funcional, é capaz de converter o Real para Dólar Americano, Euro, Libra e até Bitcoin. Por consumir uma API, ele traz os valores atualizados das moedas (em alta), para dar dinanismo nos valores convertidos.
                        </ProjectDescription>

                        <ProjectFunctionalityContainer>
                            <FunctionalityTitle>Principais funcionalidades:</FunctionalityTitle>

                            <Ul>
                                <Li>
                                    <FaMobileAlt />
                                    Responsividade
                                </Li>

                                <Li>
                                    <FaCoins />
                                    Conversão das moedas em tempo real
                                </Li>

                                <Li>
                                    <GoGear />
                                    Consumo de uma API de cotações do AwesomeAPI
                                </Li>
                            </Ul>
                        </ProjectFunctionalityContainer>

                        <LinksContainer>
                            <button
                                onClick={() => anotherTab('https://nicollasalmeida14.github.io/conversor-de-moedas/')}
                            >
                                <LuExternalLink />
                                Projeto
                            </button>

                            <button
                                onClick={() => anotherTab('https://github.com/NicollasAlmeida14/conversor-de-moedas')}
                            >
                                <LuExternalLink />
                                Repositório
                            </button>
                        </LinksContainer>
                    </ProjectDescriptionContainer>

                    <ProjectShowcaseContainer>
                        <img
                            src={CurrencyConverterProject}
                            alt="Imagem do projeto"
                            loading='lazy'
                        />

                        <ToolsInfoContainer>
                            <ToolsTitle>Principais ferramentas utilizadas</ToolsTitle>

                            <div>
                                <p> <IoLogoHtml5 /> </p>
                                <p> <IoLogoCss3 /> </p>
                                <p> <IoLogoJavascript /> </p>
                            </div>
                        </ToolsInfoContainer>
                    </ProjectShowcaseContainer>
                </ProjectSection>

                <ProjectSection
                    as={motion.div}
                    ref={refJokenpo}
                    initial={{ opacity: 0, x: -50 }}
                    animate={inViewJokenpo ? { opacity: 1, x: 0 } : {}}
                    transition={{ ease: 'easeIn', duration: 0.8 }}
                >
                    <ProjectDescriptionContainer>
                        <ProjectName>JokenPô-Dev</ProjectName>

                        <ProjectDescription>
                            Jogo de Jokenpô funcional e extremamente jogável, este projeto me rendeu um prêmio de melhor projeto do mês de Abril/2025 na formação do DevClub, que conta com mais de 10.000 alunos.
                        </ProjectDescription>

                        <ProjectFunctionalityContainer>
                            <FunctionalityTitle>Principais funcionalidades:</FunctionalityTitle>

                            <Ul>
                                <Li>
                                    <FaMobileAlt />
                                    Responsividade
                                </Li>

                                <Li>
                                    <FaRobot />
                                    Acompanhamento em tempo real da escolha da máquina através dos emojis
                                </Li>

                                <Li>
                                    <ImBlocked />
                                    Bloqueio dos botões de escolha de jogada a cada término de rodada
                                </Li>
                            </Ul>
                        </ProjectFunctionalityContainer>

                        <LinksContainer>
                            <button
                                onClick={() => anotherTab('https://nicollasalmeida14.github.io/jokenpo/')}
                            >
                                <LuExternalLink />
                                Projeto
                            </button>

                            <button
                                onClick={() => anotherTab('https://github.com/NicollasAlmeida14/jokenpo')}
                            >
                                <LuExternalLink />
                                Repositório
                            </button>
                        </LinksContainer>
                    </ProjectDescriptionContainer>

                    <ProjectShowcaseContainer>
                        <img
                            src={JokenpoProject}
                            alt="Imagem do projeto"
                            loading='lazy'
                        />

                        <ToolsInfoContainer>
                            <ToolsTitle>Principais ferramentas utilizadas</ToolsTitle>

                            <div>
                                <p> <IoLogoHtml5 /> </p>
                                <p> <IoLogoCss3 /> </p>
                                <p> <IoLogoJavascript /> </p>
                            </div>
                        </ToolsInfoContainer>
                    </ProjectShowcaseContainer>
                </ProjectSection>

                <ProjectSection
                    as={motion.div}
                    ref={refSuperMario}
                    initial={{ opacity: 0, x: 50 }}
                    animate={inViewSuperMario ? { opacity: 1, x: 0 } : {}}
                    transition={{ ease: 'easeIn', duration: 0.8 }}
                >
                    <ProjectDescriptionContainer>
                        <ProjectName>Super Mário Bros</ProjectName>

                        <ProjectDescription>
                            Projeto realizado dentro da formação de 1000 reais em 7 dias do DevClub, este projeto foi realizado com o intuito de criar sites que possam se adaptar de acordo com a necessidade do cliente.
                        </ProjectDescription>

                        <ProjectFunctionalityContainer>
                            <FunctionalityTitle>Principais funcionalidades:</FunctionalityTitle>

                            <Ul>
                                <Li>
                                    <FaMobileAlt />
                                    Responsividade
                                </Li>

                                <Li>
                                    <FaRegLightbulb />
                                    Lógica para fazer aparecer e desaparecer o formulário de mensagem
                                </Li>

                                <Li>
                                    <IoMailUnreadOutline />
                                    Possibilidade de mandar uma mensagem direto para o email do dono da página
                                </Li>
                            </Ul>
                        </ProjectFunctionalityContainer>

                        <LinksContainer>
                            <button
                                onClick={() => anotherTab('https://nicollasalmeida14.github.io/super-mario-bros/')}
                            >
                                <LuExternalLink />
                                Projeto
                            </button>

                            <button
                                onClick={() => anotherTab('https://github.com/NicollasAlmeida14/super-mario-bros')}
                            >
                                <LuExternalLink />
                                Repositório
                            </button>
                        </LinksContainer>
                    </ProjectDescriptionContainer>

                    <ProjectShowcaseContainer>
                        <img
                            src={SuperMarioProject}
                            alt="Imagem do projeto"
                            loading='lazy'
                        />

                        <ToolsInfoContainer>
                            <ToolsTitle>Principais ferramentas utilizadas</ToolsTitle>

                            <div>
                                <p> <IoLogoHtml5 /> </p>
                                <p> <IoLogoCss3 /> </p>
                                <p> <IoLogoJavascript /> </p>
                            </div>
                        </ToolsInfoContainer>
                    </ProjectShowcaseContainer>
                </ProjectSection>

                <ProjectSection
                    as={motion.div}
                    ref={refDevSorteio}
                    initial={{ opacity: 0, x: 50 }}
                    animate={inViewDevSorteio ? { opacity: 1, x: 0 } : {}}
                    transition={{ ease: 'easeIn', duration: 0.8 }}
                >
                    <ProjectDescriptionContainer>
                        <ProjectName>DevSorteio</ProjectName>

                        <ProjectDescription>
                            Projeto realizado dentro da mentoria do DevClub. Este projeto teve o inutito de ensinar o conceito de math.random.
                        </ProjectDescription>

                        <ProjectFunctionalityContainer>
                            <FunctionalityTitle>Principais funcionalidades:</FunctionalityTitle>

                            <Ul>
                                <Li>
                                    <FaMobileAlt />
                                    Responsividade
                                </Li>

                                <Li>
                                    <GiPerspectiveDiceSixFacesRandom />
                                    Geração de números aleatórios dentre um valor min e máx desejado
                                </Li>

                                <Li>
                                    <FaRegEyeSlash />
                                    O input com o número sorteado fica escondido até a realização da requisição.
                                </Li>
                            </Ul>
                        </ProjectFunctionalityContainer>

                        <LinksContainer>
                            <button
                                onClick={() => anotherTab('https://nicollasalmeida14.github.io/dev-sorteio/')}
                            >
                                <LuExternalLink />
                                Projeto
                            </button>

                            <button
                                onClick={() => anotherTab('https://github.com/NicollasAlmeida14/dev-sorteio')}
                            >
                                <LuExternalLink />
                                Repositório
                            </button>
                        </LinksContainer>
                    </ProjectDescriptionContainer>

                    <ProjectShowcaseContainer>
                        <img
                            src={DevSorteioProject}
                            alt="Imagem do projeto"
                            loading='lazy'
                        />

                        <ToolsInfoContainer>
                            <ToolsTitle>Principais ferramentas utilizadas</ToolsTitle>

                            <div>
                                <p> <IoLogoHtml5 /> </p>
                                <p> <IoLogoCss3 /> </p>
                                <p> <IoLogoJavascript /> </p>
                            </div>
                        </ToolsInfoContainer>
                    </ProjectShowcaseContainer>
                </ProjectSection>

                <ProjectSection
                    as={motion.div}
                    ref={refStopwatch}
                    initial={{ opacity: 0, x: -50 }}
                    animate={inViewStopwatch ? { opacity: 1, x: 0 } : {}}
                    transition={{ ease: 'easeIn', duration: 0.8 }}
                >
                    <ProjectDescriptionContainer>
                        <ProjectName>Cronômetro</ProjectName>

                        <ProjectDescription>
                            Apesar de ser, provavelmente, um dos meus projetos mais simples em funcionalidades, este cronômetro tem um conteúdo rico quando se trata de praticar a lógica de programação, sendo o motivo principal para sua criação: Melhorar a lógica de programação.
                        </ProjectDescription>

                        <ProjectFunctionalityContainer>
                            <FunctionalityTitle>Principais funcionalidades:</FunctionalityTitle>

                            <Ul>
                                <Li>
                                    <FaMobileAlt />
                                    Responsividade
                                </Li>

                                <Li>
                                    <FaExchangeAlt />
                                    Troca de símbolos conforme o cronômetro está parado ou rodando
                                </Li>
                            </Ul>
                        </ProjectFunctionalityContainer>

                        <LinksContainer>
                            <button
                                onClick={() => anotherTab('https://nicollasalmeida14.github.io/cronometro/')}
                            >
                                <LuExternalLink />
                                Projeto
                            </button>

                            <button
                                onClick={() => anotherTab('https://github.com/NicollasAlmeida14/cronometro')}
                            >
                                <LuExternalLink />
                                Repositório
                            </button>
                        </LinksContainer>
                    </ProjectDescriptionContainer>

                    <ProjectShowcaseContainer>
                        <img
                            src={StopwatchProject}
                            alt="Imagem do projeto"
                            loading='lazy'
                        />

                        <ToolsInfoContainer>
                            <ToolsTitle>Principais ferramentas utilizadas</ToolsTitle>

                            <div>
                                <p> <IoLogoHtml5 /> </p>
                                <p> <IoLogoCss3 /> </p>
                                <p> <IoLogoJavascript /> </p>
                            </div>
                        </ToolsInfoContainer>
                    </ProjectShowcaseContainer>
                </ProjectSection>

                <ProjectSection
                    as={motion.div}
                    ref={refTesla}
                    initial={{ opacity: 0, x: -50 }}
                    animate={inViewTesla ? { opacity: 1, x: 0 } : {}}
                    transition={{ ease: 'easeIn', duration: 0.8 }}
                >
                    <ProjectDescriptionContainer>
                        <ProjectName>Site Tesla</ProjectName>

                        <ProjectDescription>
                            Projeto realizado em um evento no YouTube do DevClub, este projeto foi inspirado no site oficial da Tesla e o resposável por me introduzir à área da programação. Apesar de ter poucas linhas de JavaScript, este projeto foi importante para entender sobre a linguagem.
                        </ProjectDescription>

                        <ProjectFunctionalityContainer>
                            <FunctionalityTitle>Principais funcionalidades:</FunctionalityTitle>

                            <Ul>
                                <Li>
                                    <FaRegLightbulb />
                                    Lógica para fazer aparecer e desaparecer o formulário de mensagem
                                </Li>

                                <Li>
                                    <IoMailUnreadOutline />
                                    Recebimento de email usando o Jotform
                                </Li>
                            </Ul>
                        </ProjectFunctionalityContainer>

                        <LinksContainer>
                            <button
                                onClick={() => anotherTab('https://nicollasalmeida14.github.io/tesla/')}
                            >
                                <LuExternalLink />
                                Projeto
                            </button>

                            <button
                                onClick={() => anotherTab('https://github.com/NicollasAlmeida14/tesla')}
                            >
                                <LuExternalLink />
                                Repositório
                            </button>
                        </LinksContainer>
                    </ProjectDescriptionContainer>

                    <ProjectShowcaseContainer>
                        <img
                            src={TeslaProject}
                            alt="Imagem do projeto"
                            loading='lazy'
                        />

                        <ToolsInfoContainer>
                            <ToolsTitle>Principais ferramentas utilizadas</ToolsTitle>

                            <div>
                                <p> <IoLogoHtml5 /> </p>
                                <p> <IoLogoCss3 /> </p>
                                <p> <IoLogoJavascript /> </p>
                            </div>
                        </ToolsInfoContainer>
                    </ProjectShowcaseContainer>
                </ProjectSection>
            </ProjectsContainer>

        </Container>
    )
}

export default MyProjects