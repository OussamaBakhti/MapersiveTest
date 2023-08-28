import { faCircleChevronLeft, faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Steps, Container, ImagesContainer } from "./slider.styles";
import { Icon } from "../../../Navbar/NavbarElements.styles";
import { CarImage } from "../../../../assets/index";


const Slider = () => {
    return (
        <Steps>
            <ImagesContainer>
                <img src={CarImage} />
            </ImagesContainer>
            <Container>
                <Icon icon={faCircleChevronLeft} style={{ color: "gray" }} />
                <Icon icon={faCircleChevronRight} style={{ color: "gray" }} />
            </Container>
        </Steps>
    );
}

export default Slider;