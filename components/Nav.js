import Link from 'next/link'
import Script from 'next/script'

const Nav = () => {
    return (
        <>
        <Script src="../js/toggle.js"></Script>
        <nav className="navbar-links">
            <ul className="nav-links">
                <li><Link href="/">Winderton</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="https://www.youtube.com/channel/winderton">Youtube</Link></li>
                <li><Link href="https://www.patreon.com/winderton">Patreon</Link></li>
            </ul>
            <a className="burg">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </a>
        </nav>
    </>
    )
}

export default Nav;