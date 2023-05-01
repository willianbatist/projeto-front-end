"use client"
import styled from "styled-components";


export const HeaderStyled = styled.header`
  display: flex;
  align-items: flex-end;
  background-color: #98c0d6;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.4);
  min-height: 100px;
  font-family: Skolarsanspe bd, sans-serif;

  nav {
    width: 100vw;
  }

  h1 {
    padding: 1rem;
    position: fixed;
  }


  ul {
    display: flex;
  }

  li {
    list-style: none;
    cursor: pointer;
    flex-basis: 50%;
    text-align: center;
    font-size: 25px;
  }

  .componentSeleted {
    border-bottom: 3px solid #13afdb;
    color: #13afdb;
    font-weight: bold;
  }
`;