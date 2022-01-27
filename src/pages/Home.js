import { useContext, useState, useEffect } from 'react';
import AppContext from '../context/AppContext';
import Header from '../components/Header';
import {
  Main,
  Section,
  H1Name,
  H2Ocupation,
  ContainerImg,
  ControlsButton,
  Article,
} from './styles/HomeStyle';
import IconHtml from '../img/html5.png';
import IconCss from '../img/css3.png';
import IconGit from '../img/git.png';
import IconJS from '../img/JS.png';
import IconReact from '../img/react.png';
import IconBootstrap from '../img/bootstrap5.png';
import IconStyled from '../img/styled.png';
import IconDocker from '../img/docker.png';

const imageArray = [
  IconHtml,
  IconCss,
  IconGit,
  IconJS,
  IconReact,
  IconBootstrap,
  IconStyled,
  IconDocker,
];

function Home() {

  const { name, phrase, author } = useContext(AppContext);
  const [greeting, setGreeting] = useState('');
  const [indexButton, setIndexButton] = useState(0);

  useEffect(() => {
    function getHour() {
      const date = new Date();
      const hour = date.getHours();
      if (hour >= 0 && hour <= 5) {
        setGreeting('Boa madrugada!');
      }

      if (hour >= 6 && hour < 12) {
        setGreeting('Bom dia!');
      }

      if (hour >= 12 && hour <= 18) {
        setGreeting('Boa tarde!');
      }

      if (hour >= 18) {
        setGreeting('Boa noite!');
      }
    }
    getHour();
  }, []);

  function handleButtonImage(action) {
    const limit = 6;
    if (action === 'prev') {
      if (indexButton === 0) {
        setIndexButton(limit);
      } else {
        setIndexButton(indexButton - 2);
      }
    }
    if (action === 'next') {
      if (indexButton === limit) {
        setIndexButton(0);
      } else {
        setIndexButton(indexButton + 2);
      }
    }
  }

  return (
    <Main>
      <Header />
      <Section>
        <Article>
          <H1Name>CLÁUDIO CASSIMIRO</H1Name>
          <H2Ocupation>DESENVOLVEDOR DE SOFTWARE</H2Ocupation>
        </Article>
        <ContainerImg>
          <ControlsButton
            type="button"
            onClick={() => {
              handleButtonImage('prev');
            }}
          >
            {'<'}
          </ControlsButton>
          {imageArray.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={image}
              hidden={
                !(index === indexButton || index === indexButton + 1)
              }
            />          
          ))}
          <ControlsButton
            type="button"
            onClick={() => {
              handleButtonImage('next');
            }}
          >
            {'>'}
          </ControlsButton>
        </ContainerImg>
      </Section>
    </Main>
  );
}

export default Home;
