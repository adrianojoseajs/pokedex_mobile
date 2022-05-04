import styled from "styled-components/native";

export const Container = styled.View`
    background: #a1a1a1;
    flex: 1;
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
    background: red ;
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


export const Img = styled.Image`
    align-self: center;
    width: 80px;
    height: 80px;
`;
