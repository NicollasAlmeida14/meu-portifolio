import { useNavigate } from "react-router-dom"

import {
    IoLogoWhatsapp,
    IoLogoLinkedin,
    IoLogoGithub
} from "react-icons/io5";

import { HiOutlineDownload } from "react-icons/hi";

import Logo from "../../assets/logo.png"

import {
    DownloadCurriculumLink,
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

    const handleDownload = () => {
        const link = document.createElement('a')
        link.href = 'curriculo.pdf'
        link.download = 'Nicollas_Almeida_Lopes Desenvolvedor_Front-End.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
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

            <DownloadCurriculumLink
                onClick={handleDownload}
            >
                <HiOutlineDownload />
                Baixar CV
            </DownloadCurriculumLink>
        </Header>
    )
}

export default DefaultHeader