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

    console.log(params)

    return (
        <Container>
            <Carta>
                <Name>{params?.name}</Name>
                <Img
                    source={{ uri: params?.sprites.other["official-artwork"].front_default }}
                />
                <Div>
                    <Categoria>{params?.types[0].type.name}</Categoria>
                    <Habilidade>{params?.abilities[0].ability.name}</Habilidade>
                </Div>
                <Div>
                    <Tamanho>{params?.height} Cm</Tamanho>
                    <Peso>{params?.weight} Kg</Peso>
                </Div>
            </Carta>
        </Container>
    );
}

export default PokemonPage;