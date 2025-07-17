import MyFoto from "../../assets/nicollas.png"

import Button from "../../components/Button"
import DefaultHeader from "../../components/Header"

import { motion } from "framer-motion"

import {
  AboutMeDiv,
  Container,
  InfoDiv,
  Main,
  SubTitle,
} from "./styles"

function Home() {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = 'curriculo.pdf'
    link.download = 'Nicollas_Almeida_Lopes Desenvolvedor_Front-End.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Container>
      <DefaultHeader />

      <Main>
        <AboutMeDiv
          as={motion.div}
          initial={{ opacity: 0, translateX: -30 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ ease: 'easeIn', duration: 1 }}
        >
          <SubTitle>Um pouco sobre mim!</SubTitle>

          <p>
            Olá, sou Nicollas Almeida Lopes, desenvolvedor Front-End com foco em criar interfaces funcionais, modernas e centradas na experiência do usuário. Tenho conhecimento sólido em <span>HTML, CSS, JavaScript e React</span>, e atualmente aprofundo meus estudos em <span>Node.js</span> e ferramentas de automação como o <span>N8N</span> — sempre buscando evoluir como desenvolvedor full stack.

            Faço parte da formação <span>Full Stack do DevClub</span>, onde venho desenvolvendo projetos desafiadores e aplicando na prática os conceitos aprendidos. Um dos meus projetos mais relevantes foi inspirado no antigo negócio de produtos artesanais da minha avó, onde implementei <span>carrinho de compras funcional, página de variações de produtos e responsividade completa</span> — tudo com atenção aos detalhes e à usabilidade.

            Acredito que tecnologia vai além do código. Por isso, valorizo inteligência emocional e trabalho em equipe como pilares essenciais no desenvolvimento de soluções eficientes e colaborativas.
            Estou em busca da minha primeira oportunidade profissional como desenvolvedor front-end, e este portfólio representa minha dedicação, meu progresso e a fome por aprendizado e superação. Afinal, como costumo dizer:
            <span> "Ninguém prevê a fome do leão."</span>
          </p>

          <Button type="button" theme={'primary'} onClick={handleDownload}>Baixar CV</Button>
        </AboutMeDiv>

        <InfoDiv
          as={motion.div}
          initial={{ opacity: 0, translateX: 30 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ ease: 'easeIn', duration: 1 }}
        >
          <SubTitle>Nicollas Almeida Lopes</SubTitle>
          <h3>Desenvolvedor Front-End</h3>
          <img src={MyFoto} />
        </InfoDiv>
      </Main>

    </Container>
  )
}

export default Home