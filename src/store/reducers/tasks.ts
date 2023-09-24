import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../utils/enums/Task'

type TasksState = {
  items: Task[]
}

const initialState: TasksState = {
  items: [
    {
      id: 1,
      title: 'Estudar React',
      description: 'concluir curso engenheiro front-end da EBAC',
      priority: enums.Priority.IMPORTANTE,
      stats: enums.Stats.PENDENTE
    },
    {
      id: 2,
      title: 'Estudar Typescript',
      description: 'concluir curso engenheiro front-end da EBAC',
      priority: enums.Priority.URGENTE,
      stats: enums.Stats.CONCLUIDA
    },
    {
      id: 3,
      title: 'Estudar JavaScript',
      description: 'concluir curso JS da Udemy',
      priority: enums.Priority.NORMAL,
      stats: enums.Stats.PENDENTE
    }
  ]
}

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.items = [
        ...state.items.filter((task) => task.id !== action.payload)
      ]
    },
    edit: (state, action: PayloadAction<Task>) => {
      const indexToTask = state.items.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexToTask >= 0) {
        state.items[indexToTask] = action.payload
      }
    },
    register: (state, action: PayloadAction<Task>) => {
      const isRegisterTask = state.items.find(
        (task) =>
          task.title.toLowerCase() === action.payload.title.toLowerCase()
      )

      if (isRegisterTask) {
        alert('Já existe uma tarefa com esse nome')
      } else {
        state.items.push(action.payload)
      }
    },
    changeStats: (
      state,
      action: PayloadAction<{ id: number; finish: boolean }>
    ) => {
      const indexToTask = state.items.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexToTask >= 0) {
        state.items[indexToTask].stats = action.payload.finish
          ? enums.Stats.CONCLUIDA
          : enums.Stats.PENDENTE
      }
    }
  }
})

export const { remove, edit, register, changeStats } = taskSlice.actions

export default taskSlice.reducer
