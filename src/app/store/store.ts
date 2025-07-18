import { configureStore } from '@reduxjs/toolkit'
import { interviewSheetSlice } from './interviewSheetSlice'
import { mailformSlice } from './mailformSlice'

export const store = configureStore({
    reducer: {
        mailform: mailformSlice.reducer,
        interviewSheet: interviewSheetSlice.reducer,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
