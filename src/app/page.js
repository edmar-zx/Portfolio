'use client';
import React from "react";
import styled from "styled-components";
import HomePage from "./pages/homePage/page";
import Navbar from "@/components/navbar";

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
      </Container>
    </>

  )
}
