import { tools } from "../../data/skillsToolsData"

import DefaultHeader from "../../components/Header"
import DefaultFooter from "../../components/Footer"

import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation, EffectCoverflow } from "swiper/modules"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import {
    Container,
    SkillsSection,
    SkillsContainer,
    Title,
    ToolContainer,
    ToolDescription,
    ToolName
} from "./styles"

function MySkills() {
    const frontEnd = tools.filter((tool => tool.category === 'front-end' ||
        tool.category === 'full-stack'))

    const backEnd = tools.filter((tool => tool.category === 'back-end' ||
        tool.category === 'full-stack'
    ))

    const other = tools.filter((tool) => tool.category === 'other')

    const { ref: refFrontEnd, inView: inViewFrontEnd } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    const { ref: refBackEnd, inView: inViewBackEnd } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    const { ref: refOther, inView: inViewOther } = useInView({
        triggerOnce: true,
        threshold: 0.2
    })

    return (
        <Container>
            <DefaultHeader />

            <SkillsContainer>
                <SkillsSection
                    as={motion.div}
                    ref={refFrontEnd}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inViewFrontEnd ? { opacity: 1, scale: 1 } : {}}
                    transition={{ ease: 'easeIn', duration: 0.8 }}
                >
                    <Title>Front-End</Title>

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        navigation
                        modules={[Navigation, EffectCoverflow]}
                        effect={'coverflow'}
                        coverflowEffect={{
                            depth: 100,
                            modifier: 1,
                            rotate: 50,
                            scale: 1,
                            slideShadows: true,
                            stretch: 0
                        }}
                    >
                        {frontEnd.map((tool) => (
                            <SwiperSlide key={tool.id}>
                                <ToolContainer>
                                    <div>
                                        <ToolName>{tool.name}</ToolName>
                                        <ToolDescription>{tool.description}</ToolDescription>
                                    </div>

                                    <tool.icon size={200} color={tool.iconColor} />
                                </ToolContainer>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </SkillsSection>

                <SkillsSection
                    as={motion.div}
                    ref={refBackEnd}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inViewBackEnd ? { opacity: 1, scale: 1 } : {}}
                    transition={{ ease: 'easeIn', duration: 0.8 }}
                >
                    <Title>Back-End</Title>

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        navigation
                        modules={[Navigation, EffectCoverflow]}
                        effect={'coverflow'}
                        coverflowEffect={{
                            depth: 100,
                            modifier: 1,
                            rotate: 50,
                            scale: 1,
                            slideShadows: true,
                            stretch: 0
                        }}
                    >
                        {backEnd.map((tool) => (
                            <SwiperSlide key={tool.id}>
                                <ToolContainer>
                                    <div>
                                        <ToolName>{tool.name}</ToolName>
                                        <ToolDescription>{tool.description}</ToolDescription>
                                    </div>

                                    <tool.icon size={200} color={tool.iconColor} />
                                </ToolContainer>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </SkillsSection>

                <SkillsSection
                    as={motion.div}
                    ref={refOther}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inViewOther ? { opacity: 1, scale: 1 } : {}}
                    transition={{ ease: 'easeIn', duration: 0.8 }}
                >
                    <Title>Outras ferramentas</Title>

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        navigation
                        modules={[Navigation, EffectCoverflow]}
                        effect={'coverflow'}
                        coverflowEffect={{
                            depth: 100,
                            modifier: 1,
                            rotate: 50,
                            scale: 1,
                            slideShadows: true,
                            stretch: 0
                        }}
                    >
                        {other.map((tool) => (
                            <SwiperSlide key={tool.id}>
                                <ToolContainer>
                                    <div>
                                        <ToolName>{tool.name}</ToolName>
                                        <ToolDescription>{tool.description}</ToolDescription>
                                    </div>

                                    <tool.icon size={200} color={tool.iconColor} />
                                </ToolContainer>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </SkillsSection>
            </SkillsContainer>

            <DefaultFooter />
        </Container>
    )
}

export default MySkills