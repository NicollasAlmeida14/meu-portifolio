import {
  AboutMeDiv,
  Container,
  Form,
  Header,
  InfoDiv,
  Input,
  Li,
  Links,
  Main,
  Nav,
  SubTitle,
  Textarea,
  Ul
} from "./styles"

import { useNavigate } from "react-router-dom"
import { useState } from "react"

import WhatsappIcon from "../../assets/whatsapp.png"
import LinkedinIcon from "../../assets/linkedin.png"
import GitHubIcon from "../../assets/github.png"
import Logo from "../../assets/logo.png"

import MyFoto from "../../assets/nicollas.png"

import Button from "../../components/Button"
import DynamicTitle from "../../components/DynamicTitle"

function Home() {
  const navigate = useNavigate()

  const anotherTab = (url) => {
    window.open(url, '_blank')
  }

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = 'curriculo.pdf'
    link.download = 'Nicollas_Almeida_Lopes Desenvolvedor_Front-End.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const [showForm, setShowForm] = useState(false)
  const handleForm = () => {
    setShowForm(!showForm)
  }

  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()

    const text = `Olá, meu nome é ${name}. ${message}`
    const formattedtext = encodeURIComponent(text)
    const phoneNumber = '5511969158501'

    const url = `https://wa.me/${phoneNumber}?text=${formattedtext}`
    window.open(url, '_blank')
  }

  return (
    <Container>

      <Header>
        <img src={Logo} style={{ width: "125px", height: "125px" }} />
        <DynamicTitle phrases={['Bem-vindos ao meu portifólio!', 'Foi feito com muito carinho!', 'Espero que gostem!']} />
      </Header>

      <Nav>
        <Ul>
          <Li> <Links onClick={() => navigate('/certificados')}>Certificados</Links> </Li>
          <Li> <Links onClick={() => navigate('/projetos')}>Projetos</Links> </Li>
          <Li> <Links onClick={() => navigate('/habilidades')}>Habilidades</Links> </Li>
        </Ul>

        <Ul>
          <Li> <img src={WhatsappIcon} onClick={handleForm} /></Li>
          <Li> <img src={LinkedinIcon} onClick={() => anotherTab('https://www.linkedin.com/in/nicollas-almeida-lopes/')} /></Li>
          <Li> <img src={GitHubIcon} onClick={() => anotherTab('https://github.com/NicollasAlmeida14')} /></Li>
        </Ul>
      </Nav>

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

      <Form $show={showForm} onSubmit={handleSubmit}>
        <SubTitle>Entre em contato</SubTitle>

        <Input placeholder="Nome" type="text" value={name} onChange={(e) => setName(e.target.value)}></Input>
        <Textarea placeholder="Digite sua mensagem" rows={5} value={message} onChange={(e) => setMessage(e.target.value)}></Textarea>

        <Button type="submit" style={{ width: '100%' }}>Enviar via WhatsApp</Button>
      </Form>

    </Container>
  )
}

export default Home