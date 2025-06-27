import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const ContactMethod = {
    MAIL: 'MAIL',
    PHONE: 'PHONE',
    UNSELECTED: 'UNSELECTED',
}

export interface MailFormState {
    fullName: string
    industry: string
    companyName: string
    phoneNumber: string
    mailAddress: string
    message: string
    preferredContactMethod: string
    availableTime: string
}

const initialState: MailFormState = {
    fullName: '',
    industry: '',
    companyName: '',
    phoneNumber: '',
    mailAddress: '',
    message: '',
    preferredContactMethod: ContactMethod.MAIL,
    availableTime: '',
}

export const mailformSlice = createSlice({
    name: 'mailform',
    initialState: initialState,
    reducers: {
        updateState: (state, action: PayloadAction<Partial<MailFormState>>) => {
            return { ...state, ...action.payload }
        },
    },
})

export const { updateState } = mailformSlice.actions
