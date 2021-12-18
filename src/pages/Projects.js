import Header from "../components/Header";
import { SectionTitle, SectionCards, Cards, Img, ProjectTitle, Button } from "./styles/Projects";
import Construcao from "../img/construcao.png";

function Projects() {
  return (
    <main>
      <Header />
      <SectionTitle>
        <h1>Projetos</h1>
      </SectionTitle>
      <SectionCards>
        <Cards>
          <ProjectTitle>Projeto-1</ProjectTitle>
          <Img src={Construcao} alt="projeto 1" />
          <Button>Ir para projeto</Button>
        </Cards>
        <Cards>
          <ProjectTitle>Projeto-2</ProjectTitle>
          <Img src={Construcao} alt="projeto 2" />
          <Button>Ir para projeto</Button>
        </Cards>
        <Cards>
          <ProjectTitle>Projeto-3</ProjectTitle>
          <Img src={Construcao} alt="projeto 3" />
          <Button>Ir para projeto</Button>
        </Cards>
        <Cards>
          <ProjectTitle>Projeto-4</ProjectTitle>
          <Img src={Construcao} alt="projeto 4" />
          <Button>Ir para projeto</Button>
        </Cards>
        <Cards>
          <ProjectTitle>Projeto-5</ProjectTitle>
          <Img src={Construcao} alt="projeto 5" />
          <Button>Ir para projeto</Button>
        </Cards>
        <Cards>
          <ProjectTitle>Projeto-6</ProjectTitle>
          <Img src={Construcao} alt="projeto 6" />
          <Button>Ir para projeto</Button>
        </Cards>
      </SectionCards>
    </main>
  );
}

export default Projects;