'use client';
import React from 'react';
import { BoxDown, BoxProfile, BoxText, BoxTop, CaptionText, Container, HeroTitle, IntroText, ProfileImage, Highlight } from './page.styled';


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
    </Container>

  );
}

