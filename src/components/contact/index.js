import React from "react";
import { BoxIcons, BoxText, Container, Icon } from "./styles";
import { TextBodyLarge, TextBodySmall } from "@/app/styles/globalStyles";

export default function Contact() {
    return (
        <Container>
            <TextBodyLarge>Contact</TextBodyLarge>
            <BoxText>
                <TextBodySmall>
                    I'm currently looking to join a cross-functional team that values improving people's lives <br />
                    through accessible design. or have a project in mind? Let's connect.
                </TextBodySmall>
                <TextBodySmall>ibrhaimmemon930@gmail.com</TextBodySmall>
                <BoxIcons>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <Icon src="/IconInstagram.svg" />
                    </a>
                    <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer">
                        <Icon src="/IconDribble.svg" />
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ibrhaimmemon930@gmail.com&su=Contato%20via%20site"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Icon src="/IconGoogle.svg" />
                    </a>
                </BoxIcons>
            </BoxText>
        </Container>
    )
}   