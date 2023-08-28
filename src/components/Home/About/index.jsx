import { Icon } from '../../Navbar/NavbarElements.styles';
import { Title, SubTitle, Description, Box, ContentBox, Container, Content, SubContent, Text } from './about.styles';

import { CarIcon, TouchScreenIcon, LocationIcon, ClockIcon } from '../../../assets';

function About() {
    return (
        <Container>
            <Box>
                <Title>About Us</Title>
                <SubTitle>Find out briefly but informatively</SubTitle>
                <Description>As an upscale and exclusive chauffeur and limousine service near Indonesia, we have been ensuring for more than 15 years that you get to your destination on time and safely. We sell in around Indonesia , as well as beyond to destinations throughout World. From the Indonesia to shuttle service, you can look forward to a professional team and comfort of our car service.</Description>
            </Box>
            <Box>
                <ContentBox>
                    <Content>
                        <SubContent>
                            <img src={CarIcon} width="48px" height="48px" />
                            <Text>From business to Luxuryclass</Text>
                        </SubContent>
                        <SubContent>
                            <img src={CarIcon} width="48px" height="48px" />
                            <Text>125 Location in Indonesia</Text>
                        </SubContent>
                    </Content>
                    <Content>
                        <SubContent>
                            <img src={CarIcon} width="48px" height="48px" />

                            <Text>Convenient Online Book</Text>
                        </SubContent>
                        <SubContent>
                            <img src={CarIcon} width="48px" height="48px" />

                            <Text>24/7 Exclusive On the road</Text>
                        </SubContent>
                    </Content>
                </ContentBox>
            </Box>
        </Container>
    )
}

export default About