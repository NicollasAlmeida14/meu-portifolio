import { BackEndContainer, Container, FrontEndContainer, SubTitle, SkillsContainer } from "./styles"

import Button from "../../components/Button"
import DynamicTitle from "../../components/DynamicTitle"

import { useNavigate } from "react-router-dom"

import HtmlLogo from "../../assets/html-5.png"
import CssLogo from "../../assets/css.png"
import JavaScriptLogo from "../../assets/javascript.png"
import ReactLogo from "../../assets/react.png"
import NodeJsLogo from "../../assets/nodejs.png"
import MongodbLogo from "../../assets/mongodb.png"

function MySkills() {
    const navigate = useNavigate()

    return (
        <Container>

            <DynamicTitle phrases={['Área de Habilidades']} />
            <Button theme={'primary'} onClick={() => navigate('/')}>Página Inicial</Button>

            <SkillsContainer>
                <FrontEndContainer>
                    <SubTitle>Front-End</SubTitle>
                    <div>
                        <img src={HtmlLogo} />
                        <img src={CssLogo} />
                        <img src={JavaScriptLogo} />
                        <img src={ReactLogo} />
                    </div>

                </FrontEndContainer>

                <BackEndContainer>
                    <SubTitle>Back-End</SubTitle>
                    <div>
                        <img src={JavaScriptLogo} />
                        <img src={NodeJsLogo} />
                        <img src={MongodbLogo} />
                    </div>

                </BackEndContainer>
            </SkillsContainer>
        </Container>
    )
}

export default MySkills