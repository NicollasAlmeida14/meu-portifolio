import { CerticateCard, CertificatesContainer, Container, SubTitle } from "./styles";

import Title from "../../components/Title";
import Button from "../../components/Button";

import FirstCerticate from "../../assets/certificado-html-css.png"
import SecondCertificate from "../../assets/certificado-js-intermediario.png"
import ThirdCerticate from "../../assets/certificado-nodejs.png"
import FourthCerticate from "../../assets/certificado-react.png"

import { useNavigate } from "react-router-dom";

function MyCertificates() {
    const navigate = useNavigate()

    return (
        <Container>

            <Title phrases={['Área de certificados']} />
            <Button theme={'primary'} type="buttton" onClick={() => navigate('/')}>Página Incial</Button>

            <CertificatesContainer>

                <CerticateCard>
                    <img src={FirstCerticate} />
                    <SubTitle>Certificado - DevClub</SubTitle>
                </CerticateCard>

                <CerticateCard>
                    <img src={SecondCertificate} />
                    <SubTitle>Certificado - DevClub</SubTitle>
                </CerticateCard>

                <CerticateCard>
                    <img src={ThirdCerticate} />
                    <SubTitle>Certificado - DevClub</SubTitle>
                </CerticateCard>

                <CerticateCard>
                    <img src={FourthCerticate} />
                    <SubTitle>Certificado - DevClub</SubTitle>
                </CerticateCard>

            </CertificatesContainer>
        </Container>
    )
}

export default MyCertificates