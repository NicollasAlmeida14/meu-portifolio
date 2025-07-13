import { useNavigate } from "react-router-dom"

import { IoLogoWhatsapp, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

import Logo from "../../assets/logo.png"

import {
    Header,
    Li,
    Links,
    SocialMediaButton,
    Ul
} from "./styles"

function DefaultHeader() {
    const navigate = useNavigate()

    const anotherTab = (url) => {
        window.open(url, '_blank')
    }
    return (
        <Header>
            <img src={Logo} />

            <Ul>
                <Li> <Links onClick={() => navigate('/')}>Início</Links> </Li>
                <Li> <Links onClick={() => navigate('/certificados')}>Certificados</Links> </Li>
                <Li> <Links onClick={() => navigate('/projetos')}>Projetos</Links> </Li>
                <Li> <Links onClick={() => navigate('/habilidades')}>Habilidades</Links> </Li>
            </Ul>

            <Ul>
                <SocialMediaButton onClick={() => anotherTab()} type="button">
                    <IoLogoWhatsapp />
                </SocialMediaButton>

                <SocialMediaButton onClick={() => anotherTab('https://www.linkedin.com/in/nicollas-almeida-lopes/')} type="button">
                    <IoLogoLinkedin />
                </SocialMediaButton>

                <SocialMediaButton onClick={() => anotherTab('https://github.com/NicollasAlmeida14')} type="button">
                    <IoLogoGithub />
                </SocialMediaButton>
            </Ul>
        </Header>
    )
}

export default DefaultHeader