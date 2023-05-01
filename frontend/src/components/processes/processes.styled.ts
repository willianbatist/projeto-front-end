"use client"
import styled from "styled-components";


export const ProcessesStyled = styled.section`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProcessStyled = styled.div`
  cursor: pointer;
  height: 6rem;
  width: 50%;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-radius: 20px;
  border-bottom: 3px solid #86878c;
  padding: 0 15px;

  span {
    color: #0f293a;
    font-weight: bold;
    
  }

  .group-text {
    display: flex;
    gap: 15px;
  }

  .group-icons {
    display: flex;
    gap: 15px;
  }

  svg {
    cursor: pointer;
    font-size: 20px;
    transition: 0.3s;
    position: static;
  }

  svg:hover {
    font-size: 22px;
  }

  @media only screen and (max-width: 1080px) {
    width: 65%;
  }
`;