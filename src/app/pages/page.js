'use client';
import React from 'react';
import Link from "next/link";
import { Container, Title } from './page.styled';
import Navbar from '@/components/navbar/navbar';

export default function Home() {
  return (
    <Container>
        <Navbar/>
    </Container>

  );
}

