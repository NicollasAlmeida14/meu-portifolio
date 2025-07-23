import MyFoto from "../../assets/nicollas.png"

// import Button from "../../components/Button"
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
  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0.8, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ ease: 'easeIn', duration: 0.8 }}
    >
      <DefaultHeader />

      <Main>
        <AboutMeDiv>
          <SubTitle>Um pouco sobre mim!</SubTitle>

          <p>
            Olá, sou Nicollas Almeida Lopes, desenvolvedor Front-End com experiência em <span>HTML, CSS, JavaScript e React</span>. Atualmente, aprofundo meus conhecimentos em <span>Node.js</span> e ferramentas de automação como o <span>N8N</span>, sempre buscando evolução constante.
            <br />
            Faço parte da formação <span>Full Stack do DevClub</span>, onde venho aplicando na prática tudo o que aprendo em projetos desafiadores.
            <br />
            Acredito que tecnologia vai além do código, e por isso valorizo o <span>trabalho em equipe e a inteligência emocional</span> no desenvolvimento de soluções eficazes.
          </p>

          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=nicollasalmeida14&layout=compact&theme=algolia  "
            alt="Linguagens mais utilizadas"
            loading='lazy'
          />
        </AboutMeDiv>

        <InfoDiv>
          <SubTitle>Nicollas Almeida Lopes</SubTitle>
          <h3>Desenvolvedor Front-End</h3>
          <img
            src={MyFoto}
            loading='lazy'
          />
        </InfoDiv>
      </Main>

    </Container>
  )
}

export default Home