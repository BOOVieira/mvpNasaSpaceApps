import React from 'react';
import { Image, View, Text, Button, SafeAreaView, FlatList } from 'react-native';
import { Infos, Card, Titulo, Thumb, Container, CardInfos } from './Componentes'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Pesquisa from '../../Componentes/Pesquisa'

const DATA = [
    {
        id: 'asasasa-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Caixa de leite',
        thumb: 'https://i.imgur.com/DkGUZt0.jpg',
        local: 'Lago Norte',
        preco: 'Grátis'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Madeira',
        thumb: 'https://i.imgur.com/4WpQckU.jpg',
        local: 'Asa Sul',
        preco: 'R$ 35,00'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Pneu',
        thumb: 'https://cdn.massadigital.com/uploads/posts/5d810e2aef1fed32acea76fd/projeto-troca-pneu-velho-por-passagem-de-onibus-926e9408-307x170.jpg',
        local: 'Cruzeiro',
        preco: 'Grátis'

    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Arame',
        thumb: 'https://http2.mlstatic.com/D_NQ_NP_574115-MLB25219310644_122016-V.jpg',
        local: 'Paranoá',
        preco: 'R$ 5,00'
    },
    {
        id: '3232323afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Pneu',
        thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuS3GbCnFxyvLS6PDR6puR8lDsJT1hPykLVTz7EvGhDu8WlMUXkQ',
        local: 'Estrutural',
        preco: 'Grátis'
    },
];


function Item({ item }) {
    return (
        <Card>

            <Thumb source={{ uri: item.thumb }} style={{ width: 80, height: "90%" }} />

            <Titulo>{item.title}</Titulo>


            <Infos>
                <CardInfos>
                    <Icon
                        name='map-marker-outline'
                        color='#000'
                        size={15}
                    />
                    <Text> {item.local}</Text>
                </CardInfos>
                <CardInfos>
                    <Icon
                        name='currency-usd'
                        color='#000'
                        size={15}
                    />
                    <Text> {item.preco}</Text>

                </CardInfos>
            </Infos>

        </Card>
    );
}

function Materiais(props) {

    return (
        <>
            <Pesquisa nome={'materiais disponíveis'} />
            <Container>


                <FlatList
                    data={DATA}
                    renderItem={({ item }) => <Item item={item} />}
                    keyExtractor={item => item.id}
                />
            </Container>
        </>
    );
}

export default Materiais;