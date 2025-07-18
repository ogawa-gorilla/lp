// TODO: コピペが許されるのは今だけ！　ちゃんとシステム化する！

import { Answer } from '@/app/store/interviewSheetSlice'
import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { customerId, customerName, answers, device } = body

        // 環境変数のチェック
        if (
            !process.env.EMAIL_USER ||
            !process.env.EMAIL_PASS ||
            !process.env.ADMIN_EMAIL
        ) {
            throw new Error('メール送信の設定が不完全です')
        }

        // メール送信の設定
        const transporter = nodemailer.createTransport({
            // Gmailの場合
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        })

        // メール本文の作成
        const mailBody = `
問診票

【お客様ID】${customerId}
【お名前】${customerName}
【質問回答】
${answers
    .map((answer: Answer) => `■${answer.question}\n${answer.answer}`)
    .join('\n\n')}
【システム】${device}

        `.trim()

        // メール送信
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.ADMIN_EMAIL, // 管理者のメールアドレス
            subject: `問診票${customerName}様より ID=${customerId}`,
            text: mailBody,
        })

        return NextResponse.json({
            success: true,
            message: 'メールを送信しました',
        })
    } catch (error) {
        console.error('メール送信エラー:', error)
        return NextResponse.json(
            { success: false, message: 'メール送信に失敗しました' },
            { status: 500 }
        )
    }
}
