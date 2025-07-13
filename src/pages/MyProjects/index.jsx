import { Container, ProjectCard, ProjectsContainer, SubTitle } from "./styles"

import Button from "../../components/Button"
import DynamicTitle from "../../components/DynamicTitle"

import { useNavigate } from "react-router-dom"

import DonaGeProject from '../../assets/loja-dona-ge.png'
import PassWaveProject from "../../assets/projeto-passwave.png"
import CurrencyConverterProject from "../../assets/projeto-conversor-de-moedas.png"
import StopwatchProject from "../../assets/projeto-cronometro.png"
import SuperMarioProject from "../../assets/projeto-super-mario.png"
import TeslaProject from "../../assets/projeto-tesla.png"
import JokenpoProject from "../../assets/projeto-jokenpo.png"
import DevSorteioProject from "../../assets/projeto-dev-sorteio.png"

function MyProjects() {
    const navigate = useNavigate()

    const anotherTab = (url) => {
        window.open(url, '_blank')
    }

    return (
        <Container>

            <DynamicTitle phrases={['Área de Projetos']} />
            <Button type="button" theme={'primary'} onClick={() => navigate('/')}>Página inicial</Button>

            <ProjectsContainer>

                <ProjectCard onClick={() => anotherTab('https://loja-dona-ge.vercel.app/')}>
                    <img src={DonaGeProject} />

                    <div>
                        <SubTitle>Loja Dona Ge</SubTitle>
                        <p>Projeto em homenagem ao antigo negócio da minha vó, consiste em um site de vendas de produtos artesanais. Feito com totalmente com React, ele apresenta algumas funcionalidades interessantes, como a responsividade e a introdução de um carrinho de compras funcional.</p>
                    </div>

                    <Button type="button" onClick={() => anotherTab('https://github.com/NicollasAlmeida14/loja-dona-ge')}>Repositório</Button>
                </ProjectCard>

                <ProjectCard onClick={() => anotherTab('https://nicollasalmeida14.github.io/passwave-gerador-de-senhas/')}>
                    <img src={PassWaveProject} />

                    <div>
                        <SubTitle>PassWave</SubTitle>
                        <p>Gerador de senhas simples, responsivo e eficiente, desenvolvido com HTML, CSS e JavaScript puro. Ideal para usuários que buscam criar senhas seguras de forma prática e rápida.</p>
                    </div>

                    <Button type="button" onClick={() => anotherTab('https://github.com/NicollasAlmeida14/passWave-gerador-de-senhas')}>Repositório</Button>
                </ProjectCard>

                <ProjectCard onClick={() => anotherTab('https://nicollasalmeida14.github.io/conversor-de-moedas/')}>
                    <img src={CurrencyConverterProject} />

                    <div>
                        <SubTitle>Conversor de moedas</SubTitle>
                        <p>Aplicação responsiva desenvolvida com HTML, CSS e JavaScript, que consome uma API externa para realizar conversões em tempo real entre diferentes moedas de forma prática e precisa.</p>
                    </div>

                    <Button type="button" onClick={() => anotherTab('https://github.com/NicollasAlmeida14/conversor-de-moedas-2.0')}>Repositório</Button>
                </ProjectCard>

                <ProjectCard onClick={() => anotherTab('https://nicollasalmeida14.github.io/jokenpo/')}>
                    <img src={JokenpoProject} />

                    <div>
                        <SubTitle>JokenPô - Dev</SubTitle>
                        <p>Jogo interativo e responsivo de pedra, papel e tesoura, desenvolvido com HTML, CSS e JavaScript, onde o jogador desafia a máquina em partidas dinâmicas e divertidas.</p>
                    </div>

                    <Button type="button" onClick={() => anotherTab('https://github.com/NicollasAlmeida14/jokenpo')}>Repositório</Button>
                </ProjectCard>

                <ProjectCard onClick={() => anotherTab('https://nicollasalmeida14.github.io/super-mario-bros/')}>
                    <img src={SuperMarioProject} />

                    <div>
                        <SubTitle>Super Mário Bros</SubTitle>
                        <p>Site inspirado no clássico jogo da Nintendo, desenvolvido com HTML, CSS e JavaScript. O projeto traz uma interface divertida e nostálgica, com foco em prática de layout e interatividade.</p>
                    </div>

                    <Button type="button" onClick={() => anotherTab('https://github.com/NicollasAlmeida14/super-mario-bros')}>Repositório</Button>
                </ProjectCard>

                <ProjectCard onClick={() => anotherTab('https://nicollasalmeida14.github.io/tesla/')}>
                    <img src={TeslaProject} />

                    <div>
                        <SubTitle>Site - Tesla</SubTitle>
                        <p>Recriação do site da Tesla desenvolvida com HTML, CSS e JavaScript. O projeto foca na reprodução visual e prática de estruturação de layouts profissionais, embora não seja responsivo.</p>
                    </div>

                    <Button type="button" onClick={() => anotherTab('https://github.com/NicollasAlmeida14/tesla')}> Repositório</Button>
                </ProjectCard>

                <ProjectCard onClick={() => anotherTab('https://nicollasalmeida14.github.io/dev-sorteio/')}>
                    <img src={DevSorteioProject} />

                    <div>
                        <SubTitle>DevSorteio</SubTitle>
                        <p>Feito com HTMl, CSS e JS, este projeto teve como intuito colocar em prática o conhecimento da propriedade Math.Random.</p>
                    </div>

                    <Button type="button" onClick={() => anotherTab('https://github.com/NicollasAlmeida14/dev-sorteio')}> Repositório</Button>
                </ProjectCard>

                <ProjectCard onClick={() => anotherTab('https://nicollasalmeida14.github.io/cronometro/')}>
                    <img src={StopwatchProject} />

                    <div>
                        <SubTitle>Cronômetro</SubTitle>
                        <p>Projeto simples e responsivo, desenvolvido com HTML, CSS e JavaScript, criado com o objetivo de praticar lógica de programação e consolidar conceitos fundamentais da linguagem.</p>
                    </div>

                    <Button type="button" onClick={() => anotherTab('https://github.com/NicollasAlmeida14/cronometro')}>Repositório</Button>
                </ProjectCard>

            </ProjectsContainer>

        </Container>
    )
}

export default MyProjects