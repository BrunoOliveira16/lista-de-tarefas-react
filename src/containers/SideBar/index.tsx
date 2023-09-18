import FilterCard from '../../components/FilterCard'
import { S } from './styles'

const SideBar = () => {
  return (
    <S.Aside>
      <div>
        <S.Field type="text" placeholder="Buscar" />
        <S.Filters>
          <FilterCard label="Pendentes" counter={1} />
          <FilterCard label="Concluidas" counter={2} />
          <FilterCard label="Urgentes" counter={3} />
          <FilterCard label="Importantes" counter={4} />
          <FilterCard label="Normal" counter={5} />
          <FilterCard active label="Todas" counter={15} />
        </S.Filters>
      </div>
    </S.Aside>
  )
}

export default SideBar
