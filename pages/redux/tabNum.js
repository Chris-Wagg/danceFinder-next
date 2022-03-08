import { createSlice } from '@reduxjs/toolkit'

export const tabSlice = createSlice({
	name: 'tabCounter',
	initialState: {
		tabNum: 0,
	},
	reducers: {
		//actions
		setLeftTabNum: (state, action) => {
			state.tabNum = action.payload
		},
	},
})

// Action creators are generated for each case reducer function
export const { setLeftTabNum } = tabSlice.actions

export default tabSlice.reducer
