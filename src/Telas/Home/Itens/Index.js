import React from 'react';
import { FlatList, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TituloFeed, Card, CardInfos, Container, Infos, Thumb, Titulo } from './Componentes';


const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53adwdwdwbb28ba',
        title: 'Pulseira de mogno',
        thumb: 'https://sc01.alicdn.com/kf/HTB1U33HdgsSMeJjSspeq6y77VXaD/200662175/HTB1U33HdgsSMeJjSspeq6y77VXaD.jpg_.webp',
        local: 'Asa Sul',
        preco: 'R$ 35,00',
        autor: 'Rogério Carvalho'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fdwdwdbd91aa97f63',
        title: 'Movel de Pneu',
        thumb: 'https://vilamulher.com.br/imagens/vilamulher/default/2016/05/11/decoracao-sustentavel-moveis-feitos-de-pneus-reciclados16.jpg',
        local: 'Cruzeiro',
        preco: 'R$ 45,00',
        autor: 'Priscila Almeida'

    },

    {
        id: 'asasasa-c1b1-46c2-aedwdwdd5-3ad53abb28ba',
        title: 'Pintura a óleo',
        thumb: 'https://image.dhgate.com/0x0p/f2/albu/g7/M01/A2/84/rBVaSltinKWAFZj6AAEkqV_NF48137.jpg',
        local: 'Gama Norte',
        preco: 'R$ 120,00',
        autor: 'Rogério Carvalho'
    },
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
    {
        id: '58694a0f-3da1-47dwdw1f-bd96-145571e29d72',
        title: 'Bonsai em Arame',
        thumb: 'data:image/jpeg;base64,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',
        local: 'Paranoá',
        preco: 'R$ 5,00',
        autor: 'Rogério Carvalho'
    },
    {
        id: '3232323afc-cdwdw605-48d3-a4f8-fbd91aa97f63',
        title: 'Cama Pet Pneu',
        thumb: 'https://img.olx.com.br/images/42/420903089389122.jpg',
        local: 'Estrutural',
        preco: 'R$ 88,00',
        autor: 'Priscila Almeida'
    },
];


function Item( { item} ) {
    return (
        <Card 
        // onPress={ props.navigation.navigate('PaginaReservada') }
        >

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
                {item.autor &&
                    <CardInfos>
                        <Text> {item.autor}</Text>
                    </CardInfos>

                }
            </Infos>

        </Card>
    );
}

function Feed(props) {
    return (
        <Container>

            <TituloFeed>
                Feed
                </TituloFeed>

            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item item={item} props={props} />}
                keyExtractor={item => item.id}
            />
        </Container>
    );
}

export default Feed;