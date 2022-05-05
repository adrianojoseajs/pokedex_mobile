import styled from "styled-components/native";

export const ButtonContainer = styled.TouchableOpacity`
    background: white;
    width: 96%;
    height: 80px;
    align-items: center;
    border-radius: 30px;
    
    margin: 5px auto;

    flex-direction: row;
    justify-content: space-around;
`;

export const Name = styled.Text`
    font-size: 32px;
    text-transform: capitalize;
`;

export const Img = styled.Image`
    width: 100px;
    height: 100px;
`;