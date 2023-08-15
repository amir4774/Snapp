import { StyledService, Texts, ServiceTitle, ServiceBody } from "./styles/Service.styled";

const Service = ({ content: { body, title, logo } }) => {
    return (
        <StyledService>
            <img src={logo} alt="" />
            <Texts>
                <ServiceTitle>{title}</ServiceTitle>
                <ServiceBody>{body}</ServiceBody>
            </Texts>
        </StyledService>
    )
}

export default Service;