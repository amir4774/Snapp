import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { AppUl, StyledUl } from './styles/Ul.styled';
import apple from '../../Images/Ul-images/apple.png';
import cafebazaar from '../../Images/Ul-images/cafebazaar.png';
import directdownload_icon from '../../Images/Ul-images/directdownload-icon.png';
import snapp_pwa from '../../Images/Ul-images/snapp-pwa.svg';
import myketmarketicon from '../../Images/Ul-images/myketmarketicon.png';

const Ul = () => {

    const [down, setDown] = useState(true);

    const handleDown = () => {
        setDown(!down);
    }

    return (
        <>
            <StyledUl>
                <li id='first'>
                    <a href="#">فرصت های شغلی</a>
                </li>

                <li>
                    <a href="#">بلاگ</a>
                </li>

                <li>
                    <a href="#">باشگاه رانندگان</a>
                </li>

                <li>
                    <a href="#">ثبت نام اسنپ <span>(سواری، موتور و وانت)</span></a>
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
            </StyledUl>

            <AppUl down={down}>
                <div className='app' onClick={() => handleDown()}>
                    <p>اپلیکیشن اسنپ</p>
                    <div>{down ? <FaChevronDown /> : <FaChevronUp />}</div>
                </div>

                <div className="items">
                    <ul>
                        <li>
                            <img src={directdownload_icon} alt="" />
                            <a href="#">دانلود مستقیم</a>
                        </li>

                        <li>
                            <img src={cafebazaar} alt="" />
                            <a href="#">دانلود از کافه بازار</a>
                        </li>

                        <li>
                            <img src={myketmarketicon} alt="" />
                            <a href="#">دانلود از مایکت</a>
                        </li>

                        <li>
                            <img src={snapp_pwa} className='big-image' alt="" />
                            <a href="#">وب اپلیکیشن اسنپ</a>
                        </li>

                        <li>
                            <img src={apple} alt="" />
                            <a href="#">دانلود از اپ استور</a>
                        </li>
                    </ul>
                </div>
            </AppUl>
        </>
    )
}

export default Ul;