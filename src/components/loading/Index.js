import { Container, Pokeball, TextContainer, LoadingText, Dot } from "./Style";

const Loading = () => {
    return (
        <Container>
            <Pokeball src={require("../../background/pokeball.png")} />
            <TextContainer>
                <LoadingText>
                    Loading
                </LoadingText>
                <Dot />
                <Dot />
                <Dot />
            </TextContainer>
        </Container>
    )
}

export default Loading;