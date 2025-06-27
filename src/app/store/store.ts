import { configureStore } from '@reduxjs/toolkit'
import { mailformSlice } from './mailformSlice'

export const store = configureStore({
    reducer: {
        mailform: mailformSlice.reducer,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
