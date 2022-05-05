import React, { useState } from "react"
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

const Header = ({
    onPressSearch
}) => {

    const [pesquisa, setPesquisa] = useState("")

    const changePesquisa = (value: string) => {
        setPesquisa(
            value.toLowerCase()
        )
    }

    return (
        <Navbar>
            <Img source={Logo}
            />
            <Row>
                <Input
                    onChangeText={changePesquisa}
                />
                <Btnbuscar onPress={() => onPressSearch(pesquisa)}
                >
                    <Text>
                        {/* <Img></Img> */}
                        Busque
                    </Text>
                </Btnbuscar>
            </Row>
        </Navbar>
    )
}

export default Header;