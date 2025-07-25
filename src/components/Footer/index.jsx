import { Footer } from "./styles"

import {
    IoLogoWhatsapp,
    IoLogoLinkedin,
    IoLogoGithub
} from "react-icons/io5";

function DefaultFooter() {
    const anotherTab = (url) => {
        window.open(url, '_blank')
    }

    return (
        <Footer>
            <p>© 2025 Nicollas Almeida Lopes. Todos os direitos reservados</p>

            <div>
                {/* <h3>Entre em contato</h3> */}

                <ul>
                    <li>
                        <button
                            onClick={() => anotherTab('https://wa.me/5511969158501')}
                            type='button'
                        >
                            <IoLogoWhatsapp />
                        </button>
                    </li>

                    <li>
                        <button
                            onClick={() => anotherTab('https://www.linkedin.com/in/nicollas-almeida-lopes/')}
                            type='button'
                        >
                            <IoLogoLinkedin />
                        </button>
                    </li>

                    <li>
                        <button
                            onClick={() => anotherTab('https://github.com/NicollasAlmeida14')}
                            type='button'
                        >
                            <IoLogoGithub />
                        </button>
                    </li>
                </ul>
            </div>
        </Footer>
    )
}

export default DefaultFooter