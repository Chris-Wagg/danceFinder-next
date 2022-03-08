import { createSlice } from '@reduxjs/toolkit'

export const tabSlice = createSlice({
	name: 'tabCounter',
	initialState: {
		tabNum: 0,
	},
	reducers: {
		setLeftTabNum: (state) => {
			state.tabNum = action.payload
		},
	},
})

// Action creators are generated for each case reducer function
export const { setLeftTabNum } = counterSlice.actions

export default counterSlice.reducer
