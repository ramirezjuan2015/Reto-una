import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { ListItem, Text } from 'react-native-elements';
import { Context as CategoriasContext } from '../context/CategoriasContext';

const maqueta = ({ navigation }) => {
    const { state, go } = useContext(CategoriasContext);
    const { opacityStyle } = styles

    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={go} />
            <Text style={styles.Text} h3> Categorias </Text>
            <FlatList
                data={state}
                keyExtractor={item => item._id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={opacityStyle} onPress={() => navigation.navigate
                            ('Animal', { _id: item._id })}>
                            <ListItem chevron title={item.name} />
                        </TouchableOpacity>

                    );
                }}
            />
        </View>
    );

};
maqueta.navigationOptions = () => {
    return {
        header: () => false,
    };
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
    },
    Text: {
        marginBottom: 10,
        textAlign: 'center'
    },
    opacityStyle: {
        marginRight: 10,
        marginLeft: 10,
        marginTop: 5,
    }
});

export default maqueta;