import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Map from '../Componentes/Map';
import { FontAwesome5 } from '@expo/vector-icons';

const GuardarMapa = ({ navigation }) => {
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h2 style={style.styleText}>Mapa</Text>
            <Map locationId={navigation.getParam('locationId')} />
        </SafeAreaView>
    );
};

GuardarMapa.navigationOptions = {
    title: 'Mapa',
    tabBarIcon: <FontAwesome5 name="map-marker-alt" size={24} color="black" />
};

const style = StyleSheet.create({
    styleText: {
        textAlign: 'center',
        marginTop: 10,
        backgroundColor: 'yellow'
    }
});

export default GuardarMapa;