import React, { useContext } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Spacer from '../Componentes/Spacer';
import { Button, Text } from 'react-native-elements';
import { Context as animalsContext } from '../context/animalsContext';
import animals from '../hooks/animals';
import Spinner from '../Componentes/spinner';

const creacionAnimal = ({ categoryId, route, }) => {
    const {
        state: { name, loading },
        add_name,
        startLoading,
        stopLoading,
        reset
    } = useContext(animalsContext);
    const [saveList] = animals();

    const LogoScreen = () => {
        startLoading();
        try {
            saveList(categoryId);
        } catch (error) {
            stopLoading();
        }
    };
    const { container, Text, TextInput } = style
    console.log(route?.params?.categoryId)

    return (
        <View style={container}>
            <Text h3 style={Text}>Crea tu nuevo Animal</Text>
            <Spacer>
                <TextInput style={TextInput}
                    value={name}
                    onChangeText={add_name}
                    placeholder="Ingrese un Animal" />
            </Spacer>
            <Spacer>
                {loading ? (
                    <Spinner />
                ) : (
                        <Button
                            buttonStyle={{ backgroundColor: 'orange', height: 50 }}
                            title="Guardar Animal"
                            onPress={LogoScreen} />
                    )}
            </Spacer>
        </View>

    );
};
const style = StyleSheet.create({
    Text: {
        textAlign: 'center',
    },
    TextInput: {
        fontSize: 20,
        marginTop: 10,
    },
    container: {
        marginLeft: 10,
        marginRight: 10
    },
});

export default creacionAnimal;