import { useState } from 'react';
import { FaCircle, FaTimes } from 'react-icons/fa'
import { StyledBanner, Title, Body } from './styles/Banner.styled';
import { Button } from './styles/Button';
import { Form } from './styles/Form';

const Banner = () => {

  const [number, setNumber] = useState('');

  return (
    <StyledBanner>
      <Title>تجربه‌ی زندگی راحت‌تر، سریع‌تر و به‌صرفه‌تر با سوپر‌اپلیکیشن اسنپ!</Title>
      <Body>از درخواست خودرو گرفته تا سفارش غذا، خرید سوپرمارکتی، خرید بلیط سفر، رزرو هتل و... را میتوانید با اسنپ انجام دهید.</Body>

      <div className="form">
        <Form>
          <input type="text" placeholder='09xxxxx6789' value={number} onChange={(e) => setNumber(e.target.value)} />
          <div className="btn">
            {number ? <div className="btn-delete" onClick={() => setNumber('')} ><FaTimes className='delete' /></div> : <FaCircle />}
          </div>
          <Button>ارسال لینک</Button>
        </Form>

        <Button style={{ marginTop: '30px', fontSize: '1.3rem' }}
          mybackground='transparent'
          mycolor='#fff'
          myborder='1.5px solid #ddd'
          hoverbg='rgba(255, 255, 255, 0.1)'>
          ورود به وب اپلیکیشن اسنپ
        </Button>
      </div>

      <div className="block-btn">
        <button>دانلود اپلیکیشن اسنپ</button>
      </div>

    </StyledBanner>
  )
}

export default Banner;