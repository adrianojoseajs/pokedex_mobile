import React from "react";
import {
    Button,
    Container,
    Title
} from "./styles"

function Home({ navigation: { navigate } }) {

    const navigation = () => { navigate("Login") }

    return (
        <Container>
            <Title>Home Screen</Title>
            <Button
                onPress={navigation}
            >
                <Title>
                    Navegar para login
                </Title>
            </Button>
        </Container>
    );
}


export default Home;