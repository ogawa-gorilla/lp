'use client'
import { useEffect, useMemo, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../hooks'
import {
    ContactMethod,
    Subject,
    updateMailformState,
} from '../store/mailformSlice'
import { RootState } from '../store/store'
import InlineInputField from './components/InlineInputField'
import RequiredMark from './components/RequiredMark'
import './style.css'

export default function MailFormPage() {
    const mailform = useSelector((state: RootState) => state.mailform)
    const dispatch = useAppDispatch()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitMessage, setSubmitMessage] = useState('')
    const [privacyPolicy, setPrivacyPolicy] = useState(false)

    const showContactMethod = useMemo(
        () => mailform.preferredContactMethod === ContactMethod.PHONE,
        [mailform.preferredContactMethod]
    )

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateMailformState({ [e.target.name]: e.target.value }))
    }

    useEffect(() => {
        const subject = new URLSearchParams(window.location.search).get(
            'subject'
        )
        console.log(subject)
        if (subject) {
            dispatch(updateMailformState({ subject: subject }))
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
            const response = await fetch('/api/send-mail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(mailform),
            })

            const result = await response.json()

            if (result.success) {
                // ページの一番上にスクロール
                window.scrollTo(0, 0)

                setSubmitMessage(
                    'お問い合わせを送信しました。ありがとうございます。'
                )
                // フォームをリセット
                dispatch(
                    updateMailformState({
                        fullName: '',
                        industry: '',
                        companyName: '',
                        phoneNumber: '',
                        mailAddress: '',
                        message: '',
                        preferredContactMethod: ContactMethod.MAIL,
                        availableTime: '',
                    })
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
            <h1>ちいさなIT屋さん ご相談フォーム</h1>
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
                <InlineInputField
                    label="お名前"
                    name="full_name"
                    required={true}
                    value={mailform.fullName}
                    onChange={(e) =>
                        dispatch(
                            updateMailformState({ fullName: e.target.value })
                        )
                    }
                    placeholder="例：山田太郎"
                />
                <InlineInputField
                    label="業種(任意)"
                    name="industry"
                    required={false}
                    value={mailform.industry}
                    onChange={(e) =>
                        dispatch(
                            updateMailformState({ industry: e.target.value })
                        )
                    }
                    placeholder="例：商店"
                />

                <InlineInputField
                    label="会社名(任意)"
                    name="company"
                    required={false}
                    value={mailform.companyName}
                    onChange={(e) =>
                        dispatch(
                            updateMailformState({ companyName: e.target.value })
                        )
                    }
                />

                <InlineInputField
                    label="電話番号(ハイフンなし,任意)"
                    name="phone"
                    required={false}
                    value={mailform.phoneNumber}
                    onChange={(e) =>
                        dispatch(
                            updateMailformState({ phoneNumber: e.target.value })
                        )
                    }
                    numeric
                />

                <InlineInputField
                    label="メールアドレス"
                    name="email"
                    required={true}
                    value={mailform.mailAddress}
                    onChange={(e) =>
                        dispatch(
                            updateMailformState({ mailAddress: e.target.value })
                        )
                    }
                />

                <label htmlFor="subject">お問い合わせ内容</label>
                <select
                    id="subject"
                    name="subject"
                    required
                    onChange={(e) =>
                        dispatch(
                            updateMailformState({ subject: e.target.value })
                        )
                    }
                    value={mailform.subject}
                >
                    <option value={Subject.INQUIRY}>無料相談を希望</option>
                    <option value={Subject.MONITOR_CAMPAIGN}>
                        モニターキャンペーン
                    </option>
                    <option value={Subject.OTHER}>その他</option>
                </select>

                <label htmlFor="message">
                    お問い合わせ内容詳細 <RequiredMark />
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="どのようなお仕事をしていて、どのような場面でお困りごとがあるのか、できるだけ詳しくお願いします"
                    value={mailform.message}
                    onChange={(e) =>
                        dispatch(
                            updateMailformState({ message: e.target.value })
                        )
                    }
                ></textarea>

                <div className="form-check">
                    <input
                        type="checkbox"
                        name="privacy_policy"
                        className="form-check-input"
                        required
                        checked={privacyPolicy}
                        onChange={(e) => setPrivacyPolicy(e.target.checked)}
                    />
                    <label
                        className="form-check-label"
                        htmlFor="privacy_policy"
                    >
                        プライバシーポリシーに同意する <RequiredMark />
                    </label>
                </div>

                {/* 
                <label htmlFor="contact_method">
                    ご希望の連絡方法 <RequiredMark />
                </label>
                <select
                    id="contact_method"
                    name="contact_method"
                    required
                    onChange={(e) =>
                        dispatch(
                            updateState({
                                preferredContactMethod: e.target.value,
                            })
                        )
                    }
                >
                    <option value={ContactMethod.UNSELECTED}>
                        選択してください
                    </option>
                    <option value={ContactMethod.MAIL}>メール</option>
                    <option value={ContactMethod.PHONE}>電話</option>
                </select>
*/}

                <>
                    <InlineInputField
                        label="ご希望の連絡時間"
                        name="available_time"
                        required={true}
                        value={mailform.availableTime}
                        onChange={(e) =>
                            dispatch(
                                updateMailformState({
                                    availableTime: e.target.value,
                                })
                            )
                        }
                        placeholder="例：平日10時〜17時"
                    />
                </>
                <button
                    type="submit"
                    className="submit-button"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? '送信中...' : '送信する'}
                </button>
            </form>
        </Container>
    )
}
