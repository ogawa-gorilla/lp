import './style.css'

export default function Home() {
    return (
        <div className="main-container">
            {/* ヘッダー */}
            <header className="p-3 text-center">
                <img
                    src="/resources/img/logo.png"
                    alt="ロゴ"
                    className="img-fluid"
                    style={{ maxHeight: '320px' }}
                />
            </header>

            {/* ヒーローセクション */}
            <section className="hero">
                <h1 className="display-5">
                    業務システムのこと、
                    <br />
                    パソコンのこと、
                    <br />
                    クラウドのこと。
                </h1>
                <p className="lead">わからなくても、私たちが一緒にやります。</p>
            </section>

            {/* ページ1 */}
            <section className="py-5">
                <div className="container">
                    <h2 className="section-title mb-3">
                        専門用語は使いません。
                    </h2>
                    <div className="ms-2">
                        <p>
                            お客様が「どうしたいか」を聞かせてください。
                            <br />
                            それに合った形で、IT化の仕組みを整えます。
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
                                クラウドってなにから始めればいいの？
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
                        料金は、お客様の状況に合わせて
                    </h2>
                    <div className="ms-2">
                        <ul className="list-unstyled indented-list">
                            <li>
                                <span className="icon">🛠️</span>
                                <strong>業務アプリ開発</strong> 初期費用{' '}
                                <span className="text-price">29,980円〜</span>
                            </li>
                            <li>
                                <span className="icon">🧰</span>
                                <strong>保守サポート</strong>：月額{' '}
                                <span className="text-price">4,980円〜</span>
                            </li>
                        </ul>
                        <p className="mt-2 text-muted">
                            ※ 初期費用は内容によって変動します
                            <br />※ 初回相談・見積もりは無料です
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
                            <h4 className="text-subheadline fw-bold page4-heading">
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
                            <h4 className="text-subheadline fw-bold page4-heading">
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
                            <h4 className="text-subheadline fw-bold page4-heading">
                                🔧 システム管理は丸投げでOK！
                            </h4>
                            <div className="page4-content">
                                <p>
                                    <strong>
                                        🛠️
                                        「業務システムって導入・管理が大変そう・・」
                                    </strong>
                                    <br />
                                    そんな不安、ありませんか？
                                    <br />
                                    導入・保守はすべて私たちにお任せください。
                                    <br />
                                    インターネットにつながっていれば、会社でも自宅でも、どこからでも使えます。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ページ5 */}
            <section className="py-5 text-center">
                <div className="container">
                    <h2 className="section-title mb-4">
                        こんなシステムが作れます
                    </h2>
                    <div className="d-grid gap-3 col-12 col-md-6 mx-auto">
                        <button
                            className="btn btn-purple"
                            onClick={() => {
                                window.open(
                                    'http://chii-yasan.com:3010',
                                    '_blank'
                                )
                            }}
                        >
                            例1: 顧客・請求書管理システム
                        </button>
                        <button
                            className="btn btn-purple"
                            onClick={() => {
                                window.open(
                                    'http://chii-yasan.com:3020',
                                    '_blank'
                                )
                            }}
                        >
                            例2: 針灸院 予約管理システム
                        </button>
                    </div>
                </div>
            </section>

            {/* ページ6 */}
            <section className="py-5 text-center bg-light">
                <div className="container">
                    <h2 className="section-title mb-4">
                        まずは、ゆっくりお話しませんか？
                    </h2>
                    <div className="d-grid gap-3 col-12 col-md-6 mx-auto">
                        <a href="#" className="btn btn-outline-secondary">
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

            {/* フッター */}
            <footer>
                &copy; 2025 ちいさなIT屋さん
                <br />
                <a href="privacy.html">プライバシーポリシー</a> |{' '}
                <a href="terms.html">利用規約</a>
            </footer>
        </div>
    )
}
