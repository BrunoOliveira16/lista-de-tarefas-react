import Task from '../../components/Task'
import { S } from './styles'
import * as enums from '../../utils/enums/Task'

const tasks = [
  {
    title: 'Estudar React',
    description: 'Concluir curso React com Redux',
    priority: enums.Priority.IMPORTANTE,
    status: enums.Stats.CONCLUIDA
  },
  {
    title: 'Estudar Typescript',
    description: 'Concluir projeto Todo list React + Typescript',
    priority: enums.Priority.NORMAL,
    status: enums.Stats.CONCLUIDA
  },
  {
    title: 'Estudar Java',
    description: 'Concluir curso Bootcamp Java',
    priority: enums.Priority.IMPORTANTE,
    status: enums.Stats.PENDENTE
  },
  {
    title: 'Estudar styled-components',
    description: 'Concluir projeto IMC Front-end Mentor',
    priority: enums.Priority.URGENTE,
    status: enums.Stats.PENDENTE
  }
]

const TasksList = () => {
  return (
    <S.Container>
      <p>2 tarefas marcadas como: &quot;Categoria&quot; e &quot;Termo&quot;</p>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            <Task
              title={t.title}
              description={t.description}
              priority={t.priority}
              stats={t.status}
            />
          </li>
        ))}
      </ul>
    </S.Container>
  )
}

export default TasksList
