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
  margin-top: 100px;
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
  justify-content: space-evenly;
  margin: 150px 80px 0 80px;
  @media(min-width: 374px) and (max-width: 1023px) {
    flex-direction: column;
    margin: 100px 40px 0 40px;
  }
`;

export const ContainerThings1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 100%;
  @media(min-width: 374px) and (max-width: 1023px) {
    width: 100%;
  }
`;

export const ContainerThings2 = styled.div`
  width: 600px;
  height: 100%;
  @media(min-width: 374px) and (max-width: 1023px) {
    width: 100%;
  }
`;

export const Article = styled.article`
  margin-bottom: 30px;
  padding: 20px;
  background-color: #eee;
  border-radius: 10px;
  @media(max-width: 1400px) {
    height: 60%;
  }
`;

export const TecArticle = styled.article`
  margin-left: 100px;
  margin-bottom: 30px;
  padding: 20px;
  background-color: #eee;
  border-radius: 10px;
  @media(min-width: 374px) and (max-width: 1023px) {
    margin-left: 0;
  }
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
