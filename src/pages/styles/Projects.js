import styled from "styled-components";

export const SectionTitle = styled.section`
  text-align: center;
  margin: 50px 0 50px 0;
`;

export const SectionCards = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  height: 700px;
  margin: 0 auto;
`;

export const Cards = styled.article`
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;
  width: 400px;
  height: 330px;
  border: 1px solid #ccc;
  text-align: center;
`;

export const ProjectTitle = styled.h2`
`;

export const Img = styled.img`
  width: 200px;
  height: 200px;
`;

export const Button = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 3px;
  outline: none;
  border: none;
  background-color: #4397D5;
  transition: background-color 0.2s;
  &:hover {
    cursor: pointer;
    background-color: #2F6CAD;
  }
`;