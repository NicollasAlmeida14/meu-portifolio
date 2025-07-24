import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    IoIosMenu,
    IoMdClose
} from "react-icons/io";

import {
    Menu,
    MenuItem,
    SandwichContainer,
    SandwichIcon
} from "./styles"

function SandwichMenu() {
    const [isOpen, setIsOpen] = useState(false)

    const navigate = useNavigate()

    const toogleMenu = () => setIsOpen(prev => !prev)

    const handleNavigation = (path) => {
        navigate(path)
        setIsOpen(false)
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
        <SandwichContainer>
            <SandwichIcon onClick={toogleMenu} type='button'>
                {isOpen ? < IoMdClose /> : <IoIosMenu />}
            </SandwichIcon>

            <Menu $open={isOpen}>
                <MenuItem onClick={() => handleNavigation('/')}>Início</MenuItem>
                <MenuItem onClick={() => handleNavigation('/certificados')}>Certificados</MenuItem>
                <MenuItem onClick={() => handleNavigation('/projetos')}>Projetos</MenuItem>
                <MenuItem onClick={() => handleNavigation('/habilidades')}>Habilidades</MenuItem>
                <MenuItem onClick={handleDownload}>Baixar CV</MenuItem>
            </Menu>
        </SandwichContainer>
    )
}

export default SandwichMenu