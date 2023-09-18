import { useSelector } from 'react-redux'
import Task from '../../components/Task'
import { S } from './styles'
import { RootReducer } from '../../store'

const TasksList = () => {
  const { tasks } = useSelector((state: RootReducer) => state)

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
              stats={t.stats}
            />
          </li>
        ))}
      </ul>
    </S.Container>
  )
}

export default TasksList
