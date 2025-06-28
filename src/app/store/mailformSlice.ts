'use client'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const ContactMethod = {
    MAIL: 'MAIL',
    PHONE: 'PHONE',
    UNSELECTED: 'UNSELECTED',
}

export const Subject = {
    INQUIRY: 'INQUIRY',
    MONITOR_CAMPAIGN: 'MONITOR_CAMPAIGN',
    OTHER: 'OTHER',
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
    subject: string
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
    subject: Subject.INQUIRY,
}

export const mailformSlice = createSlice({
    name: 'mailform',
    initialState: initialState,
    reducers: {
        updateMailformState: (
            state,
            action: PayloadAction<Partial<MailFormState>>
        ) => {
            return { ...state, ...action.payload }
        },
    },
})

export const { updateMailformState } = mailformSlice.actions
