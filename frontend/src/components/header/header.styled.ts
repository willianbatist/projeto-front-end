"use client"
import styled from "styled-components";


export const HeaderStyled = styled.header`
  display: flex;
  align-items: flex-end;
  background-color: #0F293A;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.4);
  min-height: 100px;
  font-family: Skolarsanspe bd, sans-serif;
  position: sticky ;
  top: 0;
  color: white;


  nav {
    width: 100vw;
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
    transition: all 0.2s;
  }

  p {
    margin-bottom: 10px;
  }

  .componentSeleted {
    border-bottom: 2px solid #13afdb;
    color: #13afdb;
    font-weight: bold;
  }
`;