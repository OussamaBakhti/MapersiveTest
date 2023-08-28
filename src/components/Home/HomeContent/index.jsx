import { HomeContainer, H1, H2, Description, Container, TextInput, Text } from "./Home.styles";
import { InlineContainer } from '../../Footer/footer.styles'
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { primaryColor } from '../../../contstants';
import Slider from "./SLider";

function HomeContent() {
    return (
        <HomeContainer>
            <Container>
                <H1>Best Car For Your Performance</H1>
                <Description>We will serve you to get dream car here easily and quickly that is reliable</Description>
                <TextInput
                    placeholder="Search"
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            paddingRight: 0,
                        },
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment
                                sx={{
                                    backgroundColor: primaryColor,
                                    padding: '27.5px 14px'
                                }}
                            >
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <div style={{ marginTop: "50px" }}>

                    <H2>BMW Series 3 Blue</H2>

                    <InlineContainer>
                        <Container>
                            <Text>Base price</Text>
                            <Text size={"24px"} lineHeight={"30px"} weight={"300"}>$ 41.87k</Text>
                        </Container>
                        <Container>
                            <Text>Power</Text>
                            <Text size={"24px"} lineHeight={"30px"} weight={"300"}>365 HP</Text>
                        </Container>
                        <Container>
                            <Text>Engine</Text>
                            <Text size={"24px"} lineHeight={"30px"} weight={"300"}>362 V6</Text>
                        </Container>
                    </InlineContainer>
                </div>
            </Container>
            <Container>
                <Slider />
            </Container>
        </HomeContainer>
    )
}

export default HomeContent