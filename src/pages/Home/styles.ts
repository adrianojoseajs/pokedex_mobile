import styled from "styled-components/native";

export const Container = styled.View`
    background: #a1a1a1;
    flex: 1;
`;

export const Header = styled.View`
    background: #0062B0;
    width: 100%;
    height: 160px;
`;

export const Title = styled.Text`
    margin: auto auto auto auto;
    color: white;
    font-size: 28px;
`;

export const Input = styled.TextInput`
    background: #0062B0;
    border: solid 2px #FFCC00;
    border-radius: 20px;
    width: 95%;
    margin: auto auto auto auto;
    color: #ffffff;
    font-size: 16px;
`;

// export const Buttoninput = styled.TextInput`
// `;

export const Login = styled.Text`
    color: #0062B0;
    background: white;
    margin-top: 10px;
    margin-left: 10px;
    margin-right: auto;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 20px;
`;

export const Button = styled.TouchableOpacity`

`;

export const Cards = styled.View`
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    background: white;
    width: 98%;
    height: 80px;
    transition: 0.3s;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
`;

export const FlatList = styled.FlatList`

`;