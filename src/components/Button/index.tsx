import React from "react"
import { GestureResponderEvent, TouchableOpacity, TouchableOpacityProps } from "react-native"
import {
    ButtonContainer,
    Name
} from "./styles"

interface ButtonProps extends TouchableOpacityProps {
    pokemonName: string
    onPress: (event: GestureResponderEvent) => void
}

const Button = ({
    pokemonName,
    onPress,
    ...rest
}: ButtonProps) => {
    return (
        <>
            <ButtonContainer
                onPress={onPress}
                {...rest}
            >
                <Name>
                    {pokemonName}
                </Name>
            </ButtonContainer>
        </>
    )
}

export default Button;