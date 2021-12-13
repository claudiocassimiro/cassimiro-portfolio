import styled from "styled-components";

const Main = styled.main`
  margin: 0;
  padding: 0;
  background-color: #4397D5;
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
`;

export const SectionLogin = styled.section`
  background-color: #2F332E;
  border: 1px solid #777;
  border-radius: 5px;
  box-shadow: 6px 3px 16px 0px rgba(0,0,0,0.51);
  margin: 0 auto;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 400px;
  height: 300px;
`;

export const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  margin: 50px 0 40px 0;
  color: #ddd;
`;

export const Input = styled.input`
  background-color: #ddd;
  padding: 8px;
  border-radius: 5px;
  width: 250px;
  height: 30px;
  margin-bottom: 20px;
  outline: none;
`;

export const Button = styled.button`
  border-radius: 5px;
  box-shadow: 3px 6px 8px -4px rgba(0,0,0,0.79);
  width: 125px;
  height: 30px;
`;

export default Main;
