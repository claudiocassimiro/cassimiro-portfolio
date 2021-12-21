import styled from "styled-components";

const HeaderStyle = styled.header`
  background-color: #4397D5;
  width: 100%;
  height: 80px;
  font-family: "Roboto", sans-serif;
`;

export const Section = styled.section`
  display: flex;
  width: 50%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const ListContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  width: 50%;
  @media (max-width: 1440px) and (min-width: 1024px) {
    flex-basis: 400px;
    flex-shrink: 0;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const ImgStyle = styled.img`
  margin-left: 200px;
  width: 70px;
  height: 70px;
  @media (max-width: 1024px) {
    margin-left: 0px;
  }
`;

export const ListItem = styled.li`
  cursor: pointer;
  padding: 48px 0 48px 0;
  font-size: 18px;
  &:hover {
    border-bottom: 2px solid #fff;
    height: 18px;
  }
`;

export const Label = styled.label`
  cursor: pointer;
  position: relative;
  display: block;
  width: 30px;
  height: 30px;
  & span {
    position: absolute;
    display: block;
    height: 5px;
    width: 100%;
    border-radius: 30px;
    background-color: #222;
    transition: 0.25s ease-in-out;
  }
  & span:nth-child(1) {
    top: 0;
  }
  & span:nth-child(2) {
    top: 8px;
  }
  & span:nth-child(3) {
    top: 16px;
  }
`;

export const ContainerBurger = styled.div`
  display: none;
  @media (max-width: 1024px) {
    display: flex;
    justify-content: flex-end;
  }
`;

export const Burger = styled.input`
  position: absolute;
  opacity: 0;
  &: checked + ${Label} span: nth-child(1) {
    transform: rotate(-45deg);
    top: 8px;
  }
  &: checked + ${Label} span: nth-child(2) {
    opacity: 0;
  }
  &: checked + ${Label} span: nth-child(3) {
    transform: rotate(45deg);
    top: 8px;
  }
`;

export const MenuList = styled.ul`
  position: absolute;
  top: 50px;
  background-color: #eee;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ListItemMenu = styled.li`
  color: #222;
  font-size: 17px;
  cursor: pointer;
  list-style: none;
  width: 100%;
  padding: 10px 30px;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: #4387D5;
    border-radius: 3px;
  }
`;



export default HeaderStyle;