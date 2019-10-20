import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

function Pesquisa({ nome }) {
    return (
        <Input
            placeholder={'Buscar ' + nome + '...' }
            leftIcon={
                <Icon
                    name='search'
                    size={24}
                    color='black'
                />
            }
        />
    );
}

export default Pesquisa