import { StyledNavbar, Hamburger, NavbarUl } from "./styles/Navbar.styled";
import snapLogo from '../../Images/Navbar-images/snappTextLogo.svg';
import menu from '../../Images/Navbar-images/menu_black_24dp.svg';
import close from '../../Images/Navbar-images/close_black_24dp.svg';

const Navbar = ({ change, onChange }) => {

    return (
        <StyledNavbar>
            <img src={snapLogo} alt="Snapp!" />

            <Hamburger onClick={() => onChange()}>
                {change ?
                    <img src={close} /> :
                    <img src={menu} />}
            </Hamburger>

            <NavbarUl>
                <li>
                    <a href="#">فرصت های شغلی</a>
                </li>

                <li>
                    <a href="#">بلاگ</a>
                </li>

                <li>
                    <a href="#">باشگاه رانندگان</a>
                </li>

                <li>
                    <a href="#">ثبت نام راننده اسنپ</a>
                </li>

                <li>
                    <a href="#">پنل سازمانی</a>
                </li>

                <li>
                    <a href="#">درباره ما</a>
                </li>

                <li>
                    <a href="#">تماس با ما</a>
                </li>
            </NavbarUl>
        </StyledNavbar>
    )
}

export default Navbar;