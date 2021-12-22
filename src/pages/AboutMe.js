import Header from '../components/Header';
import Eu from '../img/eu.jpg';
import { Section, Img, Link, SectionText, Article, Title, Paragraph } from './styles/AboutStyle';

function AboutMe() {
  return (
    <main>
      <Header />
      <Section>
        <Link
          href="https://www.linkedin.com/in/claudiocassimiro/"
          rel="noreferrer"
          target="_blank"
        >
          LinkedIn
        </Link>
        <Img src={Eu} alt="Foto minha" />
        <Link
          href="https://github.com/claudiocassimiro"
          rel="noreferrer"
          target="_blank"
        >
          GitHub
        </Link>
      </Section>
      <SectionText>
        <Article>
          <Title>Quem sou eu?</Title>
          <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Paragraph>
        </Article>
      </SectionText>
    </main>
  );
}

export default AboutMe;