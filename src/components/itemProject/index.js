import React from "react";
import { Container, BoxText, ProjectTag, ProjectTitle, ProjectDescription, ProjectCard } from "./styles";
import { BoxDescription } from "./styles";
import { ProjectContent } from "./styles";
import { BoxIcons } from "./styles";
import { Icon } from "./styles";
import { BoxImage } from "./styles";
import { ImageProject } from "./styles";



export default function ItemProject({ tag, title, description, icon }) {
    return (
        <Container>
            <ProjectCard>
                <ProjectContent>
                    <BoxText>
                        <ProjectTag>{tag}</ProjectTag>
                        <ProjectTitle>{title}</ProjectTitle>
                    </BoxText>
                    <BoxDescription>
                        <ProjectDescription>{description}</ProjectDescription>
                    </BoxDescription>
                    <BoxIcons>
                        <Icon src={icon} />
                        <Icon src={icon} />
                    </BoxIcons>
                </ProjectContent>
                <BoxImage>
                    <ImageProject src="/ImageProject-1.png" />
                </BoxImage>
            </ProjectCard>
        </Container>
    )
}