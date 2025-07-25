import FirstCerticate from "../../assets/certificado-html-css.png"
import SecondCertificate from "../../assets/certificado-js-intermediario.png"
import ThirdCerticate from "../../assets/certificado-nodejs.png"
import FourthCerticate from "../../assets/certificado-react.png"

import DefaultHeader from "../../components/Header";

import { motion } from 'framer-motion'

import {
    CertficateSection,
    CertificateDescription,
    CertificateDescriptionContainer,
    CertificatesContainer,
    Container,
    RealizatedProjects,
} from "./styles";

function MyCertificates() {
    return (
        <Container
            as={motion.div}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeIn', duration: 0.8 }}
        >
            <DefaultHeader />

            <CertificatesContainer>

                <CertficateSection>
                    <CertificateDescriptionContainer>
                        <CertificateDescription>
                            Certicado correspondente ao módulo de HTML, CSS, Git e GitHub na formação Full-Stack do DevClub. Neste módulo, aprendi os fundamentos de desenvolvimento web, incluindo a estruturação de páginas com HTML, estilização com CSS e controle de versão com Git e GitHub.
                        </CertificateDescription>

                        <RealizatedProjects>
                            Neste módulo foram realizados alguns projetos práticos, como a criação de uma página web estática e o uso do Git para versionamento de código.
                        </RealizatedProjects>
                    </CertificateDescriptionContainer>

                    <img
                        src={FirstCerticate}
                        alt="Imagem do certificado de HTML, CSS, Git e GitHub"
                        loading='lazy'
                    />
                </CertficateSection>

                <CertficateSection>
                    <CertificateDescriptionContainer>
                        <CertificateDescription>
                            Certificado correspondente ao módulo de JavaScript Intermediário na formação Full-Stack do DevClub. Neste módulo, aprofundei meus conhecimentos em JavaScript, aprendendo sobre manipulação de DOM, eventos, e conceitos da linguagem.
                        </CertificateDescription>

                        <RealizatedProjects>
                            Durante este módulo, foram realizados projetos práticos que incluíram a criação de interações dinâmicas em páginas web e a implementação de funcionalidades utilizando JavaScript.
                        </RealizatedProjects>
                    </CertificateDescriptionContainer>

                    <img
                        src={SecondCertificate}
                        alt="Imagem do certificado de JavaScript intermediário"
                        loading='lazy'
                    />
                </CertficateSection>

                <CertficateSection>
                    <CertificateDescriptionContainer>
                        <CertificateDescription>
                            Certificado correspondente ao módulo de Node.js e JavaScript avançado na formação Full-Stack do DevClub. Neste módulo, aprendi a construir uma aplicação backend utilizando Node.js, incluindo a criação de APIs e o gerenciamento de banco de dados.
                        </CertificateDescription>

                        <RealizatedProjects>
                            O projeto realizado durante este módulo consiste na criação de uma API de cadastro de usuários. Usando o famoso CRUD e integrando ao MongoDB. Neste projeto foi utilizado também a biblioteca do Prisma, facilitando a integração da API com o banco de dados.
                        </RealizatedProjects>
                    </CertificateDescriptionContainer>

                    <img
                        src={ThirdCerticate}
                        alt="Imagem do certificado de Node.Js e JavaScript avançado"
                        loading='lazy'
                    />
                </CertficateSection>

                <CertficateSection>
                    <CertificateDescriptionContainer>
                        <CertificateDescription>
                            Certificado correspondente ao módulo de React e CSS avançado da formação Full-Stack do DevClub. Neste módulo aprendi o uso do display flex e display grid, além de conceitos fundamentais do React.
                        </CertificateDescription>

                        <RealizatedProjects>
                            O projeto realizado durante o módulo se trata do Front-End do cadastro de usuário, cujo a API foi feito durante o módulo de Node.js e JavaScript avançado.
                        </RealizatedProjects>
                    </CertificateDescriptionContainer>

                    <img
                        src={FourthCerticate}
                        alt="Imagem do certificado de React.Js e CSS avançado"
                        loading='lazy'
                    />
                </CertficateSection>

            </CertificatesContainer>
        </Container>
    )
}

export default MyCertificates