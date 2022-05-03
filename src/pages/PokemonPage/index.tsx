import React, { useCallback, useEffect, useState } from "react"
import { IDadosPokemons } from "../../interface/dadosPokemonsModel"
import bancoDeDadosPokemons from "../../services"
import { useIsFocused } from "@react-navigation/native"
import {
    Container,
    Name,
    Img,
    Carta,
    Div,
    Categoria,
    Habilidade,
    Tamanho,
    Peso,
} from "./styles"
import { IDadoDeUmPoke } from "../../interface/dadoDeUmPoke"
import { Image } from "react-native"

function PokemonPage({ navigation: { navigate }, route: { params } }) {

    const isFocused = useIsFocused()

    const [dadoDeUmPoke, setDadoDeUmPoke] = useState<IDadoDeUmPoke>()

    const getPokemon = useCallback(async () => {
        try {
            const data = await bancoDeDadosPokemons.get(params.url)
            isFocused && setDadoDeUmPoke(data.data)
        } catch (error) {
            console.log(error)
        }
    }, [isFocused])

    useEffect(() => {
        getPokemon()
    }, [isFocused])

    return (
        <Container>
            <Carta>
                <Name>{dadoDeUmPoke?.name}</Name>
                <Img
                    source={{ uri: dadoDeUmPoke?.sprites.other["official-artwork"].front_default }}
                />
                <Div>
                    <Categoria>{dadoDeUmPoke?.types[0].type.name}</Categoria>
                    <Habilidade>{dadoDeUmPoke?.abilities[0].ability.name}</Habilidade>
                </Div>
                <Div>
                    <Tamanho>{dadoDeUmPoke?.height}cm</Tamanho>
                    <Peso>{dadoDeUmPoke?.weight}kg</Peso>
                </Div>
            </Carta>
        </Container>
    );
}


export default PokemonPage;