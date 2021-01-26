import React, { useContext } from 'react';
import { Button } from 'react-native-elements';
import { TextInput, StyleSheet, View } from 'react-native';
import Spacer from '../Componentes/Spacer';
import { Context as SalvarContexto } from '../context/SalvarContexto';
import ListaUso from '../hooks/ListaUso';
import Spinner from '../Componentes/spinner';

const ListaForm = () => {
  const {
    state: { name, loading },
    add_name,
    startLoading,
    stopLoading,
  } = useContext(SalvarContexto);
  const [saveList] = ListaUso();

  const Logo = () => {
    startLoading();
    try {
      saveList();
    } catch (error) {
      stopLoading();
    }
  };

  const { container } = style

  return (
    <View style={container}>
      <Spacer>
        <TextInput style={style.TextInput}
          value={name}
          onChangeText={add_name}
          placeholder="Ingrese Categoria" />
      </Spacer>
      <Spacer>
        {loading ? (
          <Spinner />
        ) : (
            <Button
              buttonStyle={{ backgroundColor: 'orange', height: 50, borderRadius: 10 }}
              title="Guardar Categoria"
              onPress={Logo} />
          )}
      </Spacer>
    </View>
  );
};

const style = StyleSheet.create({
  TextInput: {
    fontSize: 25,
  },
  container: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },
});

export default ListaForm;