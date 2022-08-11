/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/Logo.png';

export function HomeHero() {
  return (
    <Container>
      <img src={picture} alt="Minha foto" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Felipe Holanda</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem>
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Nome: <span className="blue">Felipe,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Holanda</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem>
            <span className="purple">Atuação</span> {'\u007B'}
            <div>
              Área de Trabalho:{' '}
              <span className="blue">Progamador Full-Stack,</span>
            </div>
            <div>
              Cargo: <span className="blue">Desenvolvedor Junior</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}
