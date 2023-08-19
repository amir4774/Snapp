import DriverBenefits from "./DriverBenefits";
import { StyledBeDriver, Titles } from "./styles/BeDriver.styled";
import { Button } from "./styles/Button";

const Driver = () => {
  return (
    <StyledBeDriver>

      <Titles>
        <p className="main-title">در کمتر از ۱۰ دقیقه ثبت‌نام کنید و به ناوگان اسنپ بپیوندید.</p>
        <p className="second-title">بدون نیاز به مراجعه‌ی حضوری، از طریق این صفحه، تمام مراحل ثبت‌نام را اینترنتی انجام دهید</p>
        <Button 
                mybackground='rgb(0, 219, 117)' 
                mycolor='#fff' 
                style={{ fontSize: '1.2rem' }}>
                ثبت‌نام رانندگان
        </Button>
      </Titles>

      <DriverBenefits />
    </StyledBeDriver>

  )
}

export default Driver;