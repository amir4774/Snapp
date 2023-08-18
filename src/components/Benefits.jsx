import { CardBenefits, StyledBenefits, BenefitsImage } from './styles/Benefits.styled';
import fast from '../../Images/Benefits-images/210x190-fast.png';
import easy from '../../Images/Benefits-images/210x190-easy.png';
import eco from '../../Images/Benefits-images/210x190-eco.png';

const Benefits = () => {
  return (
    <StyledBenefits>

      <CardBenefits>
        <BenefitsImage>
          <img src={easy} alt="" />
        </BenefitsImage>
        <div className="texts">
          <p className="title">آسان</p>
          <p className="body">
            برای استفاده از هر کدام از خدمات سوپر‌اپ اسنپ کافی است وارد اپلیکیشن اسنپ شوید و روی آیکون مورد نظر بزنید.
          </p>
        </div>
      </CardBenefits>

      <CardBenefits>
        <BenefitsImage>
          <img src={fast} alt="" />
        </BenefitsImage>
        <div className="texts">
          <p className="title">سریع</p>
          <p className="body">
            قرار گرفتن خدمات مختلف در یک پلت‌فرم به صرفه‌جویی در زمان کمک می‌کند. سوپراپ اسنپ پاسخی سریع به نیازهای رومزه‌ی شماست.
          </p>
        </div>
      </CardBenefits>

      <CardBenefits id='last-item'>
        <BenefitsImage>
          <img src={eco} alt="" />
        </BenefitsImage>
        <div className="texts">
          <p className="title">به صرفه</p>
          <p className="body">
            سوپراپ اسنپ علاوه بر زمان در هزینه‌های شما نیز صرفه‌جویی می‌کند تا بهترین خدمات را با قیمتی منطقی دریافت کنید.
          </p>
        </div>
      </CardBenefits>

    </StyledBenefits>
  )
}

export default Benefits;