import Task from '../../components/Task'
import { S } from './styles'

const TasksList = () => {
  return (
    <S.Container>
      <p>2 tarefas marcadas como: &quot;Categoria&quot; e &quot;Termo&quot;</p>
      <ul>
        <li>
          <Task />
        </li>
        <li>
          <Task />
        </li>
        <li>
          <Task />
        </li>
        <li>
          <Task />
        </li>
      </ul>
    </S.Container>
  )
}

export default TasksList
