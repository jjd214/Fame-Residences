import LogoImage from './assets/logo.png'
import backgroundImage from './assets/bgmain.jpg'
import Overview from './Overview'

function Navbar() {
    return( <>
                <div className="navbar">
                    <img src={LogoImage} alt="logo" height={50} width={100} />

                    <ul>
                        <li><a href="">Overview</a></li>
                        <li><a href="">Gallery</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                </div>

                <img src={backgroundImage} id='background-image' alt="background" />

            </>);
}

export default Navbar
