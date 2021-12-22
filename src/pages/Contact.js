import Header from "../components/Header";
import { Section, TextArticle, ArticleEmail, ArticleLikedIn } from "./styles/ContactStyle";

function Contact() {
  return (
    <main>
      <Header />
      <Section>
        <TextArticle>
          <h1>Me quer em seu Projeto?</h1>
          <p><a href="https://www.linkedin.com/in/claudioletras/" rel="noreferrer" target="_blank">Me contrate agora!</a></p>
        </TextArticle>
        <ArticleEmail>
          <span><a href="mailto:claudioletras2019@gmail.com?subject=Quero te contratar">Fale comigo clicando aqui</a></span>
        </ArticleEmail>
        <ArticleLikedIn>
          <span><a href="https://www.linkedin.com/in/claudioletras/" rel="noreferrer" target="_blank">Meu Linkedin</a></span>
        </ArticleLikedIn>
      </Section>
    </main>
  );
}

export default Contact;
