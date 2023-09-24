import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { MainContainer, Title, Field, SaveButton } from '../../styles'
import { S } from './styles'
import * as enums from '../../utils/enums/Task'
import { register } from '../../store/reducers/tasks'

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState(enums.Priority.NORMAL)

  const registerTask = (e: FormEvent) => {
    e.preventDefault()

    dispatch(
      register({
        title,
        priority,
        description,
        stats: enums.Stats.PENDENTE
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Title>Nova Tarefa</Title>
      <S.Form onSubmit={registerTask}>
        <Field
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Título"
        />
        <Field
          value={description}
          onChange={({ target }) => setDescription(target.value)}
          as="textarea"
          placeholder="Descrição da tarefa"
        />
        <S.Options>
          {Object.values(enums.Priority).map((priority) => (
            <S.Option key={priority}>
              <input
                value={priority}
                onChange={(e) => setPriority(e.target.value as enums.Priority)}
                type="radio"
                id="prioridade"
                name={priority}
                title={priority}
                defaultChecked={priority === enums.Priority.NORMAL}
              />
              <label htmlFor={priority}>{priority}</label>
            </S.Option>
          ))}
        </S.Options>
        <SaveButton type="submit">Cadastrar</SaveButton>
      </S.Form>
    </MainContainer>
  )
}

export default Form
