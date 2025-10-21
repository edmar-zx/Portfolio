import React, { useState } from "react";
import {
    Container, BoxText, ProjectTag, ProjectTitle, ProjectDescription, BoxGradients, Gradient1, Gradient2, Gradient3,
    BoxDescription, ProjectContent, BoxIcons, Icon, BoxImage, ImageProject,
    ModalOverlay,
    ModalContent,
    CloseButton,
    ModalImage
} from "./styles";

export default function ItemProject({ tag, title, description, icon, image, reverse, gradients }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Container reverse={reverse}>
            <ProjectContent reverse={reverse}>
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

            <BoxImage
                onClick={() => setIsModalOpen(true)}
            >
                <ImageProject
                    src={image}
                    reverse={reverse}
                />
            </BoxImage>
            {isModalOpen && (
                <ModalOverlay>
                    <ModalContent>
                        <CloseButton onClick={() => setIsModalOpen(false)}>×</CloseButton>
                        <ModalImage src={image} />
                    </ModalContent>
                </ModalOverlay>
            )}

            <BoxGradients gradients={gradients}>
                {gradients ? (
                    <>
                        <Gradient1 src="/BackgroundGradient-1.png" />
                        <Gradient2 src="/BackgroundGradient-2.png" />
                    </>
                ) : (
                    <Gradient3 src="/BackgroundGradient-3.png" />
                )}
            </BoxGradients>
        </Container>
    );
}