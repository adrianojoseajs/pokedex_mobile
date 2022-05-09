import styled from "styled-components/native";

export const Navbar = styled.View`
    background: #3C59A5;
    width: 100%;
    height: 200px;
`;

export const Img = styled.Image`
    align-self: center;
    margin-top: 10px;
    width: 220px;
    height: 80px;
`;

export const Row = styled.View`
    width: 90%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    align-self: center;
    margin: 10px 0;
`;

export const Input = styled.TextInput`
    border: 2px #FFCC00;
    justify-content: center;
    align-items: center;
    width: 76%;
    height: 60px;
    color: #ffffff;
    font-size: 20px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    padding: 0 20px;
`;

export const Btnbuscar = styled.TouchableOpacity`
    background: #FFCC00;
    justify-content: center;
    align-items: center;
    width: 24%;
    font-size: 20px;
    height: 60px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
`;

export const Text = styled.Text`
    color: #3C59A5;
    font-weight: bold;
    font-size: 18px;
`;