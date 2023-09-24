import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootReducer } from '../../store'
import { changeTerm } from '../../store/reducers/filter'
import FilterCard from '../../components/FilterCard'
import * as enums from '../../utils/enums/Task'
import { S } from './styles'
import { Button, Field } from '../../styles'

type Props = {
  showFilters: boolean
}

const SideBar = ({ showFilters }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        {showFilters ? (
          <>
            <Field
              type="text"
              placeholder="Buscar"
              value={term}
              onChange={(e) => dispatch(changeTerm(e.target.value))}
            />
            <S.Filters>
              <FilterCard
                value={enums.Stats.PENDENTE}
                criterion="status"
                label="Pendentes"
              />
              <FilterCard
                value={enums.Stats.CONCLUIDA}
                criterion="status"
                label="Concluidas"
              />
              <FilterCard
                value={enums.Priority.URGENTE}
                criterion="prioridade"
                label="Urgentes"
              />
              <FilterCard
                value={enums.Priority.IMPORTANTE}
                criterion="prioridade"
                label="Importantes"
              />
              <FilterCard
                value={enums.Priority.NORMAL}
                criterion="prioridade"
                label="Normal"
              />
              <FilterCard criterion="todos" label="Todas" />
            </S.Filters>
          </>
        ) : (
          <Button type="button" onClick={() => navigate('/')}>
            Voltar para lista de tarefas
          </Button>
        )}
      </div>
    </S.Aside>
  )
}

export default SideBar
