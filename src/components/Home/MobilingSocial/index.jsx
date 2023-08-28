import { faCircleChevronRight, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "../../Navbar/NavbarElements.styles";
import { Container, Text, Box, BoxContent, Title, Description, Button } from "./mobilingSocial.styles";
import { InlineContainer } from "../../Footer/footer.styles";

const MobilingSocial = () => {
    return (
        <Container>
            <Text>Mobiling social</Text>
            <Box>
                <BoxContent>
                    <Title>Information on data processing</Title>
                    <Description>
                        On our website we provide content from Storystream. To view this content, you must agree to the data processing by Storystream.
                    </Description>
                    {/* <InlineContainer> */}
                    <Button>
                        <Icon icon={faChevronRight} />
                        Agree
                    </Button>
                    <Button>
                        <Icon icon={faChevronRight} />
                        Information on data privacy
                    </Button>
                    {/* </InlineContainer> */}
                </BoxContent>
            </Box>
        </Container>
    );
}

export default MobilingSocial;