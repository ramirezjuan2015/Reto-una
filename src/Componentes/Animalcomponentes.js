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
        reset
    } = useContext(animalsContext);
    const [saveList] = animals();

    const LogoScreen = () => {
        startLoading();
        saveList(categoryId);
    };
    const { container } = style
    console.log(route?.params?.categoryId)

    return (
        <View style={container}>
            <Text h3 style={style.Text}>Crea tu nuevo Animal</Text>
            <Spacer>
                <TextInput
                    value={name}
                    onChangeText={add_name}
                    placeholder="Ingrese un Animal" />
            </Spacer>
            <Spacer>
                {loading ? (
                    <Spinner style={style.Spinner} />
                ) : (
                        <Button
                            buttonStyle={{ backgroundColor: 'orange' }}
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

    Spinner: {
        color: 'green',
    }
});

export default creacionAnimal;