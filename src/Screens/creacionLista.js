import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import ListaForm from '../Componentes/ListaForm';
import Spacer from '../Componentes/Spacer';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';

const creacionLista = () => {
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h2 style={style.container}>Crea tu categoria</Text>
            <Spacer>
                <ListaForm />
            </Spacer>
        </SafeAreaView>
    );
};

creacionLista.navigationOptions = {
    title: 'Añadir Categoría',
    tabBarIcon: <FontAwesome name="plus" size={20} color="black"
    />
};

const style = StyleSheet.create({
    container: {
        textAlign: 'center',
        marginTop: 20
    }
});

export default withNavigationFocus(creacionLista);

