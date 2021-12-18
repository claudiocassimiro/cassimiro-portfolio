/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import IconCC from '../img/icon.png';
import './styles/NavStyleLink.css';
import HeaderStyle, { Section, ImgStyle, ListContainer, ListItem } from './styles/HeaderStyle';

function Header() {
  return (
    <HeaderStyle>
      <Section>
        <a href="https://www.linkedin.com/in/claudiocassimiro/" target="_blank" rel="noreferrer">
          <ImgStyle src={IconCC} alt="Claudio Cassimiro" />
        </a>
        <ListContainer>
          <ListItem><Link className="link" to="/home">Home</Link></ListItem>
          <ListItem><Link className="link" to="/projects">Projects</Link></ListItem>
          <ListItem><Link className="link" to="/aboutme">About-me</Link></ListItem>
          <ListItem><Link className="link" to="contacts">Contacts</Link></ListItem>
        </ListContainer>
      </Section>
    </HeaderStyle>
   );
}

export default Header;
