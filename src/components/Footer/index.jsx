import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  InlineContainer,
  BottomNavigation,
  Line,
  Description
} from "./footer.styles";

import {
  LogoLightImg,
  FacebookLogo,
  TwitterLogo,
  InstagramLogo,
  LinkedInLogo
} from '../../assets/index';

import { Logo, Icon } from "../Navbar/NavbarElements.styles";

import { faArrowRight, faGlobe } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <BottomNavigation>
      <Box>
        <Container>
          <Row>
            <Column>
              <Heading> <Logo src={LogoLightImg} /> </Heading>
              <Description>As an upscale and exclusive chauffeur and limousine service near Indonesia, we have been ensuring for more than 15 years that you get to your destination on time and safely.</Description>
              <InlineContainer>
                <FooterLink><Logo src={TwitterLogo} /></FooterLink>
                <FooterLink><Logo src={FacebookLogo} /></FooterLink>
                <FooterLink><Logo src={LinkedInLogo} /></FooterLink>
                <FooterLink><Logo src={InstagramLogo} /></FooterLink>
              </InlineContainer>
            </Column>
            <Column>
              <Heading>Buy vehicle</Heading>
              <FooterLink href="#">Find new car</FooterLink>
              <FooterLink href="#">Current vehicle offers</FooterLink>
              <FooterLink href="#">Price lists & brochures</FooterLink>
            </Column>
            <Column>
              <Heading>Purchase advice</Heading>
              <FooterLink href="#">Book a test drive</FooterLink>
              <FooterLink href="#">Find a dealer near you</FooterLink>
              <FooterLink href="#">Find used vehicles</FooterLink>
            </Column>
            <Column>
              <Heading>Customer Service</Heading>
              <FooterLink href="#">Current service offers</FooterLink>
              <FooterLink href="#">Online service campaign VIN-checker</FooterLink>
              <FooterLink href="#">5 Year staf service</FooterLink>
              <FooterLink href="#">24h roadside assitance</FooterLink>
              <FooterLink href="#">New and events</FooterLink>
              <FooterLink href="#">Press relase</FooterLink>
            </Column>
          </Row>
        </Container>
      </Box>
      <Line />
      <Box>
        <Container>
          <Row>
            <Column>
              <Heading>
                <FooterLink>Copyright 2023 Mobiling Co.</FooterLink>
              </Heading>
            </Column>

            <Column>
              <Heading>
                <FooterLink>Terms of Service</FooterLink>
              </Heading>
            </Column>
            <Column>
              <Heading>
                <InlineContainer>
                  <FooterLink>Privacy Policy</FooterLink>
                  <FooterLink>Cookies</FooterLink>
                </InlineContainer>
              </Heading>
            </Column>
            <Column>
              <Heading>
                <Icon icon={faGlobe} style={{ marginRight: "10px" }} />
                English
                <Icon icon={faArrowRight} style={{ marginLeft: "10px" }} />
              </Heading>
            </Column>
          </Row>
        </Container>
      </Box>

    </BottomNavigation>
  );
};
export default Footer;