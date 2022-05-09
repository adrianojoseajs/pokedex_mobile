import styled from "styled-components/native";

export const ButtonContainer = styled.TouchableOpacity`
    background: white;
    width: 95%;
    height: 88px;
    align-items: center;
    border-radius: 20px;
    margin: 5px auto;

    flex-direction: row;
    justify-content: space-around;
`;

export const Name = styled.Text`
    font-size: 32px;
    text-transform: capitalize;
    margin: 0 auto;
    color: #3C59A5;
`;

export const Img = styled.Image`
    width: 88px;
    height: 88px;

    margin-right: 40px;
    margin-top: auto;
    margin-bottom: auto;
`;