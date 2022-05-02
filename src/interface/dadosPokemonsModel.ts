export interface IPokemon {
    name: string,
    url: string
}

export interface IDadosPokemons {
    count: number,
    next: string | null,
    previous: string | null,
    results: IPokemon[]
}