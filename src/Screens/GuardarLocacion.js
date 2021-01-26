import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Button, Text, ListItem } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import { Context as locContext } from "../context/locContext";
import Spacer from "../Componentes/Spacer";

const GuardarLocacion = ({ navigation }) => {
    const { state, got } = useContext(locContext);
    const animalId = navigation.getParam('animalId');
    const locations = state.filter(l => l.animalId === animalId);

    console.log('state', state);
    console.log(animalId);
    console.log(locations);

    const { container, opacityStyle } = style
    return (
        <>
            <NavigationEvents onWillFocus={got} />

            <View style={container}>
                {
                    locations.map(location =>

                        <TouchableOpacity style={opacityStyle} onPress={() => navigation.navigate
                            ('GuardarMapa', { location: animalId.markers })}>
                            <ListItem chevron title={location.name} />
                        </TouchableOpacity>
                    )
                }
                <Spacer>
                    <Button
                        buttonStyle={{ backgroundColor: 'orange', height: 50, borderRadius: 10 }}
                        title="Crea una locación"
                        onPress={() => navigation.navigate('Location',
                            { animalId })} />
                </Spacer>

            </View>
        </>
    );
};

GuardarLocacion.navigationOptions = {
    title: "Navegar",
};

const style = StyleSheet.create({
    container: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    },
    opacityStyle: {
        marginRight: 10,
        marginLeft: 10
    },
});

export default GuardarLocacion;