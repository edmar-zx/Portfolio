'use client';
import React from "react";
import styled from "styled-components";
import HomePage from "./pages/homePage";
import Navbar from "@/components/navbar";
import WorkExperience from "./pages/workExperience";

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
      </Container>
    </>

  )
}
