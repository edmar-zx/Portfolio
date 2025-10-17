import React from 'react';
import { Container, SkillsIcon } from './styles';

export default function SkillsItems({ src }) {
    return (
        <Container>
            <SkillsIcon src={src} />
        </Container>
    )
}