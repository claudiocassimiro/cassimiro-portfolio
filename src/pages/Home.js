import { useContext, useState, useEffect } from 'react';
import AppContext from '../context/AppContext';
import Header from '../components/Header';
import {
  Section,
  SectionAll,
  ContainerThings1,
  ContainerThings2,
  Article,
  TecArticle,
  Title,
  Paragraph,
  ContainerImg,
  Img,
  ImgProfile,
} from './styles/HomeStyle';
import SpiderMan from '../img/spiderman.png';
import IconHtml from '../img/html5.png';
import IconCss from '../img/css3.png';
import IconGit from '../img/git.png';
import IconJS from '../img/JS.png';
import IconReact from '../img/react.png';
import IconRtl from '../img/rtl.png';

function Home() {

  const { name } = useContext(AppContext);
  const [greeting, setGreeting] = useState('');

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

  return (
    <main>
      <Header />
      <Section>
        <h1>{`Olá ${name}, ${greeting} =D`}</h1>  
      </Section>
      <SectionAll>
        <ContainerThings1>
          <Article>
            <Title>Meu nome é Cláudio, e...</Title>
            <Paragraph>Lorem Ipsum is simply dummy text of the printing and 
              typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s, when an unknown 
              printer took a galley of type and scrambled it to make a 
              type specimen book. It has survived not only five centuries, 
              but also the leap into electronic typesetting, remaining 
              essentially unchanged. It was popularised in the 1960s with 
              the release of Letraset sheets containing Lorem Ipsum passages, 
              and more recently with desktop publishing software like Aldus 
              PageMaker including versions of Lorem Ipsum.
              Lorem Ipsum is simply dummy text of the printing and 
              typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s, when an unknown 
              printer took a galley of type and scrambled it to make a 
              type specimen book. It has survived not only five centuries, 
              but also the leap into electronic typesetting, remaining 
              essentially unchanged. It was popularised in the 1960s with 
              the release of Letraset sheets containing Lorem Ipsum passages, 
              and more recently with desktop publishing software like Aldus 
              PageMaker including versions of Lorem Ipsum.
            </Paragraph>
          </Article>
          <TecArticle>
            <Title>Tecnologias:</Title>
            <ContainerImg>
              <Img src={IconHtml} alt='html icone'/>
              <Img src={IconCss} alt='css icone'/>
              <Img src={IconGit} alt='git icone'/>
              <Img src={IconJS} alt='js icone'/>
              <Img src={IconReact} alt='react icone'/>
              <Img src={IconRtl} alt='rtl icone'/>
            </ContainerImg>
          </TecArticle>
        </ContainerThings1>
        <ContainerThings2>
          <article>
            <ImgProfile src={SpiderMan} alt='Minha foto' />
          </article>
        </ContainerThings2>
      </SectionAll>
    </main>
  );
}

export default Home;
