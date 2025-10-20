import React from 'react';
import { Container, WorkInfos, WorkImage, WorkBoxTexts, WorkTitle, WorkSubtitle, WorkButton, TopLine } from './styles';

export default function WorkCard({ image, title, subtitle, buttonText }) {
    return (
        <Container>
            <WorkInfos>
                <WorkImage src={image} alt={title} />
                <WorkBoxTexts>
                    <WorkTitle>{title}</WorkTitle>
                    <WorkSubtitle>{subtitle}</WorkSubtitle>
                    <WorkButton>{buttonText}</WorkButton>
                </WorkBoxTexts>
            </WorkInfos>
        </Container>
    )
}