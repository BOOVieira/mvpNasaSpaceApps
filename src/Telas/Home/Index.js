import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { EnviarTexto, EnviarBot, CardInfos, Container, Impacto, ImpactoItem, ImpactoTexto, ImpactoTitulo, ImpactoTituloNum, Infos, Quadros, Texto, Thumb, Titulo } from './Componentes';
import Feed from './Itens/Index';

const DATA = [
    {
        id: 'asasasa-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Caixa de leite',
        thumb: 'https://i.imgur.com/DkGUZt0.jpg',
        local: 'Lago Norte',
        preco: 'R$ 35,00'
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
];

function Item({ item }) {

    return (
        <View>

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

        </View>
    );
}

function Home(props) {
    return (
        <Container>

            <Quadros>
                <Texto>45</Texto>
                <Texto>Valéria Alcântara</Texto>
                <Texto>4500</Texto>
                <Icon
                    name='medal'
                    color='#000'
                    size={25}
                    style={{ paddingHorizontal: 25 }}
                />
            </Quadros>

            <Impacto>
                <ImpactoItem>
                    <ImpactoTituloNum>34</ImpactoTituloNum>
                    <ImpactoTitulo>Itens foram doados</ImpactoTitulo>
                    <Icon
                        name='gifts'
                        color='#000'
                        size={25}
                        style={{ margin: "auto", alignSelf: "center" }}
                    />
                    <ImpactoTexto>Cerca de 5kg de lixo a menos nas ruas</ImpactoTexto>
                </ImpactoItem>
                <ImpactoItem>
                    <ImpactoTituloNum>22</ImpactoTituloNum>
                    <ImpactoTitulo>Itens reaproveitados</ImpactoTitulo>
                    <Icon
                        name='hand-holding-heart'
                        color='#000'
                        size={25}
                        style={{ margin: "auto", alignSelf: "center" }}
                    />
                    <ImpactoTexto>Você reaproveitou cerca de 2kg de lixo</ImpactoTexto>
                </ImpactoItem>
            </Impacto>

            <EnviarBot>
                <EnviarTexto>
                    Anunciar
                </EnviarTexto>
                <EnviarTexto>
                    Arte/Doação
                </EnviarTexto>
                <Icon
                    name='plus-circle'
                    color='#000'
                    size={35}
                    style={{ margin: 10, alignSelf: "center" }}
                />
            </EnviarBot>

            <Feed />

        </Container>
    );
}

export default Home;