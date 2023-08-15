import { StyledImages, Food, Market, Driver, Club, Dots, DotsButtons } from "./styles/Images.styled";

const Images = () => {

    const changeDot = (selectedButton) => {
        // Get images and dots
        const images = document.querySelectorAll('.images');
        const buttons = document.querySelectorAll('button');
        
        // Remove Class
        images.forEach(img => img.classList.remove('show'));
        buttons.forEach(button => button.classList.remove('selected'));
        
        // Add Class
        images[selectedButton.id].classList.add('show');
        selectedButton.classList.add('selected');
    }


    return (
        <StyledImages>
            
            <Club className="images" />
            <Driver className="images" />
            <Market className="images" />
            <Food className="images show" />

            <Dots>
                <div>
                    <DotsButtons id="0" onClick={(e) => changeDot(e.target)}></DotsButtons>
                    <DotsButtons id="1" onClick={(e) => changeDot(e.target)}></DotsButtons>
                    <DotsButtons id="2" onClick={(e) => changeDot(e.target)}></DotsButtons>
                    <DotsButtons className="selected" id="3" onClick={(e) => changeDot(e.target)}></DotsButtons>
                </div>
            </Dots>
            
        </StyledImages>
    )
}

export default Images;