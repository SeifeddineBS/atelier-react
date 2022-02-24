import React from 'react'
import styled from "styled-components";


const WelcomeWrapper = styled.div `
 text-align: center; 
 display: flex; 
`;


export default function Home() {
  return (
   <WelcomeWrapper>

    <h1>Welcome to our shop </h1>

   </WelcomeWrapper>
  )
}
