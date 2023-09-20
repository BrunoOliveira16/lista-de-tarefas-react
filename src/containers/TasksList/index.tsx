import { useSelector } from 'react-redux'
import Task from '../../components/Task'
import { S } from './styles'
import { RootReducer } from '../../store'

const TasksList = () => {
  const { items } = useSelector((state: RootReducer) => state.tasks)
  const { term, criterion, value } = useSelector(
    (state: RootReducer) => state.filter
  )

  const filterTasks = () => {
    let tasksFilter = items
    if (term !== undefined) {
      tasksFilter = tasksFilter.filter(
        (item) => item.title.toLowerCase().search(term.toLocaleLowerCase()) >= 0
      )

      if (criterion === 'priority') {
        tasksFilter = tasksFilter.filter((item) => item.priority === value)
      } else if (criterion === 'stats') {
        tasksFilter = tasksFilter.filter((item) => item.stats === value)
      }

      return tasksFilter
    } else {
      return items
    }
  }

  return (
    <S.Container>
      <p>2 tarefas marcadas como: &quot;Categoria&quot; e &quot;{term}&quot;</p>
      <ul>
        <li>{term}</li>
        <li>{criterion}</li>
        <li>{value}</li>
      </ul>
      <ul>
        {filterTasks().map((t, index) => (
          <li key={index}>
            <Task
              id={t.id}
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
