import React from 'react';
import { Image, View, Text, Button, SafeAreaView, FlatList } from 'react-native';

const DATA = [
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
];

function Item({ item }) {
    return (
        <View>

            <Image source={{ uri: item.thumb }} style={{ width: 40, height: 40 }} />

            <Text>{item.title}</Text>

            <View>
                <Text>{item.local}</Text>
                <Text>{item.preco}</Text>
            </View>

        </View>
    );
}

function Materiais(props) {
    return (
        <SafeAreaView>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

export default Materiais;