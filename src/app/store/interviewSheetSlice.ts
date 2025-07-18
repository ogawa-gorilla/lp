'use client'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const Device = {
    PC: 'PC',
    SMARTPHONE: 'SMARTPHONE',
}

export interface Answer {
    id: number
    question: string
    placeholder: string
    answer: string
}

export interface InterviewSheetState {
    customerId: string
    customerName: string
    answers: Answer[]
    device: string
}

const initialState: InterviewSheetState = {
    customerId: '',
    customerName: '',
    answers: [
        {
            id: 0,
            question:
                '現在の「日ごと」の業務の流れを簡単に教えてください（仕入れ→販売→顧客対応、など）。いくつかのパターンがある場合は、思いつく限りそれぞれ教えてください。',
            placeholder: '例：仕入れ→販売→顧客対応　予約受付→在庫確認→顧客対応',
            answer: '',
        },
        {
            id: 1,
            question:
                '現在の「月・週ごと」に発生する業務を簡単に教えてください（売り上げ集計、日報確認、請求書の発行など）。',
            placeholder: '例：売り上げ集計、日報確認、請求書の発行',
            answer: '',
        },
        {
            id: 2,
            question: '上であげた中で、大変な業務はどれですか。',
            placeholder: '例：在庫確認、売り上げ集計',
            answer: '',
        },
        {
            id: 3,
            question: 'その業務が大変な理由は何ですか。',
            placeholder:
                '例：倉庫が遠隔地にあるため、在庫確認のとき、在庫の状況を確認するのに電話が必要で手間がかかる。売り上げ集計のとき、一か月分の帳票をすべて手作業で確認して集計するため、時間がかかる。',
            answer: '',
        },
        {
            id: 4,
            question:
                '現在、どのような帳票や記録を使っていますか（例：請求書、売上集計、日報など）。',
            placeholder: '例：請求書、売上集計、日報',
            answer: '',
        },
        {
            id: 5,
            question: 'その記録は、どのように保管／提出／共有されていますか？',
            placeholder:
                '例：請求書は、メールで顧客に送付する。売上集計は、Excelで月ごとにPCに保存する。',
            answer: '',
        },
        {
            id: 6,
            question: 'システムを利用する人数をおおまかに教えてください。',
            placeholder: '例：10人',
            answer: '',
        },
        {
            id: 7,
            question: 'システムを利用したいのはどのような人ですか？',
            placeholder: '例：管理者、店員、事務員',
            answer: '',
        },
        {
            id: 8,
            question:
                'ご予算の目安や、いつまでに導入したいかなど、決まっていることがあれば教えてください。',
            placeholder: '例：5万円、3ヵ月以内',
            answer: '',
        },
        {
            id: 9,
            question: 'その他、ご要望があれば教えてください。',
            placeholder:
                '例：システムを利用したい人が多いので、システムを利用したい人ごとに権限を設定したい。',
            answer: '',
        },
    ],
    device: Device.PC,
}

export const interviewSheetSlice = createSlice({
    name: 'interviewSheet',
    initialState: initialState,
    reducers: {
        updateInterviewSheetState: (
            state,
            action: PayloadAction<Partial<InterviewSheetState>>
        ) => {
            return { ...state, ...action.payload }
        },
    },
})

export const { updateInterviewSheetState } = interviewSheetSlice.actions
