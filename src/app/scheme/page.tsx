'use client'
import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../common/components/Footer'
import '../globals.css'
import './style.css'

export default function Scheme() {
    useEffect(() => {
        const animatedElements = document.querySelectorAll('.animate-on-scroll')

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show')
                    }
                })
            },
            {
                threshold: 0.1,
            }
        )

        animatedElements.forEach((el) => observer.observe(el))

        // クリーンアップ
        return () => {
            observer.disconnect()
        }
    }, [])
    return (
        <Container>
            <section className="py-5 bg-light">
                <div className="container">
                    <h2
                        className="text-center mb-4 fw-bold"
                        style={{ color: '#7869bc' }}
                    >
                        導入までの流れ
                    </h2>

                    <div className="row gy-4">
                        {/* Step 1 */}
                        <div className="col-12 animate-on-scroll">
                            <div className="d-flex align-items-start bg-white p-3 rounded shadow-sm border">
                                <div className="me-3 fs-2 text-primary">
                                    <i className="bi bi-chat-left-text-fill"></i>
                                </div>
                                <div>
                                    <h5 className="fw-bold text-primary mb-1">
                                        ① お問い合わせ・ご相談（無料）
                                    </h5>
                                    <p className="mb-0">
                                        まずはお気軽にご相談ください。「こういうこと、できる？」といったご相談からでOKです。
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="col-12 animate-on-scroll">
                            <div className="d-flex align-items-start bg-white p-3 rounded shadow-sm border">
                                <div className="me-3 fs-2 text-primary">
                                    <i className="bi bi-camera-video-fill"></i>
                                </div>
                                <div>
                                    <h5 className="fw-bold text-primary mb-1">
                                        ② ヒアリング（オンライン対応）
                                    </h5>
                                    <p className="mb-0">
                                        業務内容や課題をオンラインで丁寧にヒアリング。全国対応可能です。
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="col-12 animate-on-scroll">
                            <div className="d-flex align-items-start bg-white p-3 rounded shadow-sm border">
                                <div className="me-3 fs-2 text-primary">
                                    <i className="bi bi-file-earmark-text-fill"></i>
                                </div>
                                <div>
                                    <h5 className="fw-bold text-primary mb-1">
                                        ③ ご提案書＋モックアップ提出
                                    </h5>
                                    <p className="mb-0">
                                        料金を明記したご提案書と、システムの完成イメージ（モック）を一緒にお出しします。
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="col-12 animate-on-scroll">
                            <div className="d-flex align-items-start bg-white p-3 rounded shadow-sm border">
                                <div className="me-3 fs-2 text-primary">
                                    <i className="bi bi-pencil-square"></i>
                                </div>
                                <div>
                                    <h5 className="fw-bold text-primary mb-1">
                                        ④ ご契約・仕様のすり合わせ
                                    </h5>
                                    <p className="mb-0">
                                        ご納得いただけたら正式契約。必要な機能を細かく調整していきます。
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Step 5 */}
                        <div className="col-12 animate-on-scroll">
                            <div className="d-flex align-items-start bg-white p-3 rounded shadow-sm border">
                                <div className="me-3 fs-2 text-primary">
                                    <i className="bi bi-check2-square"></i>
                                </div>
                                <div>
                                    <h5 className="fw-bold text-primary mb-1">
                                        ⑤ テスト運用＋フォローアップ（2回）
                                    </h5>
                                    <p className="mb-0">
                                        実際に使っていただき、2回の面談で改善点や追加要望を丁寧に伺います。
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Step 6 */}
                        <div className="col-12 animate-on-scroll">
                            <div className="d-flex align-items-start bg-white p-3 rounded shadow-sm border">
                                <div className="me-3 fs-2 text-primary">
                                    <i className="bi bi-box-seam"></i>
                                </div>
                                <div>
                                    <h5 className="fw-bold text-primary mb-1">
                                        ⑥ 本納品（正式利用スタート）
                                    </h5>
                                    <p className="mb-0">
                                        完成システムを本納品。以後のカスタマイズは別契約で柔軟に対応いたします。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Container>
    )
}
