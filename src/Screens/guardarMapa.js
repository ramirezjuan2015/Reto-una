import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Location from '../Componentes/LocationComponente';
import { FontAwesome5 } from '@expo/vector-icons';
import { Context as LocationContext } from '../context/LocationContext'

const GuardarMapa = ({ navigation }) => {

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Location locationId={navigation.getParam('locationId')} location={navigation.getParam('location')} animalId={navigation.getParam('location').animalId} />
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

    }
});

export default GuardarMapa;