import "./Header.css";

export default function Header() {
    return (
        <header className="portfolio-header">
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item"><a href='#home'>Home</a></li>
                    <li className="nav-item"><a href='#about-me'>About</a></li>
                    <li className="nav-item"><a href='#tech'>Tech Stack</a></li>
                    <li className="nav-item"><a href='#projects'>Projects</a></li>
                </ul>
            </nav>
        </header>
    )
}