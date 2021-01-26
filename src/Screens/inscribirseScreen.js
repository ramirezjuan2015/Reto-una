import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../Componentes/AuthForm';
import NavLink from '../Componentes/NavLink';
import { Context } from '../context/AuthContext';

const inscribirseScreen = () => {
  const { state, inscribirse, clearErrorMessage } = useContext(Context);
  const { container } = style

  return (
    <View style={container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText=""
        errorMessage={state.errorMessage}
        onSubmit={inscribirse}
        submitButtonText="Sign In"
      />
      <NavLink
        text="Si no tienes una cuenta , click aqui para registrate!"
        routeName="Inscribirse"
      />
    </View>
  );
};

inscribirseScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 20,
  },
});

export default inscribirseScreen;