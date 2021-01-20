import React, { useContext } from 'react';
import { Button } from 'react-native-elements';
import { TextInput, StyleSheet } from 'react-native';
import Spacer from '../Componentes/Spacer';
import { Context as SalvarContexto } from '../context/SalvarContexto';
import ListaUso from '../hooks/ListaUso';
import Spinner from '../Componentes/spinner';

const ListaForm = () => {
  const {
    state: { name, loading },
    add_name,
    startLoading,
  } = useContext(SalvarContexto);
  const [saveList] = ListaUso();

  const Logo = () => {
    startLoading();
    saveList();
  };

  return (
    <>
      <Spacer>
        <TextInput
          value={name}
          onChangeText={add_name}
          placeholder="Ingrese Categoria" />
      </Spacer>
      <Spacer>
        {loading ? (
          <Spinner style={style.Spinner} />
        ) : (
            <Button
              buttonStyle={{ backgroundColor: 'orange' }}
              title="Guardar Categoria"
              onPress={Logo} />
          )}
      </Spacer>
    </>
  );
};

const style = StyleSheet.create({
  Spinner: {
    color: 'green',
  }
});

export default ListaForm;