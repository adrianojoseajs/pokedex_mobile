import React from "react"
import {
    Container,
    Name,
    Type,
    Img
} from "./styles"

function Pikachu({ navigation: { navigate } }) {

    const navigation = () => { navigate("Pikachu") }

    return (
        <Container>
            <Name>Pikachu</Name>
            <Type>ELétrico</Type>
        </Container>
    );
}


export default Pikachu;