import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { changeTerm } from '../../store/reducers/filter'
import FilterCard from '../../components/FilterCard'
import * as enums from '../../utils/enums/Task'
import { S } from './styles'

const SideBar = () => {
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        <S.Field
          type="text"
          placeholder="Buscar"
          value={term}
          onChange={(e) => dispatch(changeTerm(e.target.value))}
        />
        <S.Filters>
          <FilterCard
            value={enums.Stats.PENDENTE}
            criterion="stats"
            label="Pendentes"
          />
          <FilterCard
            value={enums.Stats.CONCLUIDA}
            criterion="stats"
            label="Concluidas"
          />
          <FilterCard
            value={enums.Priority.URGENTE}
            criterion="priority"
            label="Urgentes"
          />
          <FilterCard
            value={enums.Priority.IMPORTANTE}
            criterion="priority"
            label="Importantes"
          />
          <FilterCard
            value={enums.Priority.NORMAL}
            criterion="priority"
            label="Normal"
          />
          <FilterCard criterion="all" label="Todas" />
        </S.Filters>
      </div>
    </S.Aside>
  )
}

export default SideBar
