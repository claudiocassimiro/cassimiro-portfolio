import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 25px 0 40px -20px;
`;

export const Greeting = styled.h1`
  background-color: #4397D5;
  border-radius: 8px;
  padding: 10px;
  color: #222;

`;

export const PhraseSection = styled.section`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  width: 800px;
  margin 0 auto;
  margin-bottom: 50px;
  text-align: center;
  @media (min-width: 400px) {
    width: 400px;
  }
  @media (min-width: 1024px) {
    width: 600px;
  }
  @media (min-width: 1440px) {
    width: 800px;
  }
`;

export const Phrase = styled.h3`
  font-size: 1.5rem;
`;

export const Author = styled.p`
  font-size: 1.2rem;
  color: #bbb;
  margin-top: 8px;
  align-self: flex-end;
`;

export const SectionAll = styled.section`
  display: flex;
  justify-content: space-around;
`;

export const ContainerThings1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 28%;
  @media(max-width: 1400px) {
    width: 50%;
  }
`;

export const ContainerThings2 = styled.div`
  width: 30%;
  @media(max-width: 1400px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Article = styled.article`
  height: 50%;
  margin-left: 100px;
  margin-bottom: 30px;
  padding: 20px;
  background-color: #eee;
  border-radius: 10px;
  @media(max-width: 1400px) {
    height: 60%;
  }
`;

export const TecArticle = styled.article`
  height: 30%;
  margin-left: 100px;
  margin-bottom: 30px;
  padding: 20px;
  background-color: #eee;
  border-radius: 10px;
`;

export const Title = styled.h2`
  margin-bottom: 15px;
  text-align: center;
  color: #333;
`;

export const Paragraph = styled.p`
  text-align: justify;
  color: #555;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 15px;
`;

export const ContainerImg = styled.div`
  width: 50%;
  height: 200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: space-around;
  margin: 0 auto;
`;

export const Img = styled.img`
  width: 70px;
  height: 70px;
`;

export const ImgProfile = styled.img`
  @media(max-width: 1400px) {
    width: 400px;
    height: 400px;
  }
`;
