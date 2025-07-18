'use client'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import {
    Device,
    updateInterviewSheetState,
} from '@/app/store/interviewSheetSlice'
import { RootState } from '@/app/store/store'
import { useEffect, useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import InlineInputField from '../components/InlineInputField'
import RequiredMark from '../components/RequiredMark'
import '../style.css'

export default function InterviewSheetPage() {
    const interviewSheet = useAppSelector(
        (state: RootState) => state.interviewSheet
    )
    const dispatch = useAppDispatch()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitMessage, setSubmitMessage] = useState('')
    const [privacyPolicy, setPrivacyPolicy] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateInterviewSheetState({ [e.target.name]: e.target.value }))
    }

    useEffect(() => {
        const customerId = new URLSearchParams(window.location.search).get(
            'customer_id'
        )
        if (customerId) {
            dispatch(updateInterviewSheetState({ customerId: customerId }))
        }
    }, [])

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // プライバシーポリシーの同意チェック
        if (!privacyPolicy) {
            setSubmitMessage('プライバシーポリシーに同意してください。')
            return
        }

        setIsSubmitting(true)
        setSubmitMessage('')

        try {
            const response = await fetch('/api/send-interview-sheet', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(interviewSheet),
            })

            const result = await response.json()

            if (result.success) {
                // ページの一番上にスクロール
                window.scrollTo(0, 0)

                setSubmitMessage(
                    'お問い合わせを送信しました。ありがとうございます。\nこの画面を閉じてください。'
                )
            } else {
                setSubmitMessage('送信に失敗しました。もう一度お試しください。')
            }
        } catch (error) {
            console.error('送信エラー:', error)
            setSubmitMessage('送信に失敗しました。もう一度お試しください。')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Container>
            <h1>ちいさなIT屋さん 問診票</h1>
            {interviewSheet.customerId === '' ? (
                <div>顧客IDが不正です。</div>
            ) : (
                <div>
                    {submitMessage && (
                        <div
                            className={`alert ${
                                submitMessage.includes('送信しました')
                                    ? 'alert-success'
                                    : 'alert-danger'
                            }`}
                        >
                            {submitMessage}
                        </div>
                    )}
                    <form onSubmit={onSubmit}>
                        <Form.Text>
                            以下は、当日のヒアリングをスムーズに進めるための質問です。
                            <br />
                            「わかるだけ」で構いませんので、詳しくご回答ください。
                        </Form.Text>
                        <InlineInputField
                            label="ご依頼者様のお名前（または会社名）"
                            name="customer_name"
                            required={true}
                            value={interviewSheet.customerName}
                            onChange={(e) =>
                                dispatch(
                                    updateInterviewSheetState({
                                        customerName: e.target.value,
                                    })
                                )
                            }
                            placeholder="例：山田太郎"
                        />
                        {interviewSheet.answers.map((answer, index) => {
                            return (
                                <div key={answer.id}>
                                    <label htmlFor={answer.id.toString()}>{`${
                                        index + 1
                                    }. ${answer.question}`}</label>
                                    <textarea
                                        id={answer.id.toString()}
                                        name={answer.id.toString()}
                                        placeholder={answer.placeholder}
                                        value={answer.answer}
                                        onChange={(e) =>
                                            dispatch(
                                                updateInterviewSheetState({
                                                    answers:
                                                        interviewSheet.answers.map(
                                                            (a) =>
                                                                a.id ===
                                                                answer.id
                                                                    ? {
                                                                          ...a,
                                                                          answer: e
                                                                              .target
                                                                              .value,
                                                                      }
                                                                    : a
                                                        ),
                                                })
                                            )
                                        }
                                    />
                                </div>
                            )
                        })}

                        <label htmlFor="device">
                            システムはどのような機種でお使いいただく予定ですか？
                        </label>
                        <select
                            id="device"
                            name="device"
                            required
                            onChange={(e) =>
                                dispatch(
                                    updateInterviewSheetState({
                                        device: e.target.value,
                                    })
                                )
                            }
                            value={interviewSheet.device}
                        >
                            <option value={Device.PC}>PC</option>
                            <option value={Device.SMARTPHONE}>
                                スマホ・両方
                            </option>
                        </select>

                        {interviewSheet.device === Device.SMARTPHONE && (
                            <div
                                className={`alert m-3 ${
                                    submitMessage.includes('送信しました')
                                        ? 'alert-success'
                                        : 'alert-danger'
                                }`}
                            >
                                注：スマホに対応すると開発コストが上がります。
                                <br />
                                「使うかわからないけど、とりあえずスマホ対応」はおすすめしていません。
                                <br />
                                「スマホで使う可能性がある」場合のみ選択してください。
                            </div>
                        )}

                        <div className="form-check">
                            <input
                                type="checkbox"
                                name="privacy_policy"
                                className="form-check-input"
                                required
                                checked={privacyPolicy}
                                onChange={(e) =>
                                    setPrivacyPolicy(e.target.checked)
                                }
                            />
                            <label
                                className="form-check-label"
                                htmlFor="privacy_policy"
                            >
                                プライバシーポリシーに同意する <RequiredMark />
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="submit-button"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? '送信中...' : '送信する'}
                        </button>
                    </form>
                </div>
            )}
        </Container>
    )
}
