import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const {
            fullName,
            industry,
            companyName,
            phoneNumber,
            mailAddress,
            message,
            preferredContactMethod,
            availableTime,
        } = body

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

            // Outlook/Hotmailの場合
            // service: 'outlook',
            // auth: {
            //     user: process.env.EMAIL_USER,
            //     pass: process.env.EMAIL_PASS
            // }

            // Yahoo Mailの場合
            // service: 'yahoo',
            // auth: {
            //     user: process.env.EMAIL_USER,
            //     pass: process.env.EMAIL_PASS
            // }

            // カスタムSMTPサーバーの場合
            // host: 'smtp.your-domain.com',
            // port: 587,
            // secure: false, // true for 465, false for other ports
            // auth: {
            //     user: process.env.EMAIL_USER,
            //     pass: process.env.EMAIL_PASS
            // }
        })

        // メール本文の作成
        const mailBody = `
お問い合わせフォームからの送信

【お名前】${fullName}
【業種】${industry}
【会社名】${companyName || '未入力'}
【電話番号】${phoneNumber || '未入力'}
【メールアドレス】${mailAddress}
【お問い合わせ内容】
${message}
【ご希望の連絡方法】${preferredContactMethod === 'MAIL' ? 'メール' : '電話'}
${`【ご希望の連絡時間】${availableTime}`}
        `.trim()

        // メール送信
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.ADMIN_EMAIL, // 管理者のメールアドレス
            subject: `【お問い合わせ】${fullName}様より`,
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
