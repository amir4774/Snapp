import { StyledIcons } from './styles/Icons.styled';
import direct_download_badge from '../../Images/Icons/direct-download-badge.png';
import app_store from '../../Images/Icons/app_store.svg';
import bazaar from '../../Images/Icons/bazaar.png';
import myketmarket from '../../Images/Icons/myketmarket.png';
import snapp_pwa from '../../Images/Icons/snapp-pwa.png';

const Icons = () => {
    return (
        <StyledIcons>
            <img src={direct_download_badge} alt="" />
            <img src={bazaar} alt="" />
            <img src={myketmarket} alt="" />
            <img src={snapp_pwa} alt="" />
            <img src={app_store} alt="" />
        </StyledIcons>
    )
}

export default Icons;