import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../Componentes/AuthForm';
import NavLink from '../Componentes/NavLink';

const registroScreen = ({ navigation }) => {
  const { state, registro, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        errorMessage={state.errorMessage}
        submitButtonText="Sign up"
        onSubmit={registro}
      />
      <NavLink
        routeName="Registro"
        text="Tienes una cuenta ? click aqui para inciar sesión!"
      />
    </View>
  );
};

registroScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 20,
  },
});

export default registroScreen; 