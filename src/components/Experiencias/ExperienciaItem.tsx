import { ItemContainer } from './styles';

interface ExperienciaProps {
  year: string;
  title: string;
  description: string;
}

export default function ExeperienciaItem({
  year,
  title,
  description
}: ExperienciaProps) {
  return (
    <ItemContainer>
      <div>
        <h1>{year}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </ItemContainer>
  );
}
