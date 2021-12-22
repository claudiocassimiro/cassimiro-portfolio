import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  margin-top: 100px;
  @media (min-width: 280px) {
    width: 90%;
  }
`;

export const TextArticle = styled.article`
  text-align: center;
  h1 {
    padding: 20px;
    font-size: 1.8rem;
  }
  p {
    font-size: 2.0rem;
    font-weight: bold;
    padding: 20px;
    background-color: #ff3300;
    border-radius: 3px;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
`;

export const ArticleEmail = styled.article`
  margin: 20px 0 20px 0;

  text-align: center;
  span {
    font-size: 2.0rem;
    font-weight: bold;
  }
  a {
    color: #ccc;
    text-decoration: none;
  }
`;

export const ArticleLikedIn = styled.article`
  margin-top: 20px;
  text-align: center;
  span {
    font-size: 2.0rem;
    font-weight: bold;
    padding: 20px;
    background-color: #4397d5;
    border-radius: 3px;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
`;