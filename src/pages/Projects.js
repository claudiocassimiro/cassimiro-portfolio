import Header from "../components/Header";
import { SectionTitle, SectionCards, Cards } from "./styles/Projects";

function Projects() {
  return (
    <main>
      <Header />
      <SectionTitle>
        <h1>Projects</h1>
      </SectionTitle>
      <SectionCards>
        <Cards>
          <span>Projeto-1</span>
        </Cards>
        <Cards>
          <span>Projeto-2</span>
        </Cards>
        <Cards>
          <span>Projeto-3</span>
        </Cards>
        <Cards>
          <span>Projeto-4</span>
        </Cards>
        <Cards>
          <span>Projeto-5</span>
        </Cards>
        <Cards>
          <span>Projeto-6</span>
        </Cards>
      </SectionCards>
    </main>
  );
}

export default Projects;