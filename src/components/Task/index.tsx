import { useState } from 'react'
import { S } from './styles'
import * as enums from '../../utils/enums/Task'

type Props = {
  title: string
  priority: enums.Priority
  stats: enums.Stats
  description: string
}

const Task = ({ description, priority, stats, title }: Props) => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Tag parameter="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag parameter="stats" stats={stats}>
        {stats}
      </S.Tag>
      <S.Description value={description} />
      <S.ActionBar>
        {isEditing ? (
          <>
            <S.SaveButton>Salvar</S.SaveButton>
            <S.CancelButton onClick={() => setIsEditing(false)}>
              Cancelar
            </S.CancelButton>
          </>
        ) : (
          <>
            <S.Button onClick={() => setIsEditing(true)}>Editar</S.Button>
            <S.RemoveButton>Excluir</S.RemoveButton>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Task
