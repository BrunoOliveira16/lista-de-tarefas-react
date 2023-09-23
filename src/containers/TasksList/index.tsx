import { useSelector } from 'react-redux'
import Task from '../../components/Task'
import { MainContainer, Title } from '../../styles'
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

      if (criterion === 'prioridade') {
        tasksFilter = tasksFilter.filter((item) => item.priority === value)
      } else if (criterion === 'status') {
        tasksFilter = tasksFilter.filter((item) => item.stats === value)
      }

      return tasksFilter
    } else {
      return items
    }
  }

  const showFilteredResult = (amount: number) => {
    let message = ''
    const complement =
      term !== undefined && term.length > 0 ? `e "${term}"` : ''

    if (criterion === 'todos') {
      message = `${amount} tarefa(s) encontrada(s) como: todas ${complement}`
    } else {
      message = `${amount} tarefa(s) encontrada(s) como: "${`${criterion} = ${value}`}" ${complement}`
    }

    return message
  }

  const tasks = filterTasks()
  const messages = showFilteredResult(tasks.length)

  return (
    <MainContainer>
      <Title as="p">{messages}</Title>
      <ul>
        {tasks.map((t, index) => (
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
    </MainContainer>
  )
}

export default TasksList
