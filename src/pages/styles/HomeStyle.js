import styled from "styled-components";

const Main = styled.main`
  background-color: #2F332E;
  width: 100%;
  height: 100vh;
  color: #ddd;
  font-family: "Roboto", sans-serif;
`;

export const Section = styled.section`
  text-align: center;
  margin: 50px 0 50px 0;
`;

export const ContainerThings1 = styled.div`
  display: inline-block;
  flex-direction: column;
  width: 100%;
`;

export const Article = styled.article`
  width: 30%;
  height: 40%;
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

export default Main;