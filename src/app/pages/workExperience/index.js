import { Container, WorkExperienceSection, BoxGradient, GradientImage } from "./styles"
import { TextHeading2 } from '@/app/styles/globalStyles';
import WorkCard from "@/components/workCard";


export default function WorkExperience() {
    return (
        <Container>
            <TextHeading2>Work Experience</TextHeading2>
              <BoxGradient>
                <GradientImage src="/Gradient.svg" />
            </BoxGradient>
            <WorkExperienceSection>
                <WorkCard
                    image="/IconeWorkExperience-1.svg"
                    title="CIB on the Mobile"
                    subtitle={`Take your client onboard seamlessly by our amazing
                    tool of digital onboard process.`}
                    buttonText="LEARN MORE"
                />
                <WorkCard
                    image="/IconeWorkExperience-2.svg"
                    title="CIB on the Mobile"
                    subtitle={`Take your client onboard seamlessly by our amazing
                    tool of digital onboard process.`}
                    buttonText="LEARN MORE"
                />
                <WorkCard
                    image="/IconeWorkExperience-3.svg"
                    title="CIB on the Mobile"
                    subtitle={`Take your client onboard seamlessly by our amazing
                    tool of digital onboard process.`}
                    buttonText="LEARN MORE"
                />
                <WorkCard
                    image="/IconeWorkExperience-4.svg"
                    title="CIB on the Mobile"
                    subtitle={`Take your client onboard seamlessly by our amazing
                    tool of digital onboard process.`}
                    buttonText="LEARN MORE"
                />
            </WorkExperienceSection>
        </Container>
    )
}