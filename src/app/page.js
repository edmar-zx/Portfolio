'use client';
import React from "react";
import styled from "styled-components";
import Navbar from "@/components/navbar";
import HomePage from "@/components/home";
import Skills from "@/components/skills";
import WorkExperience from "@/components/workExperience";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

const Container = styled.div`
  backgrond-color: #11071F;
  width: 70%;
  margin: 0 auto;
`
export default function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <section id="home">
          <HomePage />
        </section>

        <section id="about">
          <WorkExperience />
        </section>

        <section id="lab">
          <Skills />
        </section>
        
        <Projects />
        <Contact />
      </Container>
    </>
  );
}