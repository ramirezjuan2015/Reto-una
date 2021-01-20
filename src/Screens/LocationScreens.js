import React from 'react';
import { StyleSheet } from 'react-native';
import Spacer from '../Componentes/Spacer';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import LocationComponente from '../Componentes/LocationComponente';

const Location = ({ navigation }) => {
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h2 style={style.container}>Crea la locación de tu animal</Text>
            <Spacer>
                <LocationComponente animalId={navigation.getParam('animalId')} />
            </Spacer>
        </SafeAreaView>
    );
};

Location.navigationOptions = {
    title: 'Navegar'
};

const style = StyleSheet.create({
    container: {
        textAlign: 'center',
        marginTop: 5
    }
});

export default withNavigationFocus(Location)