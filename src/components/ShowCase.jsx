import Banner from "./Banner";
import Icons from "./Icons";
import { StyledShowCase } from "./styles/ShowCase.styled";
import banner_image from "../../Images/Banner-image/intro_desktop.jpg"

const ShowCase = () => {
  return (
    <StyledShowCase>
      
      <div style={{ display: 'flex' }}>
        <Banner />
        <img className="banner-image" src={banner_image} />
      </div>

      <Icons />
    </StyledShowCase>
  )
}

export default ShowCase;