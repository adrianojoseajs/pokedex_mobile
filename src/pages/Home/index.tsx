import React, { useCallback, useEffect, useState } from "react";
import bancoDeDadosPokemons from "../../services";
import Button from "../../components/Button";
import Header from "../../components/Header";
import {
    Container,
    FlatList,
} from "./styles"
import { IDadosPokemons } from "../../interface/dadosPokemonsModel";
import { INITIAL_DADOS_POKEMON } from "../../constants/initialDadosPokemon";

function Home({ navigation: { navigate } }) {

    const [dadosPokemons, setDadosPokemons] = useState<IDadosPokemons>(INITIAL_DADOS_POKEMON)
    const [dadosPokemonsFiltrado, setDadosPokemonsFiltrado] = useState<IDadosPokemons>(INITIAL_DADOS_POKEMON)
    const [dataChanged, setDataChanged] = useState(false)
    const getPokemons = useCallback(async () => {
        try {
            const data = await bancoDeDadosPokemons.get("/pokemon")
            setDadosPokemons(data.data)
        } catch (error) {
            console.log(error)
        }
    }, [])

    const filter = (value: string) => {
        const filtered = dadosPokemons.results.filter((pokemon) => {
            return pokemon.name.includes(value)

        }
        )
        setDadosPokemonsFiltrado(prev => ({ ...prev, results: filtered }))
        setDataChanged(!dataChanged)
    }
    useEffect(() => {
        getPokemons()
    }, [])
    return (
        <Container>
            <Header
                onPressSearch={filter}
            />

            <FlatList
                data={dadosPokemonsFiltrado?.results.length > 0
                    ? dadosPokemonsFiltrado?.results
                    : dadosPokemons?.results}
                renderItem={({ item }) => (

                    <Button
                        dataChanged={dataChanged}
                        item={item}
                        pokemonName={item.name}
                    />
                )}
            />
        </Container>
    );
}

export default Home;