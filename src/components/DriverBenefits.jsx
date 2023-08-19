import { GlobalContainer } from './styles/GlobalContainer';
import DriverBenefitsContents from '../../Contents/DriverBenefitsContents';
import videoSrc from '../../Video/jazbranandeh1.mp4'
import { StyledDriverBenefits, Video } from './styles/DriverBenefits.styled';
import DriverCards from './DriverCards';

const DriverBenefits = () => {
    return (
        <GlobalContainer margin_top_bottom='50px' style={{ marginBottom: '20px' }}>
            <StyledDriverBenefits>
                <Video src={videoSrc} controls />
                <div className="driver-cards">
                    {DriverBenefitsContents.map(card => (<DriverCards key={card.id} card={card} />))}
                </div>
            </StyledDriverBenefits>
        </GlobalContainer>
    )
}

export default DriverBenefits;