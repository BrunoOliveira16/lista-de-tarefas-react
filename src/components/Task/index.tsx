import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { S } from './styles'
import { remove, edit } from '../../store/reducers/tasks'
import ClassTask from '../../models/Task'

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

  return (
    <S.Card>
      <S.Title>{title}</S.Title>
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
            <S.SaveButton
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
            </S.SaveButton>
            <S.CancelButton onClick={editingCancel}>Cancelar</S.CancelButton>
          </>
        ) : (
          <>
            <S.Button onClick={() => setIsEditing(true)}>Editar</S.Button>
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
