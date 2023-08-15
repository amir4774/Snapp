import Contents from '../Contents';
import Service from './Service';
import { Container, Services, StyledItems } from './styles/Items.styled';
import { ServiceBody, ServiceTitle, StyledService, Texts } from './styles/Service.styled';
import credit from '../../Images/Items-images/Credit.svg';
import investment from '../../Images/Items-images/investment.svg';

const Items = () => {
    return (
        <StyledItems>
            <p className='main-title'>یک اپلیکیشن، برای تمام نیازها</p>

            <Container>
                <Services>
                    {Contents.map(content => (<Service key={content.id} content={content} />))}
                </Services>

                {/* Last Two Items */}
                <div className='flex'>
                    <StyledService style={{ width: '30%' }}>
                        <img src={investment} alt="" />
                        <Texts>
                            <ServiceTitle>سرمایه‌گذاری</ServiceTitle>
                            <ServiceBody>خدمات غیر حضوری بورس و سرمایه‌گذاری</ServiceBody>
                        </Texts>
                    </StyledService>
                    <StyledService style={{ marginRight: '40px', width: '30%' }}>
                        <img src={credit} alt="" />
                        <Texts>
                            <ServiceTitle>سرویس اعتباری</ServiceTitle>
                            <ServiceBody>پرداخت با اسنپ</ServiceBody>
                        </Texts>
                    </StyledService>
                </div>

            </Container>

        </StyledItems>
    )
}

export default Items;