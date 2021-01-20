import React from 'react';
import { StyleSheet } from 'react-native';
import Spacer from '../Componentes/Spacer';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Animalcomponentes from '../Componentes/Animalcomponentes';

const ListaAnimal = ({ navigation }) => {
    console.log(navigation)
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Spacer>
                <Animalcomponentes categoryId={navigation.getParam('categoryId')} />
            </Spacer>
        </SafeAreaView>
    );
};

ListaAnimal.navigationOptions = {
    title: 'Navegar',
};

const style = StyleSheet.create({
    container: {
        textAlign: 'center',
        marginTop: 20
    }
});

export default withNavigationFocus(ListaAnimal);