import SectionTitle from '../SectionTitle';
import ExeperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <SectionTitle title="02 Anos" description="de experiência" />

      <section>
        <ExeperienciaItem
          year="2019"
          title="Dev Front-End"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        />
        <ExeperienciaItem
          year="2019"
          title="Dev Front-End"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        />
        <ExeperienciaItem
          year="2019"
          title="Dev Front-End"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        />
        <ExeperienciaItem
          year="2019"
          title="Dev Front-End"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        />
      </section>
    </Container>
  );
}

export default Experiencias;
