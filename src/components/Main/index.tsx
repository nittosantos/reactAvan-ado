import * as S from './styles'

const Main: React.FC = () => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="Logo do Curso React Avançado" />
    <S.Title>React Avançado</S.Title>
    <S.Description>
      Typescript, ReactJs, Next.Js e Styled Components
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Dev em frente a telas com códigos"
    />
  </S.Wrapper>
)

export default Main
