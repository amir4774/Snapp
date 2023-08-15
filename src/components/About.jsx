import Details from "./Details";
import Images from "./Images";
import { StyledAbout } from "./styles/About.styled";

const About = () => {
    return (
        <StyledAbout>
            <Images />
            <Details />
        </StyledAbout>
    )
}

export default About;