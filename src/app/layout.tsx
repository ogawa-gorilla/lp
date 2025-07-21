import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Providers } from './store/Providers'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: {
        default: 'ちいさなIT屋さん - 小規模ビジネス向けDX・システム開発',
        template: '%s | ちいさなIT屋さん',
    },
    description:
        '小規模ビジネス向けのDX・システム開発・自動化サービス。業務アプリ開発、システム保守、自動化を小さなビジネスに寄り添うように分かりやすく提供。',
    keywords: [
        'DX',
        'システム開発',
        '業務アプリ',
        '小規模ビジネス',
        '自動化',
        'システム保守',
        'IT屋',
    ],
    authors: [{ name: 'ちいさなIT屋さん' }],
    creator: 'ちいさなIT屋さん',
    publisher: 'ちいさなIT屋さん',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://www.chii-yasan.com'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'ちいさなIT屋さん - 小規模ビジネス向けDX・システム開発',
        description:
            '小規模ビジネス向けのDX・システム開発・自動化サービス。業務アプリ開発、システム保守、自動化を小さなビジネスに寄り添うように分かりやすく提供。',
        url: 'https://www.chii-yasan.com',
        siteName: 'ちいさなIT屋さん',
        locale: 'ja_JP',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'ちいさなIT屋さん - 小規模ビジネス向けDX・システム開発',
        description:
            '小規模ビジネス向けのDX・システム開発・自動化サービス。業務アプリ開発、システム保守、自動化を小さなビジネスに寄り添うように分かりやすく提供。',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'your-google-verification-code', // Google Search Consoleの検証コードを設定
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ja">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
