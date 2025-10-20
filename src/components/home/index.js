'use client';
import React from 'react';
import {
  BoxDown, BoxProfile, BoxText, BoxTop, Container,
  ProfileImage, FacebookHighlight,
  FacebookIcone, DescriptionBox
} from './styles';
import { TextCaption, TextBodyMedium, TextBodyLarge, TextHeading1, Highlight } from '@/app/styles/globalStyles';

export default function HomePage() {
  return (
    <Container>
      <BoxProfile>
        <ProfileImage src='/FotoPerfil.png' />
        <BoxText>

          <BoxTop>
            <TextBodyMedium>Hello! I Am <Highlight>Ibrahim Memon</Highlight></TextBodyMedium>
          </BoxTop>

          <BoxDown>
            <TextBodyMedium>A Designer who</TextBodyMedium>
            <TextHeading1>Judges a book<br />by its <Highlight>cover</Highlight>...</TextHeading1>
            <TextCaption>Because if the cover does not impress you what else can?</TextCaption>
          </BoxDown>

        </BoxText>
      </BoxProfile>
      <TextHeading1>I'm a Software Engineer.</TextHeading1>

      <TextBodyMedium>
        Currently, I'm a Software Engineer at
        <FacebookIcone src='/LogoFacebook.svg' />
        <FacebookHighlight>Facebook</FacebookHighlight>,
      </TextBodyMedium>

      <DescriptionBox>
        <TextBodyLarge>A self-taught UI/UX designer, functioning in the industry for 3+ years now.</TextBodyLarge>
        <TextBodyLarge>I make meaningful and delightful digital products that create an equilibrium</TextBodyLarge>
        <TextBodyLarge>between user needs and business goals.</TextBodyLarge>
      </DescriptionBox>
    </Container>  
  )
}