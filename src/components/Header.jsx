/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import IconCC from '../img/icon.png';
import HeaderStyle, { Section, ImgStyle, ListContainer, ListItem, Link as A } from './styles/HeaderStyle';

function Header() {
  return ( 
    <HeaderStyle>
      <Section>
        <ImgStyle src={IconCC} alt="logo"/>
        <ListContainer>
          <ListItem><A href="/home">Home</A></ListItem>
          <ListItem><A href="/projects">Projects</A></ListItem>
          <ListItem><A href="/aboutme">About-me</A></ListItem>
          <ListItem><A href="contacts">Contacts</A></ListItem>
        </ListContainer>
      </Section>
    </HeaderStyle>
   );
}

export default Header;