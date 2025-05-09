import { Title } from "./styles"
import { Typewriter } from "react-simple-typewriter"


function DefaultTitle({phrases}) {

    return (
        <Title>
            <Typewriter
                words={phrases}
                loop={0}
                cursor
                cursorStyle='|'
                typeSpeed={80}
                deleteSpeed={60}
                delaySpeed={1500}
            />
        </Title>
    )
}

export default DefaultTitle