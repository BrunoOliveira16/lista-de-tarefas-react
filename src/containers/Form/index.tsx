import { MainContainer, Title, Field, SaveButton } from '../../styles'
import { S } from './styles'

const Form = () => (
  <MainContainer>
    <Title>Nova Tarefa</Title>
    <S.Form>
      <Field type="text" placeholder="Título" />
      <Field as="textarea" placeholder="Descrição da tarefa" />
      <S.Options>
        <p>Prioridade</p>
        <input type="radio" id="urgente" name="prioridade" />{' '}
        <label htmlFor="urgente">Urgente</label>
        <input type="radio" id="importante" name="prioridade" />{' '}
        <label htmlFor="importante">Importante</label>
        <input type="radio" id="normal" name="prioridade" />{' '}
        <label htmlFor="normal">Normal</label>
      </S.Options>
      <SaveButton type="submit">Cadastrar</SaveButton>
    </S.Form>
  </MainContainer>
)

export default Form
