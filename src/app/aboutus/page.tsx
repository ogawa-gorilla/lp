'use client'
import { Container } from 'react-bootstrap'
import Footer from '../common/components/Footer'
import Header from '../common/components/Header'
import './style.css'

export default function AboutUsPage() {
    return (
        <>
            <Header />
            <Container>
                <section className="py-5 bg-light px-3">
                    <div className="text-center">
                        <h2 className="section-title mb-4">事業者情報</h2>
                    </div>
                    <p>
                        <strong>事業者名：</strong>ちいさなIT屋さん
                        <br />
                        <strong>代表者名：</strong>小川 豪祐（おがわ ごうすけ）
                        <br />
                        <strong>所在地：</strong>〒511-0281
                        三重県いなべ市大安町門前465-2
                        <br />
                        <strong>メールアドレス：</strong>chii.yasan@gmail.com
                        <br />
                        <strong>事業内容：</strong>
                        <br />
                        - 小規模事業者向け業務システム提案/開発/保守
                        <br />
                        - Webサイト制作/保守
                        <br />
                        <br />
                        <strong>ホームページURL：</strong>
                        <a href="https://chii-yasan.com/" target="_blank">
                            https://chii-yasan.com/
                        </a>
                    </p>
                </section>
                <section className="py-5 px-3">
                    <div className="mb-4">
                        <div className="text-center">
                            <h2 className="section-title mb-4">代表紹介</h2>
                        </div>
                        <p>
                            「ちいさなIT屋さん」代表の小川 豪祐(おがわ
                            ごうすけ)です。
                        </p>
                        <p>
                            Web系フルスタックエンジニアとして、ITシステムの現場に長く携わり、さまざまな案件で実務経験を積んできました。
                            <br />
                            設計からインフラ構築、実装に至るまでをほぼ独学で習得し、実業務においても継続的に成果を挙げてきました。
                        </p>
                        <p>
                            業務の中で痛感したのは、システム開発がしばしば「組織の都合」や「納品側の都合」によって進められている現実です。
                            <br />
                            本当に現場にフィットし、長く使っていただけるシステムをつくるには、組織の枠内では限界があると考え、2025年に「ちいさなIT屋さん」を発足しました。
                        </p>
                        <p>
                            現在は、小規模事業者や現場で働く方々が抱える「IT化/DXへの不安」や「市販サービスが合わない」「どう自動化していいかわからない」といった課題に対して、
                            <br />
                            わかりやすく丁寧に寄り添う、伴走型の支援を行っています。
                        </p>
                        <p>
                            技術面だけでなく、「本当に必要か」「実際に使えるか」「手作業よりかえって手間が増えていないか」といった視点を重視し、
                            <br />
                            過剰な提案はせず、必要なシステム化を必要な分だけ提供することを心がけています。
                        </p>
                        <p>
                            職人上がりなのでおしゃべりはあまり得意ではありませんが、いいものを作りたいという熱意は本物です。
                        </p>
                        <p>
                            自動化、Web活用、業務改善など、お困りごとがあればお気軽にご相談ください。
                        </p>
                    </div>
                    <div className="mb-4">
                        <div className="text-center mb-2">
                            <h5>経歴</h5>
                        </div>
                        <ul>
                            <li>名古屋大学 農学部 応用生命科学科 卒業</li>

                            <li>
                                名古屋大学大学院 生命農学研究科 進学 (分野:
                                バイオインフォマティクス)
                            </li>

                            <li>
                                クリエイティブ企業にて約10年間、開発業務に従事
                            </li>

                            <li>
                                フルスタックWebエンジニアとして、Python,
                                TypeScript, C#, Linux, Next.js, ASP.NET,
                                Laravelなどを活用し、システムのフロントエンドとバックエンドを開発
                            </li>

                            <li>
                                「ちいさなIT屋さん」を発足、小規模事業者向けにIT活用のサポートを提供
                            </li>
                        </ul>
                    </div>
                </section>
            </Container>
            <Footer />
        </>
    )
}
