import { useDispatch, useSelector } from 'react-redux'
import { S } from './styles'
import { changeFilter } from '../../store/reducers/filter'
import * as enums from '../../utils/enums/Task'
import { RootReducer } from '../../store'

export type Props = {
  label: string
  criterion: 'prioridade' | 'status' | 'todos'
  value?: enums.Priority | enums.Stats
}

const FilterCard = ({ label, criterion, value }: Props) => {
  const dispatch = useDispatch()
  const { filter, tasks } = useSelector((state: RootReducer) => state)

  const filtering = () => {
    dispatch(
      changeFilter({
        criterion,
        value
      })
    )
  }

  const checkIsActive = () => {
    const sameCriterion = filter.criterion === criterion
    const sameValue = filter.value === value

    return sameCriterion && sameValue
  }

  const countTasks = () => {
    if (criterion === 'todos') return tasks.items.length
    if (criterion === 'prioridade') {
      return tasks.items.filter((item) => item.priority === value).length
    }
    if (criterion === 'status') {
      return tasks.items.filter((item) => item.stats === value).length
    }
  }

  const active = checkIsActive()
  const counter = countTasks()

  return (
    <S.Card active={active} onClick={filtering}>
      <S.Counter>{counter}</S.Counter>
      <S.Label>{label}</S.Label>
    </S.Card>
  )
}

export default FilterCard
