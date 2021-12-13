/* eslint-disable no-unused-vars */
import { Link as a } from 'react-router-dom';
import IconCC from '../img/icon.png';
import HeaderStyle, { Section, ImgStyle, ListContainer, ListItem, Link as A } from './styles/HeaderStyle';

function Header() {
  return ( 
    <HeaderStyle>
      <Section>
        <a href="https://www.linkedin.com/in/claudiocassimiro/" target="_blank" rel="noreferrer">
          <ImgStyle src={IconCC} alt="Claudio Cassimiro" />
        </a>
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