import { S } from './styles'

export type Props = {
  active?: boolean
}

const FilterCard = (props: Props) => (
  <S.Card active={props.active}>
    <S.Counter>2</S.Counter>
    <S.Label>pendentes</S.Label>
  </S.Card>
)

export default FilterCard
