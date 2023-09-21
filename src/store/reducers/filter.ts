import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Task'

type FilterState = {
  term?: string
  criterion: 'prioridade' | 'status' | 'todos'
  value?: enums.Priority | enums.Stats
}

const initialState: FilterState = {
  term: '',
  criterion: 'todos'
}

const FilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    },
    changeFilter: (state, action: PayloadAction<FilterState>) => {
      state.criterion = action.payload.criterion
      state.value = action.payload.value
    }
  }
})

export const { changeTerm, changeFilter } = FilterSlice.actions
export default FilterSlice.reducer
