export interface IOfficialArtwork {
    front_default: string
}
export interface IOther {
    "official-artwork": IOfficialArtwork
}
export interface ISprites {
    "front_default": string
    other: IOther
}

export interface IType {
    name: string
    url: string
}

export interface ITypes {
    slot: number
    type: IType
}

export interface IAbility {
    name: string
    url: string
}

export interface IAbilities {
    ability: IAbility
    is_hidden: boolean
    slot: number
}

export interface ISpecies {

    name: string
    url: string
}

export interface IDadoDeUmPoke {
    abilities: IAbilities[]
    base_experience: number
    forms: any[]
    game_indices: any[]
    height: number
    held_items: any[]
    id: number
    is_default: boolean
    location_area_encounters: string
    moves: any[]
    name: string
    order: number
    past_types: any[]
    species: ISpecies
    sprites: ISprites
    stats: any[]
    types: ITypes[]
    weight: number
}