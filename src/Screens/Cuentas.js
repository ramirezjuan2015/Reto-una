import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../Componentes/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import { FontAwesome } from '@expo/vector-icons';

const AccountScree = ({ navigation }) => {
  const { signout } = useContext(AuthContext);
  const { titleStyle, container, } = style

  return (
    <View style={container}>
      <Text style={titleStyle}>¿Estas seguro o segura de cerrar sesión?</Text>
      <Spacer>
        <Button buttonStyle={{ backgroundColor: 'lightgrey', borderRadius: 7 }} title="Si"
          onPress={signout} />
      </Spacer>
      <Spacer>
        <Button buttonStyle={{ backgroundColor: 'lightgrey', borderRadius: 7 }} title="No"
          onPress={() => navigation.navigate('Maqueta')} />
      </Spacer>
    </View>
  );
};

AccountScree.navigationOptions = {
  title: 'Cerrar Sesión',
  tabBarIcon: <FontAwesome name="gear" size={20} color="orange" />
};

const style = StyleSheet.create({
  titleStyle: {
    fontSize: 30,
    textAlign: 'center'
  },
  container: {
    marginTop: 300
  }
});

export default AccountScree;
