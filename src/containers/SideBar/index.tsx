import FilterCard from '../../components/FilterCard'
import { S } from './styles'

const SideBar = () => {
  return (
    <S.Aside>
      <div>
        <S.Field type="text" placeholder="Buscar" />
        <S.Filters>
          <FilterCard />
          <FilterCard />
          <FilterCard />
          <FilterCard />
          <FilterCard />
          <FilterCard active />
        </S.Filters>
      </div>
    </S.Aside>
  )
}

export default SideBar
