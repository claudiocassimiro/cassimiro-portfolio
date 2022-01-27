import styled from "styled-components";

export const Main = styled.main`
  overflow: hidden;
`;

export const Section = styled.section`
  width: 100%;
  height: 85vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (min-width: 220px) and (max-width: 1024px) {
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Article = styled.section`
  display: flex;
  flex-direction: column;
  @media (min-width: 220px) and (max-width: 1024px) {
    margin: 0 auto;
    padding: 50px;
  }
`;

export const H1Name = styled.h1`
  font-size: 3rem;
  margin-left: 30px;
  color: #eee;
  @media (min-width: 220px) and (max-width: 1024px) {
    font-size: 1.5rem;
    align-self: center;
    margin-left: 0;
  }
  @media (min-width: 1025px) and (max-width: 1680px) {
    font-size: 2rem;
  }
`;

export const H2Ocupation = styled.h2`
  font-size: 4rem;
  margin-left: 30px;
  color: #ccc;
  @media (min-width: 220px) and (max-width: 1024px) {
    font-size: 1.5rem;
    align-self: center;
    margin-left: 0;
  }
  @media (min-width: 1025px) and (max-width: 1680px) {
    font-size: 2.5rem;
  }
`;

export const ContainerImg = styled.article`
  display: flex;
  align-items: center;
  @media (min-width: 220px) and (max-width: 1024px) {
    & img {
      width: 150px;
      height: 150px;
    }
  }
  @media (min-width: 1025px) and (max-width: 1680px) {
    & img {
      width: 200px;
      height: 200px;
    }
  }
`;

export const ControlsButton = styled.button`
  border: none;
  background: none;
  width: 50px;
  font-size: 2rem;
  margin: 0 20px;
`;