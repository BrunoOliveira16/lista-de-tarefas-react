import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../utils/enums/Task'

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [
    new Task(
      'Estudar React',
      enums.Priority.IMPORTANTE,
      enums.Stats.PENDENTE,
      'concluir curso engenheiro front-end da EBAC',
      1
    ),
    new Task(
      'Estudar Typescript',
      enums.Priority.URGENTE,
      enums.Stats.CONCLUIDA,
      'concluir curso engenheiro front-end da EBAC',
      2
    ),
    new Task(
      'Estudar JavaScript',
      enums.Priority.NORMAL,
      enums.Stats.PENDENTE,
      'concluir curso JS da Udemy',
      3
    )
  ],
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state = state.filter((task) => task.id !== action.payload)
    }
  }
})

export const { remove } = taskSlice.actions

export default taskSlice.reducer
