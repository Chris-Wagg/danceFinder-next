import { configureStore } from '@reduxjs/toolkit'

import tabNumReducer from './tabNum'

export const store = configureStore({
	reducer: {
		tabNum: tabNumReducer, // left side is the name key from the slice object
	},
})
