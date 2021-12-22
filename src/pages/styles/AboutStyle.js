import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 50px 0 120px 0;
  width: 100%;
  @media (max-width: 768px) {
    margin: 50px 0 50px 0;
  }
`;

export const Img = styled.img`
  border-radius: 40%;
  border: 5px solid #4397D5;
  @media (max-width: 768px) {
    width: 230px;
  }
`;

export const Link = styled.a`
  background-color: #4397D5;
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;
  color: #fff;
  font-size: 1.2rem;
  &:hover {
    background-color: #3287c4;
  }
`;

export const SectionText = styled.section`
  border: 2px solid #4397D5;
  border-radius: 5px;
  text-align: center;
  width: 60%;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Article = styled.article`
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 30px;
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  text-align: justify;
`;
