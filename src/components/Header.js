import MemeLogo from '../assets/images/troll-face.png';

function Header() {
    return (
        <div className="header-container">
            <div className="logo-wrapper">
                <img src={MemeLogo} alt="Logo" />
                <span>Meme Generator</span>
            </div>
            <div className="header-title">
                <h3>React Course - Project 3</h3>
            </div>
        </div>
    );
}

export default Header;