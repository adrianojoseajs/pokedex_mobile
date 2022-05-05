import styled from "styled-components/native";

export const Navbar = styled.View`
    background: #0062B0;
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
    width: 70%;
    height: 60px;
    color: #ffffff;
    font-size: 20px;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    padding: 0 20px;
`;

export const Btnbuscar = styled.TouchableOpacity`
    background: #FFCC00;
    justify-content: center;
    align-items: center;
    width: 30%;
    font-size: 20px;
    height: 60px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
`;

export const Text = styled.Text`
    color: #0062B0;
    font-weight: bold;
    font-size: 18px;
`;