import Header from "../components/Header";
import { SectionTitle, SectionCards, Cards, Img, ProjectTitle, Button, Links } from "./styles/ProjectsStyle";
import Construcao from "../img/construcao.png";
import TriviaGame from "../img/triviagame.png";

function Projects() {
  return (
    <main>
      <Header />
      <SectionTitle>
        <h1>Projetos</h1>
      </SectionTitle>
      <SectionCards>
        <Cards>
          <ProjectTitle>Trivia Game</ProjectTitle>
          <img src={TriviaGame} alt="trivia game" />
          <Links>
            <a 
              href="https://trivia-gaming.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Jogar Trivia</Button>
            </a>
            <a 
              href="https://github.com/claudiocassimiro/Trivia-Game-Project"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Ir para repositório</Button>
            </a>
          </Links>
        </Cards>
        <Cards>
          <ProjectTitle>Projeto-2</ProjectTitle>
          <Img src={Construcao} alt="projeto 2" />
          <Links>
            <a 
              href="a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Projeto-2</Button>
            </a>
            <a 
              href="a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Ir para repositório</Button>
            </a>
          </Links>
        </Cards>
        <Cards>
          <ProjectTitle>Projeto-3</ProjectTitle>
          <Img src={Construcao} alt="projeto 3" />
          <Links>
            <a 
              href="a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Projeto-3</Button>
            </a>
            <a 
              href="a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Ir para repositório</Button>
            </a>
          </Links>
        </Cards>
        <Cards>
          <ProjectTitle>Projeto-4</ProjectTitle>
          <Img src={Construcao} alt="projeto 4" />
          <Links>
            <a 
              href="a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Projeto-4</Button>
            </a>
            <a 
              href="a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Ir para repositório</Button>
            </a>
          </Links>
        </Cards>
        <Cards>
          <ProjectTitle>Projeto-5</ProjectTitle>
          <Img src={Construcao} alt="projeto 5" />
          <Links>
            <a 
              href="a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Projeto-5</Button>
            </a>
            <a 
              href="a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Ir para repositório</Button>
            </a>
          </Links>
        </Cards>
        <Cards>
          <ProjectTitle>Projeto-6</ProjectTitle>
          <Img src={Construcao} alt="projeto 6" />
          <Links>
            <a 
              href="a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Projeto-6</Button>
            </a>
            <a 
              href="a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Ir para repositório</Button>
            </a>
          </Links>
        </Cards>
      </SectionCards>
    </main>
  );
}

export default Projects;