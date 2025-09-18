import chili1 from '../img/chili1.png';

export default function Header() {

    return (
        <header>
            <div className='logo'>
                <img src={chili1} alt='En chilli' />
                <p>SpiceNews</p>
            </div>
        </header>
    )
}