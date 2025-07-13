import {
  AboutMeDiv,
  Container,
  InfoDiv,
  Main,
  SubTitle,
} from "./styles"

import MyFoto from "../../assets/nicollas.png"

import Button from "../../components/Button"
import DefaultHeader from "../../components/Header"

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
        <AboutMeDiv>
          <SubTitle>Um pouco sobre mim!</SubTitle>
          <p>Olá! Me chamo Nicollas Almeida Lopes e sou um desenvolvedor Front-End apaixonado por transformar ideias em interfaces funcionais e criativas. Faço parte da formação Full Stack do DevClub, onde venho aprofundando meus conhecimentos em programação. Desde que entrei nesse universo, descobri o quanto gosto de codar — programar se tornou uma paixão que cresce a cada linha de código que escrevo.</p>
          <Button type="button" theme={'primary'} onClick={handleDownload}>Baixar CV</Button>
        </AboutMeDiv>

        <InfoDiv>
          <SubTitle>Nicollas Almeida Lopes</SubTitle>
          <h3>Desenvolvedor Front-End</h3>
          <img src={MyFoto} />
        </InfoDiv>
      </Main>

    </Container>
  )
}

export default Home