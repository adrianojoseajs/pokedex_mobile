import React, { useCallback, useEffect, useState } from "react";
import bancoDeDadosPokemons from "../../services";
import Button from "../../components/Button";
import Logo from "../../assets/logo.png";
import {
    Container,
    Title,
    Header,
    Input,
    FlatList,
    Img
    // Buttoninput
} from "./styles"
import { IDadosPokemons } from "../../interface/dadosPokemonsModel";

function Home({ navigation: { navigate } }) {

    const [dadosPokemons, setDadosPokemons] = useState<IDadosPokemons>()

    const getPokemons = useCallback(async () => {
        try {
            const data = await bancoDeDadosPokemons.get("/pokemon")
            setDadosPokemons(data.data)
        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        getPokemons()
    }, [])
    return (
        <Container>
            <Header>
                <Img source={Logo}
                />
                <Input></Input>
                {/* <Buttoninput>Pesquisar</Buttoninput> */}
            </Header>

            <FlatList
                data={dadosPokemons?.results}
                renderItem={({ item }) => (

                    <Button
                        pokemonName={item.name}
                        onPress={() => { navigate("PokemonPage", item) }}
                    />
                )}
            />

        </Container>
    );
}

export default Home;