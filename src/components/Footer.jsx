import { StyledFooter, FooterNav, SocialMedia, FooterImages } from './styles/Footer.styled';
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaTelegramPlane } from 'react-icons/fa';
import logo from '../../Images/Footer-Images/logo.png';
import second_logo from '../../Images/Footer-Images/second_logo.png';
import namad from '../../Images/Footer-Images/namad.png';

const Footer = () => {
    return (
        <StyledFooter>
            <FooterNav>
                <div>
                    <a href="#">فرصت‌های شغلی</a>
                </div>
                <div>
                    <a href="#">بلاگ</a>
                </div>
                <div>
                    <a href="#">شرایط و قوانین</a>
                </div>
                <div>
                    <a href="#">پنل سازمانی</a>
                </div>
                <div>
                    <a href="#">سوالات متداول</a>
                </div>
                <div>
                    <a href="#">باشگاه رانندگان</a>
                </div>
                <div>
                    <a href="#">ثبت نام راننده اسنپ</a>
                </div>
                <div>
                    <a href="#">درباره ما</a>
                </div>
                <div>
                    <a href="#">تماس با ما</a>
                </div>
            </FooterNav>

            <SocialMedia>
                <FaTwitter className='icon' />
                <FaInstagram className='icon' />
                <FaYoutube className='icon' />
                <FaLinkedin className='icon' />
                <FaTelegramPlane className='icon' />
            </SocialMedia>

            <FooterImages>
                <img src={logo} alt="" />
                <img src={second_logo} alt="" id='second-image' />
                <img src={namad} alt="" />
            </FooterImages>
        </StyledFooter>
    )
}

export default Footer;