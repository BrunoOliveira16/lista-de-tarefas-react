import styled from 'styled-components'
import variables from '../../styles/variables'
import * as enums from '../../utils/enums/Task'
import { Button } from '../../styles'

type TagProps = {
  priority?: enums.Priority
  stats?: enums.Stats
  parameter: 'stats' | 'priority'
}

function returnBackgroundColor(props: TagProps): string {
  if (props.parameter === 'priority') {
    if (props.priority === enums.Priority.URGENTE) return variables.red
    if (props.priority === enums.Priority.IMPORTANTE) return variables.yellow2
  } else {
    if (props.stats === enums.Stats.PENDENTE) return variables.yellow
    if (props.stats === enums.Stats.CONCLUIDA) return variables.green
  }

  return variables.gray
}

const Card = styled.div`
  background-color: ${variables.white2};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`

const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: ${variables.white};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => returnBackgroundColor(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`

const Description = styled.textarea`
  color: ${variables.gray2};
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-top: 16px;
  margin-bottom: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

const ActionBar = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const S = {
  Card,
  Title,
  Tag,
  Description,
  ActionBar,
  CancelButton: styled(Button)`
    background-color: ${variables.red};
  `,
  RemoveButton: styled(Button)`
    background-color: ${variables.red};
  `
}
