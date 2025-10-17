import React from "react";
import { Container, BoxText, BoxSkills, ImageSkills, ImageBox } from "./styles";
import { TextBodyMedium, TextBodySmall, Highlight } from "@/app/styles/globalStyles";
import SkillsItems from "../skillsItems";

export default function Skills() {
    return (
        <Container>
            <BoxText>
                <TextBodyMedium>
                    I'm currently looking to join a <Highlight>cross-functional</Highlight> team
                </TextBodyMedium>
                <TextBodySmall>that values improving people's lives through accessible design </TextBodySmall>
            </BoxText>
            <BoxSkills>
                <SkillsItems src='/IconeFigma.svg' />
                <SkillsItems src='/IconeReact.svg' />
                <SkillsItems src='/IconeC.svg' />
                <SkillsItems src='/IconeNode.svg' />
                <SkillsItems src='/IconeRedux.svg' />
                <SkillsItems src='/IconeJS.svg' />
                <SkillsItems src='/IconeCSS.svg' />
            </BoxSkills>
            <BoxSkills>
                <SkillsItems src='/IconeAdobeXd.svg' />
                <SkillsItems src='/IconeNext.svg' />
                <SkillsItems src='/IconeGatsby.svg' />
                <SkillsItems src='/IconeAi.svg' />
                <SkillsItems src='/IconeExpress.svg' />
                <SkillsItems src='/IconeMongoDB.svg' />
            </BoxSkills>
            <ImageBox>
                <ImageSkills src="/ImageSkills.svg" />
            </ImageBox>
        </Container>
    )
}