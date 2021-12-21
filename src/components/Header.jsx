/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import IconCC from '../img/icon.png';
import './styles/NavStyleLink.css';
import { useState } from 'react';
import HeaderStyle, {
  Section,
  ImgStyle,
  ListContainer,
  ListItem,
  ContainerBurger,
  Burger,
  Label,
  MenuList,
  ListItemMenu,
} from './styles/HeaderStyle';

function Header() {
  const [open, setOpen] = useState(false);
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
        <ContainerBurger>
          <Burger
            type="checkbox"
            id="checkbox-menu"
            onClick={() => setOpen(!open)}
          />

          <Label htmlFor="checkbox-menu">
            <span></span>
            <span></span>
            <span></span>
          </Label>
          {open && (
            <MenuList>
              <ListItemMenu><Link className="link" to="/home">Home</Link></ListItemMenu>
              <ListItemMenu><Link className="link" to="/projects">Projects</Link></ListItemMenu>
              <ListItemMenu><Link className="link" to="/aboutme">About-me</Link></ListItemMenu>
              <ListItemMenu><Link className="link" to="contacts">Contacts</Link></ListItemMenu>
            </MenuList>
          )}
        </ContainerBurger>
      </Section>
    </HeaderStyle>
   );
}

export default Header;
