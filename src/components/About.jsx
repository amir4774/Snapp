import Benefits from "./Benefits";
import Details from "./Details";
import Images from "./Images";
import { StyledAbout } from "./styles/About.styled";

const About = () => {
    return (
        <StyledAbout>
            <Images />
            <Details />
            <Benefits />
        </StyledAbout>
    )
}

export default About;