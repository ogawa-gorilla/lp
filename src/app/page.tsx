import '@/app/common/common.css'
import type { Metadata } from 'next'
import Script from 'next/script'
import { Container } from 'react-bootstrap'
import CampaignBanner from './common/components/CampaignBanner'
import Footer from './common/components/Footer'
import Header from './common/components/Header'
import { LINE_URL, MINIMUM_INITIAL_FEE } from './constants'
import './style.css'

export const metadata: Metadata = {
    title: 'ホーム',
    description:
        '小規模ビジネス向けのDX・システム開発・自動化サービス。業務アプリ開発、システム保守、自動化を小さなビジネスに寄り添うように分かりやすく提供。まずは無料相談から。',
    openGraph: {
        title: 'ちいさなIT屋さん - 小規模ビジネス向けDX・システム開発',
        description:
            '小規模ビジネス向けのDX・システム開発・保守サービス。業務アプリ開発、システム保守、自動化を専門用語を使わずに分かりやすく提供。',
        url: 'https://www.chii-yasan.com',
    },
    alternates: {
        canonical: '/',
    },
}

export default function Home() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'ちいさなIT屋さん',
        description: '小規模ビジネス向けのDX・システム開発・自動化サービス',
        url: 'https://www.chii-yasan.com',
        telephone: '+81-xxx-xxx-xxxx',
        email: 'chii.yasan@gmail.com',
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressLocality: '日本',
        },
        serviceArea: {
            '@type': 'Country',
            name: '日本',
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'ITサービス',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: '業務アプリ開発',
                        description:
                            '小規模ビジネス向けの業務アプリケーション開発',
                    },
                    priceSpecification: {
                        '@type': 'PriceSpecification',
                        price: MINIMUM_INITIAL_FEE,
                        priceCurrency: 'JPY',
                        description: '初期費用',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'DX・自動化',
                        description: 'DX・自動化システムサービス',
                    },
                },
            ],
        },
    }

    return (
        <div className="main-container">
            <Script
                id="structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <CampaignBanner />
            <Container>
                <Header />
                {/* ヒーローセクション */}
                <section
                    className="hero"
                    role="banner"
                    aria-labelledby="hero-heading"
                >
                    <h1 id="hero-heading" className="display-5">
                        業務システムのこと、
                        <br />
                        パソコンのこと、
                        <br />
                        DXのこと。
                    </h1>
                    <p className="lead">
                        わからなくても、
                        <br />
                        私たちが一緒にやります。
                    </p>
                </section>

                {/* ページ1 */}
                <section className="py-5" aria-labelledby="section1-heading">
                    <div className="container">
                        <h2
                            id="section1-heading"
                            className="section-title mb-3"
                        >
                            専門用語は使いません。
                        </h2>
                        <div className="ms-2">
                            <p>
                                お客様が「どうしたいか」を聞かせてください。
                                <br />
                                それに合った形で、自動化の仕組みを整えます。
                            </p>
                            <ul className="list-unstyled mt-4 indented-list">
                                <li>
                                    <span className="icon">🧾</span>
                                    簡単な業務アプリの開発
                                </li>
                                <li>
                                    <span className="icon">🔧</span>
                                    システム保守は全部おまかせ！
                                </li>
                                <li>
                                    <span className="icon">📞</span>
                                    小規模ビジネス向け／圧倒的低単価
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* ページ2 */}
                <section className="bg-light py-5">
                    <div className="container">
                        <h2 className="section-title mb-3">
                            こんなお悩みありませんか？
                        </h2>
                        <div className="ms-2">
                            <ul className="list-unstyled indented-list">
                                <li>
                                    <span className="icon">🧑‍💻</span>
                                    DXとか自動化ってなにから始めればいいの？
                                </li>
                                <li>
                                    <span className="icon">🗃️</span>
                                    エクセルで管理してるけど限界…
                                </li>
                                <li>
                                    <span className="icon">🧾</span>
                                    売上のまとめ、自動化できないかな？
                                </li>
                                <li>
                                    <span className="icon">📱</span>
                                    スマホで業務見たいけど、どうしたら？
                                </li>
                            </ul>
                            <p className="mt-3">
                                全部、わたしたちが一緒に考えます。
                            </p>
                        </div>
                    </div>
                </section>
                {/* ページ3 */}
                <section className="py-5">
                    <div className="container">
                        <h2 className="section-title mb-3">
                            料金は、
                            <br />
                            お客様の状況に合わせて
                        </h2>
                        <div className="ms-2">
                            <p>
                                ちょっとした自動化ツールから、本格的な業務システムまで、
                                <br />
                                ご予算に応じてお作りします。
                                <br />
                                まずはお気軽にお問い合わせください。
                            </p>
                            <p className="mt-2 text-muted">
                                ※ 初期費用は内容によって変動します
                                <br />※ 初回相談・見積もりは無料です
                                <br />※
                                為替相場やクラウド料金の変動により、サービスの提供価格は予告なく変更となる場合があります。すでにご成約いただいた内容には影響いたしません。
                            </p>
                        </div>
                    </div>
                </section>
                {/* ページ4 */}
                <section className="bg-light py-5">
                    <div className="container">
                        <h2 className="section-title mb-3">
                            "ちいさい"からこそ、できること
                        </h2>

                        <div className="ms-2">
                            <div className="mb-4">
                                <h4 className="text-subheadline fw-bold subsection-heading">
                                    🤝 あなただけにオーダーメイド
                                </h4>
                                <div className="page4-content">
                                    <p>
                                        <strong>
                                            😰「買ったパッケージソフト、結局うちには合わなかったんだよね」
                                        </strong>
                                        <br />
                                        お客様のお仕事とお困りごとを徹底的にヒアリングして、どんなシステムにするかご相談。
                                        <br />
                                        今一番必要な、あなただけのシステムを、オーダーメイドします。
                                    </p>
                                </div>
                            </div>

                            <div className="mb-4">
                                <h4 className="text-subheadline fw-bold subsection-heading">
                                    💰 圧倒的な低コスト
                                </h4>
                                <div className="page4-content">
                                    <p>
                                        <strong>
                                            💸「IT企業に頼むのは高そう…」
                                        </strong>
                                        <br />
                                        そんな方にこそ、小規模ビジネス専門の私たちを。
                                        <br />
                                        無駄なコストをかけずに、必要な仕組みを導入できます。
                                    </p>
                                </div>
                            </div>

                            <div className="mb-4">
                                <h4 className="text-subheadline fw-bold subsection-heading">
                                    🔧 システム管理は丸投げでOK！
                                </h4>
                                <div className="page4-content">
                                    <p>
                                        <strong>
                                            🛠️
                                            「システムって導入・管理が大変そう・・」
                                        </strong>
                                        <br />
                                        そんな不安、ありませんか？
                                        <br />
                                        導入・保守はすべて私たちにお任せください。
                                        <br />
                                        インターネットにつながっていれば、会社でも自宅でも、どこからでも使えます。
                                        <br />
                                        お客様の大切なシステムとデータを、責任をもって管理します。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ページ6 */}
                <section className="py-5 text-center">
                    <div className="container">
                        <h2 className="section-title mb-4">
                            インフォメーション
                        </h2>
                        <div className="d-grid gap-3 col-12 col-md-6 mx-auto">
                            <a href="/aboutus" className="btn btn-purple">
                                事業者情報・代表紹介
                            </a>
                            <a href="/scheme" className="btn btn-purple">
                                導入までの流れ
                            </a>
                            <a href="/policy" className="btn btn-purple">
                                私たちのポリシー
                            </a>
                            {/* <a href="/questions" className="btn btn-purple">
                            よくある質問
                        </a> */}
                            {/* <a href="/questions" className="btn btn-purple">
                            導入事例
                        </a> */}
                        </div>
                    </div>
                </section>
                <section className="py-5 text-center bg-light">
                    <div className="container">
                        <h2 className="section-title mb-4">
                            サンプル：
                            <br />
                            こんなシステムが作れます
                        </h2>
                        <div className="d-grid gap-3 col-12 col-md-6 mx-auto">
                            <a
                                href="http://www.chii-yasan.com:3010/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-purple"
                            >
                                例1: 顧客・請求書管理システム
                            </a>
                            <a
                                href="http://www.chii-yasan.com:3020"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-purple"
                            >
                                例2: 針灸院 予約管理システム
                            </a>
                        </div>
                    </div>
                </section>

                {/* ページ8 */}
                <section className="py-5 text-center">
                    <div className="container">
                        <h2 className="section-title mb-4">
                            まずは、ゆっくりお話しませんか？
                        </h2>
                        <div className="d-grid gap-3 col-12 col-md-6 mx-auto">
                            <a
                                href={LINE_URL}
                                className="btn btn-outline-secondary"
                            >
                                LINEで相談
                            </a>
                            <a
                                href="/mailform"
                                className="btn btn-outline-secondary"
                            >
                                フォームで連絡
                            </a>
                            <a
                                href="mailto:chii.yasan@gmail.com"
                                className="btn btn-outline-secondary"
                            >
                                メール
                            </a>
                        </div>
                    </div>
                </section>
            </Container>

            {/* フッター */}
            <Footer />
        </div>
    )
}
