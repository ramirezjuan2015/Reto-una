import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Text, ListItem } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import { Context as CategoriasContext } from '../context/CategoriasContext';
import Spacer from '../Componentes/Spacer';

const Animal = ({ navigation }) => {
    const { state, go } = useContext(CategoriasContext);
    const _id = navigation.getParam('_id');
    const category = state.find(l => l._id === _id);
    const animals = category.animals;

    console.log(animals)
    console.log(category)
    console.log(_id);

    const { container, opacityStyle } = style

    return (
        <>
            <NavigationEvents onWillFocus={go} />

            <View style={container}>
                {
                    animals.map(animal =>

                        <TouchableOpacity style={opacityStyle} onPress={() => navigation.navigate
                            ('Guardar', { animalId: animal._id })}>
                            <ListItem chevron title={animal.name} />
                        </TouchableOpacity>
                    )
                }
                <Spacer>
                    <Button
                        buttonStyle={{ backgroundColor: 'orange', height: 50, borderRadius: 10 }}
                        title="Crea un animal"
                        onPress={() => navigation.navigate('RegistroAnimal',
                            { categoryId: _id })} />
                </Spacer>

            </View>
        </>
    );
};

Animal.navigationOptions = {
    title: 'Navegar'
};

const style = StyleSheet.create({
    container: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    },
    opacityStyle: {
        marginTop: 5,
        marginRight: 10,
        marginLeft: 10,
    }
});

export default Animal; 