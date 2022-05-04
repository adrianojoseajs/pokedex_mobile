import React from "react"
import bancoDeDadosPokemons from "../../services";
import Logo from "../../assets/logo.png";

import {
    Navbar,
    Img,
    Input,
    Btnbuscar,
    Text,
    Row
} from "./styles"

const Header = ({ }) => {
    return (
        <Navbar>
            <Img source={Logo}
            />
            <Row>
                <Input>
                </Input>
                <Btnbuscar>
                    <Text>
                        Busque
                    </Text>
                </Btnbuscar>
            </Row>
        </Navbar>
    )
}

export default Header;