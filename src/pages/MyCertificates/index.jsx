import { CerticateCard, CertificatesContainer, Container, SubTitle } from "./styles";

import Button from "../../components/Button";
import DynamicTitle from "../../components/DynamicTitle";

import FirstCerticate from "../../assets/certificado-html-css.png"
import SecondCertificate from "../../assets/certificado-js-intermediario.png"
import ThirdCerticate from "../../assets/certificado-nodejs.png"
import FourthCerticate from "../../assets/certificado-react.png"

import { useNavigate } from "react-router-dom";

function MyCertificates() {
    const navigate = useNavigate()

    return (
        <Container>

            <DynamicTitle phrases={['Área de Certificados']} />
            <Button theme={'primary'} type="buttton" onClick={() => navigate('/')}>Página Incial</Button>

            <CertificatesContainer>

                <CerticateCard>
                    <img src={FirstCerticate} />
                    <SubTitle>DevClub</SubTitle>
                </CerticateCard>

                <CerticateCard>
                    <img src={SecondCertificate} />
                    <SubTitle>DevClub</SubTitle>
                </CerticateCard>

                <CerticateCard>
                    <img src={ThirdCerticate} />
                    <SubTitle>DevClub</SubTitle>
                </CerticateCard>

                <CerticateCard>
                    <img src={FourthCerticate} />
                    <SubTitle>DevClub</SubTitle>
                </CerticateCard>

            </CertificatesContainer>
        </Container>
    )
}

export default MyCertificates