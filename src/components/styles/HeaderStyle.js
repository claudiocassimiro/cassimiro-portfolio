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
`;

export const ListContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  width: 50%;
`;

export const ImgStyle = styled.img`
  margin-left: 200px;
  width: 70px;
  height: 70px;
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

export default HeaderStyle;