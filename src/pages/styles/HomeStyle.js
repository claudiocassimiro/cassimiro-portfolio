import styled from "styled-components";

export const Section = styled.section`
  text-align: center;
  margin: 50px 0 50px 0;
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
