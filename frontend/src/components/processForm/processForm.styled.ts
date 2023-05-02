"use client"
import styled from "styled-components";


export const ProcessFormStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  .containerForm {
    background-color: white;
    width: 70%;
    height: fit-content;
    margin-top: -80px;
    border-radius: 20px;
    border-bottom: 3px solid #86878c;
    -webkit-box-shadow: 7px 7px 14px -6px rgba(0,0,0,0.75);
    -moz-box-shadow: 7px 7px 14px -6px rgba(0,0,0,0.75);
    box-shadow: 7px 7px 14px -6px rgba(0,0,0,0.75);
    display: flex;
    justify-content: center;
  }

  form {
    background-color: white;
    padding: 40px;
    margin: 10px;
    width: 70%;
  }
`;