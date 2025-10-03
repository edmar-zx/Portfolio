'use client';
import React from 'react';
import {
  BoxDown, BoxProfile, BoxText, BoxTop, Container,
   ProfileImage, Highlight, FacebookHighlight,
  FacebookIcone, DescriptionBox
} from './styles';

import { IntroText, HeroTitle, CaptionText, AboutText } from '@/app/styles/globalStyles';

export default function HomePage() {
  return (
    <Container>
      <BoxProfile>
        <ProfileImage src='/FotoPerfil.png' />
        <BoxText>

          <BoxTop>
            <IntroText>Hello! I Am <Highlight>Ibrahim Memon</Highlight></IntroText>
          </BoxTop>

          <BoxDown>
            <IntroText>A Designer who</IntroText>\
            <HeroTitle>Judges a book<br />by its <Highlight>cover</Highlight>...</HeroTitle>
            <CaptionText>Because if the cover does not impress you what else can?</CaptionText>
          </BoxDown>

        </BoxText>
      </BoxProfile>
      <HeroTitle>I'm a Software Engineer.</HeroTitle>
      <AboutText>
        Currently, I'm a Software Engineer at
        <FacebookIcone src='/LogoFacebook.svg' />
        <FacebookHighlight>Facebook</FacebookHighlight>,
      </AboutText>
      <DescriptionBox>
        <AboutText>self-taught UI/UX designer, functioning in the industry for 3+ years now.</AboutText>
        <AboutText>I make meaningful and delightful digital products that create an equilibrium</AboutText>
        <AboutText>between user needs and business goals.</AboutText>
      </DescriptionBox>
    </Container>

  )
}