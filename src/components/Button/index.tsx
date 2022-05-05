import { useNavigation } from "@react-navigation/native"
import React, { useCallback, useEffect, useState } from "react"
import { GestureResponderEvent, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { IDadoDeUmPoke } from "../../interface/dadoDeUmPoke"
import { IDadosPokemons, IPokemon } from "../../interface/dadosPokemonsModel"
import bancoDeDadosPokemons from "../../services"
import {
    ButtonContainer,
    Name,
    Img
} from "./styles"

interface ButtonProps extends TouchableOpacityProps {
    item: IPokemon
    pokemonName: string
    dataChanged: number
}

const Button = ({
    pokemonName,
    item,
    dataChanged,
    ...rest
}: ButtonProps) => {

    const { navigate } = useNavigation()

    const [dadoDeUmPoke, setDadoDeUmPoke] = useState<IDadoDeUmPoke>()

    const getPokemon = useCallback(async () => {
        try {
            const data = await bancoDeDadosPokemons.get(item.url)
            setDadoDeUmPoke(data.data)
        } catch (error) {
            console.log(error)
        }
    }, [dataChanged])

    useEffect(() => {
        getPokemon()
    }, [dataChanged])

    return (
        <>
            <ButtonContainer
                onPress={() => { navigate("PokemonPage", dadoDeUmPoke) }}
                {...rest}
            >
                <Name>
                    {pokemonName}
                </Name>
                <Img source={{
                    uri: dadoDeUmPoke?.sprites.front_default
                }}
                />
            </ButtonContainer>
        </>
    )
}

export default Button;