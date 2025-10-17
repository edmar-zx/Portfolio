'use client';
import React from "react";
import styled from "styled-components";

import Navbar from "@/components/navbar";
import HomePage from "@/components/homePage";
import Skills from "@/components/skillsPage";
import WorkExperience from "@/components/workExperience";

const Container = styled.div`
  backgrond-color: #11071F;
  width: 70%;
  margin: 0 auto;
`


export default function Home() {
  return (

    <>
      <Navbar/>
      <Container>
        <HomePage/>
        <WorkExperience/>
        <Skills/>
      </Container>
    </>

  )
}
