import '@/app/common/common.css'
import Footer from '@/app/common/components/Footer'
import { LINE_URL } from '../constants'
import './style.css'

export default function MonitorCampaignPage() {
    return (
        <div className="main-container">
            <main className="container" role="main">
                <h1 className="section-title">
                    💡 モニターキャンペーン実施中！
                </h1>
                <section className="content py-5">
                    <p className="ml-3">
                        ちいさなIT屋さんでは、ただいま{' '}
                        <strong>限定モニター</strong> を募集しています。
                        <br />
                        「ちょっと試してみたい」「IT導入は初めてで不安…」という方にこそぴったりの内容です。
                    </p>
                </section>

                <section className="content py-5 bg-light">
                    <h3 className="subsection-heading">🎁 モニター特典</h3>
                    <ul>
                        <li className="mb-3">
                            <strong>初期費用 0円！</strong>
                            <br />
                            システムの企画・設計・制作にかかる初期費用は、すべて無料でご提供します。
                        </li>
                        <li className="mb-3">
                            <strong>保守費用も 3ヶ月間 無料！</strong>
                            <br />
                            3ヶ月間はサポートや保守費用もかかりません。期間内に合わないと感じた場合は、
                            <strong>そのまま無料で解約</strong>いただけます。
                        </li>
                    </ul>
                </section>

                <section className="content py-5">
                    <h3 className="subsection-heading">
                        📌 ご協力いただきたい条件
                    </h3>
                    <ul>
                        <li className="mb-3">
                            制作したシステムは、
                            <strong>
                                今後の参考事例としてWebサイト等でご紹介させていただく場合があります。
                            </strong>
                        </li>
                        <li className="mb-3">
                            公開するのはあくまで<strong>デモ環境</strong>
                            （別のデータベースを使用したサンプル）であり、
                            <strong>
                                お客様が実際にご利用いただく本番システムとは完全に切り離されています。
                            </strong>
                        </li>
                        <li className="mb-3">
                            実際の業務データや社名などの
                            <strong>機密情報は一切含みません。</strong>
                        </li>
                        <li className="mb-3">
                            公開内容については
                            <strong>
                                事前にご確認いただき、非公開にしたい部分は柔軟に対応いたします。
                            </strong>
                        </li>
                    </ul>
                </section>

                <section className="content py-5  bg-light">
                    <h3 className="subsection-heading">🕒 募集期間・対象</h3>
                    <ul>
                        <li className="mb-3">
                            <strong>募集期間：</strong>2025年7月1日〜
                            枠が埋まるまで（先着2社）
                        </li>
                        <li className="mb-3">
                            <strong>対象：</strong>
                            個人事業主さま、小規模事業者さま、NPO法人など、IT導入が初めての方も歓迎します。
                        </li>
                    </ul>
                </section>

                <section className="content py-5">
                    <h3 className="subsection-heading">
                        ✉️ お問い合わせ・お申し込み
                    </h3>
                    <p>
                        気になる方は、ぜひお気軽にご相談ください。
                        <br />
                        ご希望やお悩みをうかがったうえで、最適なご提案をさせていただきます。
                    </p>
                    <div className="d-grid gap-3 col-12 col-md-6 mx-auto">
                        <a href={LINE_URL} className="btn btn-purple">
                            LINEでお問い合わせ
                        </a>
                        <a href="/mailform" className="btn btn-purple">
                            メールフォームからお問い合わせ
                        </a>
                    </div>
                </section>
                <Footer />
            </main>
        </div>
    )
}
