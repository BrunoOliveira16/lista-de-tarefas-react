import { useState, useEffect, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { S } from './styles'
import { remove, edit, changeStats } from '../../store/reducers/tasks'
import ClassTask from '../../models/Task'
import { Button, SaveButton } from '../../styles'
import * as enums from '../../utils/enums/Task'

type Props = ClassTask

const Task = ({
  description: descriptionOriginal,
  priority,
  stats,
  title,
  id
}: Props) => {
  const [isEditing, setIsEditing] = useState(false)
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    if (descriptionOriginal.length > 0) {
      setDescription(descriptionOriginal)
    }
  }, [descriptionOriginal])

  function editingCancel() {
    setIsEditing(false)
    setDescription(descriptionOriginal)
  }

  function changeTaskStats(event: ChangeEvent<HTMLInputElement>) {
    dispatch(
      changeStats({
        id,
        finish: event.target.checked
      })
    )
  }

  return (
    <S.Card>
      <label htmlFor={title}>
        <input
          type="checkbox"
          id={title}
          checked={stats === enums.Stats.CONCLUIDA}
          onChange={changeTaskStats}
        />
        <S.Title>
          {isEditing && <em>Editando: </em>}
          {title}
        </S.Title>
      </label>
      <S.Tag parameter="priority" priority={priority}>
        {priority}
      </S.Tag>
      <S.Tag parameter="stats" stats={stats}>
        {stats}
      </S.Tag>
      <S.Description
        disabled={!isEditing}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <S.ActionBar>
        {isEditing ? (
          <>
            <SaveButton
              onClick={() => {
                dispatch(
                  edit({
                    description,
                    priority,
                    stats,
                    title,
                    id
                  })
                )
                setIsEditing(false)
              }}
            >
              Salvar
            </SaveButton>
            <S.CancelButton onClick={editingCancel}>Cancelar</S.CancelButton>
          </>
        ) : (
          <>
            <Button onClick={() => setIsEditing(true)}>Editar</Button>
            <S.RemoveButton onClick={() => dispatch(remove(id))}>
              Remover
            </S.RemoveButton>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Task
