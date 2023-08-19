import { CardBody, CardTitle, StyledDriverCards, TextCards } from "./styles/DriverCards.styled";

const DriverCards = ({ card: { title, body, logo } }) => {
  return (
    <StyledDriverCards>
      <img src={logo} alt="" />
      <TextCards>
        <CardTitle>{title}</CardTitle>
        <CardBody>{body}</CardBody>
      </TextCards>
    </StyledDriverCards>
  )
}

export default DriverCards;