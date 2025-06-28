import './footer.css'

export default function Footer() {
    const thisYear = new Date().getFullYear()

    return (
        <footer>
            &copy; {thisYear} ちいさなIT屋さん
            <br />
            <a href="privacy.html">プライバシーポリシー</a> |{' '}
            <a href="terms.html">利用規約</a>
        </footer>
    )
}
