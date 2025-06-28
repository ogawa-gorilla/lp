export default function Header() {
    return (
        <header className="p-3 text-center">
            <a href="/">
                <img
                    src="/resources/img/logo.png"
                    alt="ロゴ"
                    className="img-fluid"
                    style={{ maxHeight: '320px' }}
                />
            </a>
        </header>
    )
}
