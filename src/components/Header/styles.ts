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
        flex: 1;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        margin: 0px 10px 0px 10px;
`;

export const Input = styled.TextInput`
    background: #0062B0;
    border: solid 2px #FFCC00;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 0px;
    border-top-right-radius: 0px;
    width: 70%;
    height: 62px;
    margin: auto auto auto auto;
    color: #ffffff;
    font-size: 20px;
`;

export const Btnbuscar = styled.TouchableOpacity`
    background: #FFCC00;
    justify-content: center;
    align-items: center;
    margin: 0 auto 0 auto;
    width: 80px;
    height: 30px;
    margin-bottom: 5px;
    font-size: 20px;
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
    width: 30%;
    height: 60px;
`;

export const Text = styled.Text`
    color: #0062B0;
    font-weight: bold;
    font-size: 18px;
`;