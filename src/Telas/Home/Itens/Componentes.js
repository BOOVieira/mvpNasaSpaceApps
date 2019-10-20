import styled from 'styled-components/native'

export const Infos = styled.View`
    margin: 20px 10px;
    fontSize: 18px;
    fontWeight: bold;
    textAlign: center;
    color: #34495e;
`; 

export const CardInfos = styled.View`
    flex-flow: row;
    margin: auto 0;
    color: #000;
    font-weight: bold
`; 


export const Card = styled.TouchableOpacity`
    fontWeight: bold;
    textAlign: center;
    color: #34495e;
    flex-flow: row;
    margin: 15px 5px;
    background: #ebebeb;
    border-radius: 5px;    
`; 

export const Titulo = styled.Text`
    fontWeight: bold;
    textAlign: left;
    color: #34495e;
    flex-flow: row;
    margin: auto 5px;
    width: 90px
`; 

export const Thumb = styled.Image`
    margin:  auto 5px;
    padding:5px

`; 

export const Container = styled.ScrollView`
    background: #6ad141
`; 

export const TituloFeed = styled.Text`
    font-size: 25;
    fontWeight: bold;
    textAlign: center;
    color: #000;
    padding: 15px
`;