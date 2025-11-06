import logoFont from "../img/Logo/LogoFont.png"

export default function Header() {

    return (
        <header>
            <div className='logo'>
                <img src={logoFont} alt="SpiceNews logo" />
            </div>
        </header>
    )
}