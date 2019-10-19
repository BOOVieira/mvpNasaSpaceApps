import React from 'react';
import { View, Text, Button } from 'react-native';

// import Componente from './Componentes';

{/*
 <Componente></Componente>

 ou

 <Componente />
 
*/}

function Home(props) {
    return (
        <View>
            <View>
                <Button title="Venda e Doação" onPress={() => props.navigation.navigate('Materiais')} />
                <Button title="Feed Artesanatos" onPress={() => props.navigation.navigate('Materiais')} />
            </View>

            <View>
                <Text>
                    Dicas
                </Text>
            </View>

        </View>
    );
}

export default Home;